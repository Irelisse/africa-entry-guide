export interface DestinationItem {
  slug: string;
  name: string;
  iso2: string;
  type: string;
  parentJurisdiction: string | null;
  coverageStatus: string;
  statusNote: string;
  parentSlug: string | null;
  flagCode?: string;
}

export interface SectionDefinition {
  key: string;
  title: string;
  description: string;
}

export const SECTIONS: SectionDefinition[] = [
  {
    key: 'sovereign_state',
    title: 'Суверенные государства',
    description: '54 государства. От привычных направлений до тех, которым обычные справочники посвящают одну строчку.'
  },
  {
    key: 'partially_recognised_entity',
    title: 'Частично признанные образования',
    description: 'Там, где международный статус сложнее визовой анкеты.'
  },
  {
    key: 'disputed_territory',
    title: 'Спорные территории',
    description: 'Спор о территории не отменяет вопроса: кто и на каких условиях туда пускает.'
  },
  {
    key: 'dependent_territory',
    title: 'Зависимые территории',
    description: 'Не государства, но со своими правилами доступа.'
  },
  {
    key: 'overseas_territory',
    title: 'Заморские департаменты и владения',
    description: 'Часть другой страны — иногда только на карте. Правила въезда могут жить своей жизнью.'
  },
  {
    key: 'european_african_territory',
    title: 'Европейские территории в Африке и у её побережья',
    description: 'Европа, которая географически оказалась в Африке или совсем рядом.'
  },
  {
    key: 'special_region',
    title: 'Автономные и особые регионы',
    description: 'Когда одной страницы страны недостаточно.'
  },
  {
    key: 'special_geographic_case',
    title: 'Особые географические случаи',
    description: 'Острова, пограничные аномалии и места, которые не помещаются в обычный каталог.'
  }
];

export const REMOTE_FLAGS: Record<string, string> = {
  'somaliland': 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Flag_of_Somaliland.svg',
  'zanzibar': 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Flag_of_Zanzibar.svg',
  'puntland': 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Flag_of_Puntland.svg',
  'ascension-island': 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Flag_of_Ascension_Island.svg',
  'tristan-da-cunha': 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Flag_of_Tristan_da_Cunha.svg',
  'canary-islands': 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Flag_of_Canary_Islands_%28official%29.svg',
  'ceuta': 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Flag_of_Ceuta.svg',
  'melilla': 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Flag_of_Melilla.svg',
  'madeira': 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Flag_of_Madeira.svg',
};

export const NEUTRAL_SLUGS = new Set(['bir-tawil', 'abyei', 'halaib-triangle', 'western-sahara']);

// Set of published country slugs that have active pages.
// Ready to receive the 5 real countries.
export const PUBLISHED_SLUGS = new Set<string>([]);


export function isDestinationPublished(slug: string): boolean {
  return PUBLISHED_SLUGS.has(slug);
}

export function getFlagUrl(slug: string, code?: string, baseUrl: string = '/'): string | undefined {
  if (NEUTRAL_SLUGS.has(slug)) {
    return undefined;
  }
  if (REMOTE_FLAGS[slug]) {
    return REMOTE_FLAGS[slug];
  }
  if (code) {
    const upper = code.toUpperCase();
    if (!['AC', 'TA', 'IC', 'EA'].includes(upper)) {
      const cleanBase = baseUrl.endsWith('/') ? baseUrl : `${baseUrl}/`;
      return `${cleanBase}flags/${code.toLowerCase()}.png`;
    }
  }
  return undefined;
}

export function filterDestinations(
  items: DestinationItem[],
  query: string = '',
  typeFilter: string = 'all'
): DestinationItem[] {
  const cleanQuery = query.trim().toLowerCase();
  return items.filter(item => {
    if (typeFilter !== 'all' && item.type !== typeFilter) {
      return false;
    }
    if (!cleanQuery) {
      return true;
    }
    return (
      item.name.toLowerCase().includes(cleanQuery) ||
      item.slug.toLowerCase().includes(cleanQuery) ||
      (item.iso2 && item.iso2.toLowerCase().includes(cleanQuery)) ||
      (item.parentJurisdiction && item.parentJurisdiction.toLowerCase().includes(cleanQuery))
    );
  });
}

export function groupDestinationsBySection(
  items: DestinationItem[],
  sections: SectionDefinition[] = SECTIONS
): Array<{ section: SectionDefinition; items: DestinationItem[] }> {
  return sections
    .map(section => ({
      section,
      items: items.filter(item => item.type === section.key),
    }))
    .filter(group => group.items.length > 0);
}

export function getDestinationStats(items: DestinationItem[]) {
  const total = items.length;
  const sovereign = items.filter(i => i.type === 'sovereign_state').length;
  const territories = items.filter(i => i.type !== 'sovereign_state').length;
  const published = items.filter(i => isDestinationPublished(i.slug)).length;
  return {
    total,
    sovereign,
    territories,
    published,
  };
}
