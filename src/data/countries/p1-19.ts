import type { CountryPageData } from '../../types/country-page';
import { beninData } from './p1/benin';
import { botswanaData } from './p1/botswana';
import { coteDivoireData } from './p1/cote-divoire';
import { caboVerdeData } from './p1/cabo-verde';
import { egyptData } from './p1/egypt';
import { ethiopiaData } from './p1/ethiopia';
import { gambiaData } from './p1/gambia';
import { moroccoData } from './p1/morocco';
import { mauritaniaData } from './p1/mauritania';
import { mozambiqueData } from './p1/mozambique';
import { namibiaData } from './p1/namibia';
import { nigeriaData } from './p1/nigeria';
import { rwandaData } from './p1/rwanda';
import { seychellesData } from './p1/seychelles';
import { togoData } from './p1/togo';
import { tanzaniaData } from './p1/tanzania';
import { southAfricaData } from './p1/south-africa';
import { zambiaData } from './p1/zambia';
import { zimbabweData } from './p1/zimbabwe';

export const p1CountryData: Record<string,CountryPageData> = {
  'benin': beninData,
  'botswana': botswanaData,
  'cote-divoire': coteDivoireData,
  'cabo-verde': caboVerdeData,
  'egypt': egyptData,
  'ethiopia': ethiopiaData,
  'gambia': gambiaData,
  'morocco': moroccoData,
  'mauritania': mauritaniaData,
  'mozambique': mozambiqueData,
  'namibia': namibiaData,
  'nigeria': nigeriaData,
  'rwanda': rwandaData,
  'seychelles': seychellesData,
  'togo': togoData,
  'tanzania': tanzaniaData,
  'south-africa': southAfricaData,
  'zambia': zambiaData,
  'zimbabwe': zimbabweData,
};
