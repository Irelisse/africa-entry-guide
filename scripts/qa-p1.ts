import assert from 'node:assert/strict';
import { getCountryData } from '../src/data/countries';
import { isDestinationPublished } from '../src/utils/registry';
const included=["benin","botswana","cote-divoire","cabo-verde","egypt","ethiopia","gambia","morocco","mauritania","mozambique","namibia","nigeria","rwanda","seychelles","togo","tanzania","south-africa","zambia","zimbabwe"];
const excluded=['cameroon','madagascar','somalia','chad'];
assert.equal(included.length,19);
for(const slug of included){
 const d=getCountryData(slug);
 assert.ok(d,'missing: '+slug);
 assert.ok(isDestinationPublished(slug),'not published: '+slug);
 assert.equal(d!.editorialSections?.length,11,'sections: '+slug);
 assert.ok(d!.routes.length>0,'routes: '+slug);
 assert.ok(d!.sources.length>0,'sources: '+slug);
 assert.ok(d!.sources.every(s=>s.url.startsWith('https://')),'https source: '+slug);
 assert.ok(!JSON.stringify(d).includes('mail.google.com'),'private mail: '+slug);
 assert.ok(d!.routes.every(r=>r.availableForRussianCitizens===true),'route availability: '+slug);
 assert.equal(d!.publicationState,'ready_for_technical_qa');
}
for(const slug of excluded)assert.equal(isDestinationPublished(slug),false,'blocked should stay unpublished: '+slug);
console.log('PASS: 19 countries, 11 sections, routes, sources; 4 blocked countries excluded');
