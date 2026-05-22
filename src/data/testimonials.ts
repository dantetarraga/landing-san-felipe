export interface Testimonial {
  name: string;
  meta: string;
  initials: string;
  quote: string;
}

export const testimonials: Testimonial[] = [
  {
    quote: "Le tenía pánico al dentista. Aquí me explicaron todo con calma y la primera vez en años no sentí miedo. Mi limpieza fue cero dolor.",
    name: "Lucía Mamani",
    meta: "Paciente desde 2023 · Espinar",
    initials: "LM",
  },
  {
    quote: "Llevé a mi hijo de 5 años y la doctora hizo que se riera durante toda la cita. Ahora me pide volver. Increíble el trato con niños.",
    name: "Carlos Quispe",
    meta: "Padre de paciente · Arequipa",
    initials: "CQ",
  },
  {
    quote: "Me hicieron implantes dentales hace 2 años y siguen perfectos. La planificación digital me dio mucha tranquilidad antes de la cirugía.",
    name: "Patricia Rivera",
    meta: "Implantes superiores · Arequipa",
    initials: "PR",
  },
  {
    quote: "El equipo es súper profesional y la clínica impecable. Te explican opciones, costos y plazos sin presionarte. Por fin un dentista honesto.",
    name: "Jorge Ramos",
    meta: "Ortodoncia · Espinar",
    initials: "JR",
  },
  {
    quote: "Mi diseño de sonrisa quedó natural y nadie nota que son carillas. Vale cada sol invertido. Las recomiendo con los ojos cerrados.",
    name: "Andrea Flores",
    meta: "Diseño de sonrisa · Arequipa",
    initials: "AF",
  },
];
