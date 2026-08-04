export const site = {
  name: "Asociación BAlzheimer",
  shortName: "BAlzheimer",
  fullName:
    "Asociación de familiares de enfermos de Alzheimer y otras demencias",
  location: "Palma del Río",
  province: "Córdoba",
  tagline:
    "Desarrollamos programas con usuarios, familiares y voluntarios.",
  description:
    "Asociación de familiares de enfermos de Alzheimer y otras demencias. Desarrollamos programas con usuarios, familiares y voluntarios.",
  foundedYear: 2002,
  address: {
    line1: "C. Gracia, 1",
    line2: "Casa de la Cultura",
    postalCode: "14700",
    city: "Palma del Río",
    province: "Córdoba",
    country: "España",
  },
  phone: "628 92 59 41",
  phoneHref: "tel:+34628925941",
  whatsappHref: "https://wa.me/34628925941",
  email: "balzheimer17@gmail.com",
  emailHref: "mailto:balzheimer17@gmail.com",
  hours: "Lunes a viernes, de 10:00 a 13:00",
  facebook: {
    url: "https://www.facebook.com/Balzheime/",
    label: "Asoc. Alzheimer – Palma del Río Balzheimer",
  },
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=C.+Gracia,+1,+14700+Palma+del+R%C3%ADo,+C%C3%B3rdoba",
} as const;

export const addressLines = [
  site.address.line2,
  site.address.line1,
  `${site.address.postalCode} ${site.address.city}, ${site.address.province}`,
] as const;
