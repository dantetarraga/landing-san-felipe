export interface TeamMember {
  name: string;
  spec: string;
  specialty: string;
  bio: string;
  initials: string;
  avatarBg: string;
  avatarText: string;
  color: string;
  experience: string;
  university: string;
  quote: string;
  sede: "Espinar" | "Arequipa" | "Ambas";
}

export const team: TeamMember[] = [
  {
    name: "Dra. Carla Velarde",
    spec: "Directora · Implantología",
    specialty: "Implantología y Cirugía Oral",
    bio: "Especialista en cirugía oral con 15 años de experiencia. Maestría en implantología por la UPC.",
    initials: "CV",
    avatarBg: "#e7f0fa",
    avatarText: "#1B3F90",
    color: "#1B3F90",
    experience: "15 años",
    university: "UPC — Maestría en Implantología",
    quote: "Cada paciente merece una sonrisa que le cambie la vida. Ese es nuestro compromiso.",
    sede: "Ambas",
  },
  {
    name: "Dr. Felipe Carrasco",
    spec: "Endodoncia · Estética",
    specialty: "Endodoncia y Estética Dental",
    bio: "Especialista en tratamientos de conducto y diseño de sonrisa. Atención cálida con tecnología digital.",
    initials: "FC",
    avatarBg: "#e0f8ea",
    avatarText: "#25a85a",
    color: "#2ECC71",
    experience: "10 años",
    university: "UCSM — Especialización en Endodoncia",
    quote: "Una sonrisa bonita empieza con una boca sana. Trabajamos en ambas al mismo tiempo.",
    sede: "Arequipa",
  },
  {
    name: "Dra. Sofía Tito",
    spec: "Odontopediatría",
    specialty: "Odontología Pediátrica",
    bio: "Niños y adolescentes. Magíster en odontopediatría por la UCSM. Apasionada por enseñar a sonreír sin miedo.",
    initials: "ST",
    avatarBg: "#fef3c7",
    avatarText: "#d97706",
    color: "#5C9BDB",
    experience: "7 años",
    university: "UCSM — Especialización en Pediatría Dental",
    quote: "Con los niños, la primera visita marca para siempre. Me aseguro de que sea una buena experiencia.",
    sede: "Espinar",
  },
  {
    name: "Dr. Andrés Huamán",
    spec: "Ortodoncia",
    specialty: "Ortodoncia y Ortopedia Dentofacial",
    bio: "Brackets convencionales, estéticos y alineadores invisibles. Más de 1.200 casos completados con éxito.",
    initials: "AH",
    avatarBg: "#fce7f3",
    avatarText: "#be185d",
    color: "#1B3F90",
    experience: "8 años",
    university: "UNSA — Maestría en Ortodoncia",
    quote: "La paciencia es parte del tratamiento. Cada ajuste nos acerca un paso más a tu sonrisa perfecta.",
    sede: "Ambas",
  },
];
