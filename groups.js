/*
  EDITA SOLAMENTE ESTE ARCHIVO PARA AÑADIR O MODIFICAR GRUPOS.

  Campos:
  - name: nombre visible
  - short: sigla o abreviatura
  - description: descripción corta
  - campus: sede
  - categories: categorías usadas por los filtros
  - instagram: URL completa de Instagram o "" si no está verificada
  - website: URL del sitio oficial o ""
  - email: correo público o ""
  - verified: true/false. Úsalo para distinguir enlaces que ya verificaste.
*/

const groups = [
  {
    name: "IEEE UNAL",
    short: "IEEE",
    description: "Comunidad de tecnología, ingeniería, innovación, formación y networking.",
    campus: "Bogotá",
    categories: ["IEEE", "Innovación"],
    instagram: "https://www.instagram.com/ieeeunal/",
    website: "",
    email: "",
    verified: false
  },
  {
    name: "UQBAR UN",
    short: "UQ",
    description: "Comunidad enfocada en seguridad informática, ciberseguridad y tecnología.",
    campus: "Bogotá",
    categories: ["Ciberseguridad"],
    instagram: "https://www.instagram.com/uqbarun/",
    website: "",
    email: "",
    verified: false
  },
  {
    name: "TuringBox",
    short: "TB",
    description: "Tecnologías 4.0, inteligencia artificial, desarrollo web, videojuegos y proyectos tecnológicos.",
    campus: "Medellín / intersedes",
    categories: ["IA", "Programación", "Innovación"],
    instagram: "https://www.instagram.com/turingbox/",
    website: "https://sites.google.com/unal.edu.co/asignaturas/grupos-estudiantiles/turingbox",
    email: "",
    verified: true
  },
  {
    name: "IEEE WIE UNAL",
    short: "WIE",
    description: "Comunidad vinculada con Women in Engineering, STEM, liderazgo y desarrollo profesional.",
    campus: "UNAL",
    categories: ["IEEE"],
    instagram: "https://www.instagram.com/wieunal/",
    website: "",
    email: "",
    verified: false
  },
  {
    name: "IEEE EMBS UNAL",
    short: "EMBS",
    description: "Tecnología aplicada a ingeniería biomédica, salud y bioingeniería.",
    campus: "UNAL",
    categories: ["IEEE", "Innovación"],
    instagram: "https://www.instagram.com/embsunal/",
    website: "",
    email: "",
    verified: false
  },
  {
    name: "KartUN",
    short: "KU",
    description: "Proyecto estudiantil interdisciplinario alrededor del diseño, ingeniería y desarrollo de un vehículo tipo kart.",
    campus: "Bogotá",
    categories: ["Innovación"],
    instagram: "https://www.instagram.com/kartun_grupo/",
    website: "",
    email: "",
    verified: false
  },

  /* EJEMPLOS PARA AÑADIR MÁS:
  {
    name: "Nombre del grupo",
    short: "ABC",
    description: "Descripción de una o dos líneas.",
    campus: "Bogotá",
    categories: ["Programación"],
    instagram: "https://www.instagram.com/usuario/",
    website: "",
    email: "",
    verified: true
  },
  */
];
