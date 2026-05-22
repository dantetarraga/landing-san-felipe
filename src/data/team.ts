export interface TeamMember {
  name: string;
  spec: string;
  bio: string;
  initials: string;
  avatarBg: string;
  avatarText: string;
}

export const team: TeamMember[] = [
  {
    name: "Dra. Carla Velarde",
    spec: "Directora · Implantología",
    bio: "Especialista en cirugía oral con 15 años de experiencia. Maestría en implantología por la UPC.",
    initials: "CV",
    avatarBg: "#e7f0fa",
    avatarText: "#1B3F90",
  },
  {
    name: "Dr. Felipe Carrasco",
    spec: "Endodoncia · Estética",
    bio: "Especialista en tratamientos de conducto y diseño de sonrisa. Atención cálida con tecnología digital.",
    initials: "FC",
    avatarBg: "#e0f8ea",
    avatarText: "#25a85a",
  },
  {
    name: "Dra. Sofía Tito",
    spec: "Odontopediatría",
    bio: "Niños y adolescentes. Magíster en odontopediatría por la UCSM. Apasionada por enseñar a sonreír sin miedo.",
    initials: "ST",
    avatarBg: "#fef3c7",
    avatarText: "#d97706",
  },
  {
    name: "Dr. Andrés Huamán",
    spec: "Ortodoncia",
    bio: "Brackets convencionales, estéticos y alineadores invisibles. Más de 1.200 casos completados con éxito.",
    initials: "AH",
    avatarBg: "#fce7f3",
    avatarText: "#be185d",
  },
];
