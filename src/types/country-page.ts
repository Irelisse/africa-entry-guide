/**
 * Universal Country Page Data Model
 * Designed to preserve all fine-grained research fields while presenting
 * a calm, editorial, premium travel interface.
 */

export type RequirementState =
  | 'required'
  | 'not_required'
  | 'conditional'
  | 'recommended'
  | 'unknown';

export type RouteType =
  | 'visa_free'
  | 'evisa'
  | 'eta'
  | 'visa_on_arrival'
  | 'consular_visa'
  | 'transit_visa'
  | 'special_permit';

export type DataConfidence =
  | 'confirmed'
  | 'mostly_confirmed'
  | 'incomplete'
  | 'research_in_progress';

export interface EntryRoute {
  id: string;
  name: string;
  routeType: RouteType;
  availableForRussianCitizens: boolean;
  purpose: string;
  maxStay: string;
  validity: string;
  entries: 'single' | 'double' | 'multiple' | 'unknown';
  fee: {
    amount: number | string;
    currency: string;
    paymentMethod: string;
    refundable?: boolean;
    russianCardAccepted?: boolean;
    note?: string;
  };
  processingTime: string;
  applyWhere: string;
  officialUrl?: string;
  format: 'electronic' | 'stamp' | 'sticker' | 'paper' | 'none';
  priorityBadge?: string;
  allowedBorderCrossings?: string[];

  extensionAvailable?: boolean;
  extensionRules?: string;
  description?: string;
}

export interface DocumentItem {
  name: string;
  state: RequirementState;
  originalOrCopy?: 'original' | 'copy' | 'either' | 'not_applicable';
  quantity?: number;
  language?: string;
  translationRequired?: boolean;
  notarisationRequired?: boolean;
  digitalFormat?: string;
  maxFileSize?: string;
  note?: string;
}

export interface ConsularDocument {
  id: string;
  title: string;
  filename: string;
  url: string;
  fileType: 'pdf' | 'docx' | 'doc';
  fileSize?: string;
  description?: string;
}

export interface HealthRules {

  yellowFever: {
    requiredDirectFromRussia: boolean;
    requiredFromRiskCountries: boolean;
    transitThresholdHours?: number;
    airportTransitExemption?: boolean;
    certificateValidityYears?: string;
    note?: string;
  };
  medicalInsuranceRequired: boolean;
  insuranceMinCoverage?: string;
  otherVaccinesRecommended?: string[];
  healthDeclarationRequired?: boolean;
  notes?: string;
}

export interface BorderRules {
  checkpointTypes: Array<'airport' | 'land_border' | 'seaport'>;
  documentsRequestedOnArrival: string[];
  allowedEntryPoints?: string[];
  arrivalCardRequired?: boolean;
  biometricsOnArrival?: boolean;
  notes?: string;
}

export interface PostEntryRules {
  registrationRequired: boolean;
  registrationDeadlineDays?: number;
  registrationAuthority?: string;
  extensionPossible: boolean;
  extensionMaxDuration?: string;
  extensionCost?: string;
  restrictedAreas?: string[];
  notes?: string;
}

export interface TransitRules {
  visaRequired: boolean;
  airsideTransitAllowed: boolean;
  maxAirsideTransitHours?: number;
  landsideTransitAllowed?: boolean;
  leavingAirportAllowed?: boolean;
  yellowFeverAppliesToTransit?: boolean;
  notes?: string;
}

export interface OfficialContact {
  type: 'embassy' | 'consulate' | 'immigration' | 'mfa' | 'visa_portal';
  name: string;
  city?: string;
  address?: string;
  phone?: string;
  email?: string;
  website?: string;
  workingHours?: string;
}

export interface OfficialSource {
  title: string;
  organization: string;
  url: string;
  dateChecked: string;
  reliability: 'primary_official' | 'government_portal' | 'official_pdf' | 'verified_secondary';
  note?: string;
}

export interface CountryPageData {
  slug: string;
  nameRu: string;
  nameEn: string;
  iso2: string;
  iso3: string;
  flagCode: string;
  region: string;
  capital: string;
  heroImage?: string;
  heroCaption?: string;
  criticalNotice?: {
    title: string;
    description: string;
    type?: 'warning' | 'info';
  };
  currency: {

    code: string;
    name: string;
    symbol?: string;
  };
  coordinates: {
    countryLat: number;
    countryLon: number;
    capitalLat?: number;
    capitalLon?: number;
  };

  // Level 1: Quick Summary
  quickSummary: {
    visaStatusRu: 'Виза требуется' | 'Безвизовый въезд' | 'Электронное разрешение (eVisa / eTA)' | 'Виза по прибытии' | 'Информация уточняется';
    shortDescriptionRu: string;
    availableRoutesList: string[];
    maxStay: string;
    feeFrom: string;
    passportValidity: string;
    lastVerifiedDate: string;
    confidence: DataConfidence;
  };

  // Level 1 & 2: Detailed routes
  routes: EntryRoute[];

  // Requirements checklist
  requirementsChecklist: Array<{
    id: string;
    label: string;
    state: RequirementState;
    details?: string;
  }>;

  // Passport specifics
  passport: {
    validityRequirement: string;
    validityFrom: 'entry_date' | 'exit_date' | 'visa_issuance' | 'unknown';
    blankPagesRequired: number;
    biometricOnly: boolean;
    retainedByEmbassy: boolean;
    note?: string;
  };

  // Step-by-step application
  applicationSteps?: Array<{
    stepNumber: number;
    title: string;
    description: string;
    subtext?: string;
  }>;

  // Documents
  documents: DocumentItem[];

  // Downloadable official consular attachments (optional)
  consularDocuments?: ConsularDocument[];

  // Travel logistics

  travelAndStay: {
    returnTicketRequired: boolean;
    onwardTicketAccepted?: boolean;
    hotelBookingRequired: boolean;
    proofOfFundsRequired: boolean;
    fundsPerDayOrTotal?: string;
    invitationRequired: boolean;
    notes?: string;
  };

  // Health
  health: HealthRules;

  // Pre-departure Checklist
  departureChecklist: string[];

  // Border & Arrival
  border: BorderRules;

  // After Entry
  postEntry: PostEntryRules;

  // Transit
  transit?: TransitRules;

  // Special conditions
  specialConditions?: string[];

  // Contacts
  contacts: OfficialContact[];

  // Sources
  sources: OfficialSource[];

  // Verification metadata
  verification: {
    lastChecked: string;
    status: DataConfidence;
    officialSourcesCount: number;
    unresolvedConflict?: string;
  };
}
