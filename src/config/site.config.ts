export type StandardIcon =
  | "cooling"
  | "heating"
  | "plumbing"
  | "air-quality"
  | "electrical"
  | "maintenance";

export type ThemeStyle = "clean" | "technical" | "industrial" | "warm";

export type ThemeColors = {
  brandPrimary: string;
  brandSecondary: string;
  brandAccent: string;
  page: string;
  surfaceDark: string;
  surfaceDarkAlt: string;
  surfaceElevated: string;
  surfaceSoft: string;
  textPrimary: string;
  textSecondary: string;
  textMuted: string;
  textOnBrand: string;
  borderSubtle: string;
  borderStrong: string;
  glowPrimary: string;
  glowSecondary: string;
  networkLine: string;
  success: string;
  service1: string;
  service2: string;
  service3: string;
  service4: string;
  service5: string;
};

export type CoverageLocation = {
  name: string;
  kind: "city" | "county" | "community";
  lat?: number;
  lng?: number;
  hub?: boolean;
  note?: string;
  href?: string;
};

export type ContactSubmissionMode = "demo" | "endpoint";

export type SiteConfig = {
  brand: {
    name: string;
    shortName: string;
    logo: string;
    logoLight: string;
    region: string;
  };
  theme: {
    style: ThemeStyle;
    colors: ThemeColors;
  };
  header: {
    navServices: string;
    navAreas: string;
    navContact: string;
    helpLabel: string;
    ctaLabel: string;
    mobileEyebrow: string;
    mobileCallLabel: string;
  };
  opening: {
    enabled: boolean;
    /** Total screen time including the final one-sheet lift reveal. */
    durationMs: number;
    eyebrow: string;
    line1: string;
    line2: string;
    detail: string;
    location: string;
    skipLabel: string;
  };
  hero: {
    /** The Climate Chamber is the new signature, with photo-based legacy layouts retained. */
    layout: "service-craft" | "climate-chamber" | "open-door" | "picture-window" | "keepsake";
    eyebrow: string;
    headlineLine1: string;
    headlineLine2: string;
    description: string;
    primaryCta: string;
    secondaryCta: string;
    locationLabel: string;
    locationValue: string;
    edgeLabel: string;
    bottomStatement: string;
    sillLabel: string;
    serviceLabels: [string, string, string];
    discoverLabel: string;
    motion: {
      /** Turn off when capturing zero-animation QA screenshots or when desired for a prospect. */
      enabled: boolean;
      /** Balanced is more cinematic; gentle has the same choreography at a slower pace. */
      pace: "balanced" | "gentle";
      /** Very slight hovering of the inset media after the one-time entrance. */
      ambient: boolean;
      /** Small image-depth shift on scroll, disabled automatically for reduced motion. */
    };
    system?: {
      eyebrow: string;
      modes: [
        { id: "cool"; label: string; detail: string },
        { id: "warm"; label: string; detail: string },
        { id: "pure"; label: string; detail: string },
      ];
    };
    media: {
      primarySrc: string;
      primaryAlt: string;
      primaryPosition: string;
      /** For picture-window/keepsake only. Open-door always displays the entire image without cropping. */
      fit: "contain" | "cover";
      /** Backdrop for the alternate fixed-window layouts only. */
      backdrop: "matte" | "blur";
    };
  };
  seo: {
    title: string;
    description: string;
  };
  contact: {
    phoneDisplay: string;
    phoneHref: string;
    email: string;
    address: string;
    contactUrl: string;
    servicesUrl: string;
  };
  brandStandard: {
    eyebrow: string;
    titleLine1: string;
    titleLine2: string;
    bodyTitle: string;
    body: string;
    callLabel: string;
    availabilityLabel: string;
    panelEyebrow: string;
    panelTitle: string;
    panelFooter: string;
    handoff: string;
    items: Array<{
      icon: StandardIcon;
      label: string;
      detail: string;
    }>;
  };
  services: {
    eyebrow: string;
    introLine1: string;
    introLine2: string;
    summaryEyebrow: string;
    summaryTitle: string;
    summaryBody: string;
    summaryCta: string;
    items: [
      ServiceConfig,
      ServiceConfig,
      ServiceConfig,
      ServiceConfig,
      ServiceConfig,
    ];
  };
  coverage: {
    eyebrow: string;
    titleLine1: string;
    titleLine2: string;
    description: string;
    featuredLocation: string;
    locationDetail: string;
    ctaLabel: string;
    networkLabel: string;
    regionLabel: string;
    metrics: [
      { value: string; label: string },
      { value: string; label: string },
      { value: string; label: string },
    ];
    locations: CoverageLocation[];
  };
  contactSection: {
    eyebrow: string;
    titleLine1: string;
    titleLine2: string;
    body: string;
    primaryCta: string;
    secondaryCta: string;
    submissionMode: ContactSubmissionMode;
    formEndpoint: string;
    successMessage: string;
  };
};

export type ServiceConfig = {
  name: string;
  shortName: string;
  image: string;
  description?: string;
};

export const siteConfig: SiteConfig = {
  "brand": {
    "name": "Bowman Heating & Air",
    "shortName": "Bowman",
    "logo": "/brand/bowman-wordmark.svg",
    "logoLight": "/brand/bowman-wordmark.svg",
    "region": "Gulf Shores · Serving all of Baldwin County"
  },
  "theme": {
    "style": "industrial",
    "colors": {
      "brandPrimary": "#242B2E",
      "brandSecondary": "#F47743",
      "brandAccent": "#E9B753",
      "page": "#171C1F",
      "surfaceDark": "#20272A",
      "surfaceDarkAlt": "#2C3538",
      "surfaceElevated": "#394448",
      "surfaceSoft": "#F2F2EE",
      "textPrimary": "#FCFCFA",
      "textSecondary": "#E3E3DD",
      "textMuted": "#A7ACA8",
      "textOnBrand": "#FFFFFF",
      "borderSubtle": "#40484A",
      "borderStrong": "#646D6D",
      "glowPrimary": "#242B2E",
      "glowSecondary": "#F47743",
      "networkLine": "#E9B753",
      "success": "#6AA27A",
      "service1": "#242B2E",
      "service2": "#E9B753",
      "service3": "#F47743",
      "service4": "#2C3538",
      "service5": "#394448"
    }
  },
  "header": {
    "navServices": "Services",
    "navAreas": "Service areas",
    "navContact": "Contact",
    "helpLabel": "Call (251) 437-8152",
    "ctaLabel": "Get a free estimate",
    "mobileEyebrow": "GULF SHORES · SERVING ALL OF BALDWIN COUNTY",
    "mobileCallLabel": "Call now"
  },
  "opening": {
    "enabled": false,
    "durationMs": 1400,
    "eyebrow": "GULF SHORES LOCAL · ANSWERING 24/7",
    "line1": "AC down?",
    "line2": "We’re on the way.",
    "detail": "Bowman Heating & Air · Gulf Shores · Serving all of Baldwin County",
    "location": "24/7 emergencies · Same-day service",
    "skipLabel": "Skip intro"
  },
  "hero": {
    "layout": "service-craft",
    "eyebrow": "GULF SHORES LOCAL · ANSWERING 24/7",
    "headlineLine1": "AC down?",
    "headlineLine2": "Bowman’s on the way.",
    "description": "Same-day HVAC service and 24/7 emergency help from a real Baldwin County local.",
    "primaryCta": "Get a free estimate",
    "secondaryCta": "Call Bowman",
    "locationLabel": "GULF SHORES · SERVING ALL OF BALDWIN COUNTY",
    "locationValue": "Gulf Shores · Orange Beach · Fairhope",
    "edgeLabel": "BOWMAN SERVICE · GULF SHORES, AL",
    "bottomStatement": "AL HVAC Lic. #2021055 · Licensed & insured",
    "sillLabel": "24/7 EMERGENCIES · SAME-DAY SERVICE",
    "serviceLabels": [
      "Cooling",
      "Heating",
      "Air quality"
    ],
    "discoverLabel": "Explore services",
    "motion": {
      "enabled": true,
      "pace": "balanced",
      "ambient": false
    },
    "system": {
      "eyebrow": "LOCAL COMFORT / IN MOTION",
      "modes": [
        {
          "id": "cool",
          "label": "Cooling",
          "detail": "A considered path from warm intake to balanced, conditioned air."
        },
        {
          "id": "warm",
          "label": "Heating",
          "detail": "Steady circulation, carefully controlled for colder days."
        },
        {
          "id": "pure",
          "label": "Air quality",
          "detail": "A focus on filtration and the air moving through every room."
        }
      ]
    },
    "media": {
      "primarySrc": "https://www.callbowman.com/images/brand/bowman-truck-hero-mobile.jpg",
      "primaryAlt": "Bowman Heating & Air service truck in Gulf Shores, Alabama.",
      "primaryPosition": "center 52%",
      "fit": "cover",
      "backdrop": "matte"
    }
  },
  "seo": {
    "title": "Bowman Heating & Air | Gulf Shores HVAC & 24/7 Service",
    "description": "Local heating and air in Gulf Shores, Orange Beach, Fairhope and Baldwin County. Same-day service and 24/7 emergencies. Call 251-437-8152."
  },
  "contact": {
    "phoneDisplay": "(251) 437-8152",
    "phoneHref": "tel:+12514378152",
    "email": "info@callbowman.com",
    "address": "Gulf Shores, AL 36542",
    "contactUrl": "#contact",
    "servicesUrl": "#services"
  },
  "brandStandard": {
    "eyebrow": "NO CALL CENTER. NO RUNAROUND.",
    "titleLine1": "The local HVAC pro who picks up.",
    "titleLine2": "No call center. No runaround.",
    "bodyTitle": "The local HVAC pro who picks up.",
    "body": "Bowman Heating & Air is an independent Gulf Shores HVAC company serving Baldwin County. The company emphasizes same-day service, 24/7 emergency response, and direct communication with owner and technician Steve Bowman.",
    "callLabel": "Call now",
    "availabilityLabel": "Gulf Shores · Serving all of Baldwin County",
    "panelEyebrow": "BOWMAN HEATING & AIR",
    "panelTitle": "AC repair, installation, generators, water heaters, heat pumps, and indoor air quality—all with one local point of contact.",
    "panelFooter": "AL HVAC Lic. #2021055 · Licensed & insured",
    "handoff": "Explore Bowman services.",
    "items": [
      {
        "icon": "cooling",
        "label": "Cooling service",
        "detail": "Same-day diagnosis and AC repair across Baldwin County."
      },
      {
        "icon": "heating",
        "label": "Heating & installation",
        "detail": "Carrier and Bosch installation options built for Gulf Coast conditions."
      },
      {
        "icon": "maintenance",
        "label": "Local expertise",
        "detail": "Heat pump and heating services for year-round comfort."
      }
    ]
  },
  "services": {
    "eyebrow": "YEAR-ROUND HOME COMFORT",
    "introLine1": "Service shaped",
    "introLine2": "around your home.",
    "summaryEyebrow": "BOWMAN HEATING & AIR",
    "summaryTitle": "AC repair, installation, generators, water heaters, heat pumps, and indoor air quality—all with one local point of contact.",
    "summaryBody": "Bowman Heating & Air is an independent Gulf Shores HVAC company serving Baldwin County. The company emphasizes same-day service, 24/7 emergency response, and direct communication with owner and technician Steve Bowman.",
    "summaryCta": "Talk to the team",
    "items": [
      {
        "name": "AC repair",
        "shortName": "Cooling",
        "image": "/services/01.svg",
        "description": "Same-day diagnosis and AC repair across Baldwin County."
      },
      {
        "name": "AC installation",
        "shortName": "Heating",
        "image": "/services/02.svg",
        "description": "Carrier and Bosch installation options built for Gulf Coast conditions."
      },
      {
        "name": "Heating & heat pumps",
        "shortName": "Installation",
        "image": "/services/03.svg",
        "description": "Heat pump and heating services for year-round comfort."
      },
      {
        "name": "Generators & water heaters",
        "shortName": "Maintenance",
        "image": "/services/04.svg",
        "description": "Generator and water heater sales, installation, and service."
      },
      {
        "name": "Indoor air quality",
        "shortName": "Air quality",
        "image": "/services/05.svg",
        "description": "Indoor air quality equipment, UV air scrubbers, and whole-house dehumidifiers."
      }
    ]
  },
  "coverage": {
    "eyebrow": "LOCAL SERVICE AREA",
    "titleLine1": "Close to home.",
    "titleLine2": "Here when you need us.",
    "description": "Gulf Shores · Serving all of Baldwin County — Gulf Shores, AL, Orange Beach, AL, Fairhope, AL, Foley, AL, Daphne, AL, Spanish Fort, AL, Robertsdale, AL, Loxley, AL, Fort Morgan, AL.",
    "featuredLocation": "Gulf Shores, AL",
    "locationDetail": "Proud to serve Gulf Shores · Serving all of Baldwin County.",
    "ctaLabel": "Get a free estimate",
    "networkLabel": "THE LOCAL SERVICE NETWORK",
    "regionLabel": "Gulf Shores · Serving all of Baldwin County",
    "metrics": [
      {
        "value": "9 communities",
        "label": "Service area"
      },
      {
        "value": "24/7 emergencies · Same-day service",
        "label": "Local commitment"
      },
      {
        "value": "Local team",
        "label": "Gulf Shores · Serving all of Baldwin County"
      }
    ],
    "locations": [
      {
        "name": "Gulf Shores, AL",
        "kind": "city",
        "lat": 30.246,
        "lng": -87.7008,
        "hub": true
      },
      {
        "name": "Orange Beach, AL",
        "kind": "city",
        "lat": 30.2944,
        "lng": -87.5736,
        "hub": false
      },
      {
        "name": "Fairhope, AL",
        "kind": "city",
        "lat": 30.5227,
        "lng": -87.9033,
        "hub": false
      },
      {
        "name": "Foley, AL",
        "kind": "city",
        "lat": 30.4066,
        "lng": -87.6836,
        "hub": false
      },
      {
        "name": "Daphne, AL",
        "kind": "city",
        "lat": 30.6035,
        "lng": -87.9036,
        "hub": false
      },
      {
        "name": "Spanish Fort, AL",
        "kind": "city",
        "lat": 30.6749,
        "lng": -87.9153,
        "hub": false
      },
      {
        "name": "Robertsdale, AL",
        "kind": "city",
        "lat": 30.5538,
        "lng": -87.7111,
        "hub": false
      },
      {
        "name": "Loxley, AL",
        "kind": "city",
        "lat": 30.6188,
        "lng": -87.7536,
        "hub": false
      },
      {
        "name": "Fort Morgan, AL",
        "kind": "city",
        "lat": 30.229,
        "lng": -88.022,
        "hub": false
      }
    ]
  },
  "contactSection": {
    "eyebrow": "TALK WITH A LOCAL TEAM",
    "titleLine1": "Let’s get your",
    "titleLine2": "comfort back.",
    "body": "Tell Bowman what you need, or call the team directly to get started.",
    "primaryCta": "Get a free estimate",
    "secondaryCta": "Call Bowman",
    "submissionMode": "demo",
    "formEndpoint": "",
    "successMessage": "Thanks for reaching out. This concept form is a preview and is not connected yet; call (251) 437-8152 to contact Bowman directly."
  }
};
