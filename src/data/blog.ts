export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  color: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "cuantas-veces-cepillar-dientes-al-dia",
    title: "¿Cuántas veces al día debes cepillarte los dientes? La respuesta correcta",
    excerpt: "La mayoría sabe que debe cepillarse dos veces al día, pero hay detalles clave que marcan la diferencia entre una higiene oral básica y una excelente.",
    category: "Higiene Bucal",
    date: "2025-04-10",
    readTime: "4 min",
    color: "#1B3F90",
  },
  {
    slug: "cuando-es-necesario-extraer-muela-juicio",
    title: "¿Cuándo es realmente necesario extraer las muelas del juicio?",
    excerpt: "No todas las muelas del juicio necesitan ser extraídas. Te explicamos exactamente cuándo sí es necesaria la extracción y qué señales debes vigilar.",
    category: "Cirugía Oral",
    date: "2025-03-25",
    readTime: "6 min",
    color: "#2ECC71",
  },
  {
    slug: "implantes-dentales-vs-protesis",
    title: "Implantes vs Prótesis: ¿Cuál es la mejor opción para reemplazar un diente?",
    excerpt: "Dos opciones muy diferentes, con ventajas y limitaciones distintas. Te ayudamos a entender cuál se adapta mejor a tu situación y presupuesto.",
    category: "Tratamientos",
    date: "2025-03-12",
    readTime: "7 min",
    color: "#5C9BDB",
  },
];
