import test from 'node:test';
import assert from 'node:assert/strict';
import {
  filterDestinations,
  groupDestinationsBySection,
  getDestinationStats,
  getFlagUrl,
  isDestinationPublished,
  SECTIONS
} from './registry.ts';
import type { DestinationItem } from './registry.ts';

const mockItems: DestinationItem[] = [
  {
    slug: 'algeria',
    name: 'Алжир',
    iso2: 'DZ',
    type: 'sovereign_state',
    parentJurisdiction: null,
    coverageStatus: 'included',
    statusNote: '',
    parentSlug: null,
    flagCode: 'DZ'
  },
  {
    slug: 'somaliland',
    name: 'Сомалиленд',
    iso2: 'SO',
    type: 'partially_recognised_entity',
    parentJurisdiction: 'Сомали',
    coverageStatus: 'included',
    statusNote: '',
    parentSlug: 'somalia',
    flagCode: 'SO'
  },
  {
    slug: 'bir-tawil',
    name: 'Бир-Тавиль',
    iso2: '',
    type: 'special_geographic_case',
    parentJurisdiction: null,
    coverageStatus: 'included',
    statusNote: '',
    parentSlug: null
  }
];

test('filterDestinations filters by name in Russian', () => {
  const result = filterDestinations(mockItems, 'алжир');
  assert.equal(result.length, 1);
  assert.equal(result[0].slug, 'algeria');
});

test('filterDestinations filters by parent jurisdiction', () => {
  const result = filterDestinations(mockItems, 'Сомали');
  assert.equal(result.length, 1);
  assert.equal(result[0].slug, 'somaliland');
});

test('filterDestinations filters by type', () => {
  const result = filterDestinations(mockItems, '', 'sovereign_state');
  assert.equal(result.length, 1);
  assert.equal(result[0].slug, 'algeria');
});

test('getFlagUrl handles remote custom flags, local flags and neutral entities', () => {
  const somalilandFlag = getFlagUrl('somaliland', 'SO');
  assert.match(somalilandFlag || '', /Flag_of_Somaliland\.svg/);

  const algeriaFlag = getFlagUrl('algeria', 'DZ');
  assert.equal(algeriaFlag, '/flags/dz.png');

  const neutralFlag = getFlagUrl('bir-tawil');
  assert.equal(neutralFlag, undefined);
});

test('isDestinationPublished returns true for published top 5 countries', () => {
  assert.equal(isDestinationPublished('gabon'), true);
  assert.equal(isDestinationPublished('ghana'), true);
  assert.equal(isDestinationPublished('kenya'), true);
  assert.equal(isDestinationPublished('sao-tome-and-principe'), true);
  assert.equal(isDestinationPublished('mauritius'), true);
  assert.equal(isDestinationPublished('algeria'), false);
});




test('getDestinationStats calculates counts correctly', () => {
  const stats = getDestinationStats(mockItems);
  assert.equal(stats.total, 3);
  assert.equal(stats.sovereign, 1);
  assert.equal(stats.territories, 2);
  assert.equal(stats.published, 0);
});

test('groupDestinationsBySection groups items by matching sections', () => {
  const groups = groupDestinationsBySection(mockItems, SECTIONS);
  assert.equal(groups.length, 3);
  assert.equal(groups[0].section.key, 'sovereign_state');
  assert.equal(groups[0].items.length, 1);
});
