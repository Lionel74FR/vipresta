/**
 * Contenu éditorial du site VIPresta.
 * ─────────────────────────────────────────────────────────────
 * Tout le texte du site est centralisé ici : modifier ce fichier
 * suffit pour mettre le site à jour, sans toucher aux composants.
 */

export const site = {
  name: "VIPresta",
  legalName: "VIPresta",
  baseline: "Votre prestige, notre mission",
  tagline: "Agence d'hôtesses & d'animations événementielles",
  zones: ["Annecy", "Haute-Savoie"],
  url: "https://www.vipresta.fr",
  phone: "+33 6 15 46 01 27",
  phoneDisplay: "06 15 46 01 27",
  email: "contact@vipresta.fr",
  instagram: "https://www.instagram.com/vipresta_",
  facebook: "https://www.facebook.com/share/1BxDajZ5JT/?mibextid=wwXIfr",
  address: {
    locality: "Annecy",
    region: "Haute-Savoie",
    country: "FR",
  },
} as const;

export const nav = [
  { label: "À propos", href: "#a-propos" },
  { label: "Services", href: "#services" },
  { label: "Animations", href: "#animations" },
  { label: "Valeurs", href: "#valeurs" },
  { label: "Avis", href: "#avis" },
  { label: "Contact", href: "#contact" },
];

export const about = {
  eyebrow: "À propos",
  title: "Une agence d'exception",
  lead: "VIPresta est une agence d'hôtesses, hôtes et d'animations événementielles basée à Annecy et en Haute-Savoie.",
  body: [
    "Nous accompagnons les organisateurs d'événements, entreprises et institutions avec un sourcing rigoureux, une exigence de service et une élégance qui ne laissent rien au hasard.",
    "Chaque mission est préparée, briefée et supervisée. Notre promesse : incarner votre image sur le terrain, avec la même rigueur que si c'était la nôtre.",
  ],
  stats: [
    { value: 500, suffix: "+", label: "Événements orchestrés" },
    { value: 250, suffix: "+", label: "Talents sélectionnés" },
    { value: 2, suffix: "", label: "Régions couvertes", prefix: "" },
    { value: 98, suffix: "%", label: "Clients fidélisés" },
  ],
};

export type Service = {
  id: string;
  title: string;
  description: string;
  image: string;
  points: string[];
};

export const services: Service[] = [
  {
    id: "hotesses",
    title: "Hôtesses & hôtes d'accueil",
    description:
      "Accueil, orientation, vestiaire, billetterie, accompagnement VIP : un personnel formé, présenté et briefé pour représenter votre marque avec justesse.",
    image: "/images/service-hotesses.svg",
    points: ["Accueil salons & congrès", "Soirées privées & galas", "Lancements de produit"],
  },
  {
    id: "evenementiel",
    title: "Coordination événementielle",
    description:
      "Un chef de projet dédié qui cadre le dispositif, dimensionne les équipes et tient le planning le jour J. Vous gardez la main, nous gérons l'exécution.",
    image: "/images/service-coordination.svg",
    points: ["Brief & repérage", "Staffing sur mesure", "Supervision sur site"],
  },
  {
    id: "animation",
    title: "Animations & street marketing",
    description:
      "Des dispositifs qui créent l'attention : animations en boutique, opérations terrain, distribution d'échantillons et activations de marque.",
    image: "/images/service-animation.svg",
    points: ["Animation commerciale", "Opérations terrain", "Activation de marque"],
  },
];

export type PrestigeAnimation = {
  id: string;
  name: string;
  tagline: string;
  description: string;
  image: string;
};

export const prestige: PrestigeAnimation[] = [
  {
    id: "robe-plateau-led",
    name: "Robe Plateau LED",
    tagline: "L'entrée en scène lumineuse",
    description:
      "Service bandeaux et vodkas. Cette robe illuminée porte vos bouteilles de champagne ou de spiritueux et crée l'instant gourmand que tout le monde filme.",
    image: "/images/prestige-led.svg",
  },
  {
    id: "robe-champagne",
    name: "Robe Champagne",
    tagline: "Le service qui vient à vous",
    description:
      "Animation chic et spectaculaire : notre hôtesse porte les verres de champagne en harmonie parfaite, offrant une présentation aussi élégante que mémorable.",
    image: "/images/prestige-champagne.svg",
  },
  {
    id: "ceinture-moovika",
    name: "Ceinture Moovika",
    tagline: "La mobilité du service",
    description:
      "Service mobile et intuitif. Une animation élégante permettant de circuler parmi vos convives avec fluidité et style, sans jamais rompre le rythme de la soirée.",
    image: "/images/prestige-moovika.svg",
  },
  {
    id: "bar-mobile",
    name: "Bar mobile signature",
    tagline: "Le cocktail en mouvement",
    description:
      "Un bar itinérant tenu par nos barmen, pensé pour les espaces sans point d'eau. Cartes sur mesure, verrerie soignée, service à la table.",
    image: "/images/prestige-bar.svg",
  },
];

export const values = [
  {
    id: "excellence",
    title: "Excellence",
    description: "Une sélection exigeante et un niveau de prestation constant, mission après mission.",
    icon: "award",
  },
  {
    id: "reactivite",
    title: "Réactivité",
    description: "Une réponse sous 24 h et des équipes mobilisables en urgence, week-ends compris.",
    icon: "bolt",
  },
  {
    id: "elegance",
    title: "Élégance",
    description: "Tenue, posture, langage : chaque détail est pensé pour servir votre image.",
    icon: "sparkle",
  },
  {
    id: "proximite",
    title: "Proximité",
    description: "Un interlocuteur unique, joignable, qui connaît votre événement dans le détail.",
    icon: "handshake",
  },
];

export type Review = {
  author: string;
  role?: string;
  rating: number;
  text: string;
};

export const reviews: Review[] = [
  {
    author: "Philippe P.",
    role: "Directeur de salon professionnel",
    rating: 5,
    text: "Une équipe de très bonne qualité, soignée et excellente. Le suivi est réel, l'organisation parfaite et rien n'est laissé au hasard. Je recommande vivement.",
  },
  {
    author: "Sandra M.",
    role: "Responsable communication",
    rating: 5,
    text: "Nous avons fait appel à VIPresta pour notre soirée de lancement : accueil impeccable, ponctualité irréprochable et une vraie élégance. Nos invités en parlent encore.",
  },
  {
    author: "Karim B.",
    role: "Wedding planner",
    rating: 5,
    text: "La Robe Champagne a créé l'effet recherché au moment du cocktail. Professionnalisme et sens du détail : exactement ce qu'on attend d'une agence de prestige.",
  },
  {
    author: "Élodie V.",
    role: "Directrice d'hôtel 5★",
    rating: 5,
    text: "Réactivité remarquable sur un remplacement de dernière minute. L'hôtesse envoyée était parfaitement briefée. Un partenaire sur lequel on peut compter.",
  },
];

export const clients = [
  "Maison Aurélien",
  "Groupe Levantis",
  "Riviera Events",
  "83 Studio",
  "Nova Prestige",
  "Bureau Milane",
  "Altitude Group",
  "Carrera & Fils",
  "Écrin Capital",
  "Edifim",
  "Sérac Hotels",
  "Lumina Studio",
];

export const contact = {
  eyebrow: "Contact",
  title: "Parlons de votre événement",
  lead: "Pour toute demande de devis ou d'information, notre équipe vous répond sous 24 heures ouvrées.",
  fields: {
    eventTypes: [
      "Salon / congrès",
      "Soirée privée / gala",
      "Lancement de produit",
      "Mariage",
      "Animation prestige",
      "Autre",
    ],
  },
};
