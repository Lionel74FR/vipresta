/**
 * Contenu éditorial du site VIPresta.
 * -------------------------------------------------------------
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
    street: "892 chemin de Chantepoulet",
    complement: "ZA Les Vanettes",
    postalCode: "74330",
    locality: "Poisy",
    region: "Haute-Savoie",
    country: "FR",
  },
  legal: {
    /** Source : annuaire-entreprises.data.gouv.fr (INSEE / RNE), consulte le 25/09/2026. */
    form: "SARL",
    manager: "Sabrina Moufrige",
    siren: "101 449 296",
    siret: "101 449 296 00017",
    vat: "FR21101449296",
    rcs: "RCS Annecy 101 449 296",
    ape: "82.99Z — Autres activites de soutien aux entreprises n.c.a.",
    capital: "3 000 €",
  },
} as const;

export const nav = [
  { label: "À propos", href: "#a-propos" },
  { label: "Services", href: "#services" },
  { label: "Animations", href: "#animations" },
  { label: "Tenues", href: "#tenues" },
  { label: "Galerie", href: "#galerie" },
  { label: "Avis", href: "#avis" },
  { label: "Partenaires", href: "#partenaires" },
  { label: "Contact", href: "#contact" },
];

export const about = {
  eyebrow: "À propos",
  title: "Une agence d'exception",
  lead: "VIPresta est une agence d'hôtesses, hôtes et d'animations événementielles basée à Annecy, au cœur de la Haute-Savoie.",
  body: [
    "Nous accompagnons les organisateurs d'événements, entreprises et institutions avec une équipe élégante, formée, réactive et bilingue, qui incarne une image haut de gamme et professionnelle.",
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
      "Présentation irréprochable, accueil fluide et chaleureux, équipes bilingues : nos hôtesses et hôtes incarnent l'élégance et le professionnalisme de votre marque sur le terrain.",
    image: "/images/service-hotesses.webp",
    points: ["Accueil & orientation des visiteurs", "Gestion des flux et contrôle des accès", "Distribution de badges & documents"],
  },
  {
    id: "evenementiel",
    title: "Coordination terrain",
    description:
      "Gestion des flux, soutien logistique et communication directe côté organisateur. Un interlocuteur dédié qui cadre le dispositif et tient le planning le jour J.",
    image: "/images/service-coordination.webp",
    points: ["Brief & repérage", "Staffing sur mesure", "Supervision sur site"],
  },
  {
    id: "animation",
    title: "Animations prestige",
    description:
      "Des dispositifs qui créent l'attention et transforment le service en véritable expérience visuelle : Robe Plateau LED, Robe Champagne, Ceinture Mouvika.",
    image: "/images/service-animation.webp",
    points: ["Animation lumineuse", "Service mobile & interactif", "Activation de marque"],
  },
];

export type PrestigeAnimation = {
  id: string;
  name: string;
  tagline: string;
  description: string;
  image: string;
  points?: string[];
};

export const prestige: PrestigeAnimation[] = [
  {
    id: "robe-plateau-led",
    name: "Robe Plateau LED",
    tagline: "Alliance de la technologie et de l'élégance",
    description:
      "Équipée d'un plateau circulaire lumineux, la Robe Plateau LED permet à l'hôtesse de servir vos invités avec raffinement tout en créant une ambiance spectaculaire. Cette animation attire instantanément le regard et transforme le service en véritable expérience visuelle. Idéale pour les cocktails, lancements de produits, soirées premium et réceptions, elle s'adapte à tous les univers grâce à son design moderne et à sa lumière personnalisable.",
    image: "/images/prestige-led.webp",
    points: ["Lumière personnalisable", "Cornets apéritifs & cornets de fruits", "Cocktails, lancements, réceptions"],
  },
  {
    id: "robe-champagne",
    name: "Robe Champagne",
    tagline: "L'animation signature des soirées VIPresta",
    description:
      "Icône du raffinement et du prestige, la Robe Champagne permet à l'hôtesse de présenter les flûtes directement sur sa structure circulaire, créant une expérience visuelle élégante et immersive. Chaque détail — lumière, posture, tenue — contribue à une atmosphère chic et festive, idéale pour les cocktails, réceptions, inaugurations et événements haut de gamme.",
    image: "/images/prestige-champagne.webp",
    points: ["Champagne & cocktails", "Cornets apéritifs & desserts", "Structure lumineuse"],
  },
  {
    id: "ceinture-mouvika",
    name: "Ceinture Mouvika",
    tagline: "Le service mobile, dynamique et mains libres",
    description:
      "Innovation mobile et élégante, la Ceinture Mouvika permet à nos hôtes et hôtesses de servir de manière fluide, dynamique et totalement mains libres. Chaque ceinture est équipée pour transporter une variété de produits gastronomiques tout en conservant une posture professionnelle et un style moderne. Pensée pour maximiser l'interaction avec les invités, elle offre un service mobile, chaleureux et efficace.",
    image: "/images/prestige-mouvika.webp",
    points: ["Service totalement mains libres", "Tartare de tomate, burrata, blinis saumon", "Desserts, fondue au chocolat, crème brûlée"],
  },
  {
    id: "sur-mesure",
    name: "Services sur mesure",
    tagline: "Adapté à chaque événement",
    description:
      "Aucun événement ne ressemble à un autre. Nous construisons le dispositif avec vous : format d'animation, dimensionnement des équipes, tenues, contenus servis et scénographie sont adaptés à vos besoins et à votre image.",
    image: "/images/prestige-surmesure.webp",
    points: ["Dispositif adapté à votre image", "Contenus et tenues personnalisables", "Devis sous 24 h ouvrées"],
  },
];

export const tenues = {
  eyebrow: "Tenues",
  title: "La signature VIPresta",
  lead: "Chaque mission commence par une tenue impeccable. Nos équipes arrivent briefées, en tenue complète et prêtes à représenter votre marque.",
  images: [
    {
      src: "/images/tenues.webp",
      alt: "Hôtesses VIPresta en chemise blanche au logo brodé doré et jupe marine",
      caption: "Tenue claire",
    },
    {
      src: "/images/tenue-noire.webp",
      alt: "Tenue noire VIPresta : chemise à épaulettes dorées, logo brodé et foulard rouge",
      caption: "Tenue noire",
    },
  ],
  items: [
    {
      title: "Chemise blanche",
      description: "Chemise blanche satinée au logo VIPresta brodé doré.",
    },
    {
      title: "Bas coordonné",
      description: "Jupe crayon ou pantalon noir, selon le format de l'événement.",
    },
    {
      title: "Variante noire",
      description: "Chemise noire à épaulettes dorées et logo VIPresta brodé, pour les formats plus habillés.",
    },
    {
      title: "Accessoires signature",
      description: "Foulard rouge, ceinture assortie et casquette marine pour les formats événementiels.",
    },
    {
      title: "Présentation",
      description: "Maquillage soigné, sourire et posture élégante : la présentation fait partie de la prestation.",
    },
  ],
  note: "Tenue personnalisable sur demande : nous pouvons adapter les couleurs et les accessoires à votre charte.",
};

export const gallery = {
  eyebrow: "En images",
  title: "Nos animations en événement",
  lead: "Quelques moments capturés sur nos missions : salons, cocktails, inaugurations et soirées privées.",
  photos: [
    { src: "/images/photos/g-equipe.webp", alt: "Hôtesses VIPresta servant le champagne sur plateau lumineux" },
    { src: "/images/photos/g-soiree.webp", alt: "Service de cornets apéritifs sur plateau lumineux au cœur des invités" },
    { src: "/images/photos/g-plateau-rouge.webp", alt: "Robe Plateau LED en rouge lors d'une soirée sous chapiteau" },
    { src: "/images/photos/g-structure.webp", alt: "Structure lumineuse complète de la Robe Champagne, garnie de flûtes" },
    { src: "/images/photos/g-led-vert.webp", alt: "Invité se servant une flûte sur la Robe Champagne éclairée en vert" },
    { src: "/images/photos/g-led-violet.webp", alt: "Détail de la Robe Champagne éclairée en violet" },
    { src: "/images/photos/g-led-interieur.webp", alt: "Hôtesse VIPresta en chemise à épaulettes dorées et plateau lumineux" },
    { src: "/images/photos/g-led-exterieur.webp", alt: "Service du champagne sur plateau lumineux lors d'une réception" },
    { src: "/images/photos/g-stand.webp", alt: "Chariot à champagne aux couleurs de VIPresta" },
  ],
};

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

/** Lien public vers la fiche Google de VIPresta (avis vérifiables). */
export const googleReviewsUrl = "https://share.google/ddRXAE6N2p4NFRbeI";

/**
 * Avis clients réels, repris de la fiche Google VIPresta.
 * Les avis affichés tronqués par Google sont repris jusqu'à leur dernière
 * phrase complète, sans ajout. Orthographe et ponctuation légèrement
 * normalisées, sans modification du propos.
 * Tant que ce tableau est vide, la section « Avis » ne s'affiche pas.
 */
export const reviews: Review[] = [
  {
    author: "Mathilde",
    rating: 5,
    text: "Super agence, à recommander sans hésiter ! Je suis ravie de travailler avec cette agence : professionnelle, responsable et surtout hyper sympa ! La responsable est à l'écoute, toujours arrangeante et fait preuve d'une grande flexibilité pour répondre à nos besoins. Les événements organisés sont tout simplement géniaux : bien pensés, originaux et parfaitement exécutés. Une expérience au top !",
  },
  {
    author: "Matthieu Leblondel",
    role: "Soirée d'entreprise",
    rating: 5,
    text: "Un plaisir de passer une/des soirée(s) avec VIPresta !! Nous avons fait appel à leur service pour une soirée d'entreprise. Sabrina et son équipe ont répondu à toutes nos demandes et nos attentes.",
  },
  {
    author: "Nuances Création",
    role: "Soirée de Noël, 60 personnes",
    rating: 5,
    text: "Je suis passé par VIPresta pour l'organisation d'une soirée de Noël d'entreprise, nous étions 60 personnes au total. Sabrina et son équipe ont été au top, à l'écoute et aux petits soins.",
  },
  {
    author: "Big Bang Event",
    role: "Partenaire événementiel",
    rating: 5,
    text: "Très satisfait de notre collaboration avec VIPresta. Équipe professionnelle, réactive et à l'écoute. Matériel de qualité et service irréprochable. Je recommande sans hésiter !",
  },
  {
    author: "Cha Adv",
    role: "Événement à Annecy",
    rating: 5,
    text: "Nous avons fait appel à VIPresta pour l'organisation d'un événement sur Annecy. Dès le premier rendez-vous, l'équipe a été à l'écoute et ultra-professionnelle.",
  },
  {
    author: "Mariana Oliinyk",
    rating: 5,
    text: "Excellente agence ! J'ai été très satisfaite de leurs services. L'équipe est professionnelle, réactive et très agréable. Tout était parfaitement organisé et s'est déroulé dans une excellente ambiance. Je recommande cette agence sans hésitation et je leur souhaite beaucoup de succès.",
  },
  {
    author: "Halyna Horin",
    rating: 5,
    text: "J'ai eu une bonne expérience avec VIPresta. L'équipe est professionnelle et réactive, et les hôtesses sont bien présentées et polies. L'organisation des événements se passe généralement sans problème, ce qui rend le service fiable et agréable.",
  },
];

export type Partner = {
  name: string;
  /** Logo optionnel : place le fichier dans public/images/partenaires/ */
  logo?: string;
};

/**
 * Partenaires et clients réels. Sans logo, le nom s'affiche en typographie.
 */
export const partners: Partner[] = [
  { name: "FC Annecy", logo: "/images/partenaires/fc-annecy.webp" },
  { name: "Les Vitrines d'Annecy", logo: "/images/partenaires/vitrines-annecy.webp" },
  { name: "BAAR Rugby", logo: "/images/partenaires/baar-rugby.webp" },
  { name: "Société Générale", logo: "/images/partenaires/societe-generale.webp" },
  { name: "Rochexpo", logo: "/images/partenaires/rochexpo.webp" },
  { name: "Commune de Poisy", logo: "/images/partenaires/poisy.webp" },
  { name: "Edifim", logo: "/images/partenaires/edifim.webp" },
  { name: "Garage Mouthon", logo: "/images/partenaires/garage-mouthon.webp" },
  { name: "Nuances", logo: "/images/partenaires/nuances.webp" },
  { name: "NetDev", logo: "/images/partenaires/netdev.webp" },
  { name: "Espace Revêtements Arti-Sols", logo: "/images/partenaires/espace-artisols.webp" },
  { name: "Bois Mauris", logo: "/images/partenaires/bois-mauris.webp" },
  { name: "Big Bang Event", logo: "/images/partenaires/big-bang-event.webp" },
  { name: "La Caserne Thônes", logo: "/images/partenaires/la-caserne.webp" },
  { name: "BIM Agency", logo: "/images/partenaires/bim-agency.webp" },
  { name: "Sesama Concept", logo: "/images/partenaires/sesama-concept.webp" },
  // TODO : logo manquant — ajouter public/images/partenaires/hockey-annecy.webp
  { name: "Hockey Annecy" },
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
