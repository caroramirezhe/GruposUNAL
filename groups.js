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
    campus: "UNAL Bogotá",
    categories: ["IEEE", "Innovación"],
    types: ["Grupo estudiantil"],
    pgp: true,
    instagram: "https://www.instagram.com/ieeeunal/",
    website: "",
    email: "estieee_fibog@unal.edu.co",
    active: true,
    verified: false
  },
  {
    name: "UQBAR UN",
    short: "UQ",
    description: "Comunidad enfocada en seguridad informática, ciberseguridad y tecnología.",
    campus: "UNAL Bogotá",
    categories: ["Ciberseguridad"],
    types: ["Grupo estudiantil", "Semillero"],
    pgp: true,
    instagram: "https://www.instagram.com/uqbarun/",
    website: "",
    email: "",
    active: true,
    verified: false
  },
  {
    name: "TuringBox",
    short: "TB",
    description: "Tecnologías 4.0, inteligencia artificial, desarrollo web, videojuegos y proyectos tecnológicos.",
    campus: "intersedes",
    categories: ["IA", "Programación", "Innovación"],
    instagram: "https://www.instagram.com/turingbox/",
    types: ["Grupo estudiantil"],
    pgp: false,
    website: "https://sites.google.com/unal.edu.co/asignaturas/grupos-estudiantiles/turingbox",
    email: "",
    active: false,
    verified: true
  },
  {
    name: "IEEE WIE UNAL",
    short: "WIE",
    description: "Comunidad vinculada con Women in Engineering, STEM, liderazgo y desarrollo profesional.",
    campus: "UNAL Bogotá",
    categories: ["IEEE"],
    instagram: "https://www.instagram.com/wieunal/",
    types: ["Grupo estudiantil"],
    pgp: true,
    website: "",
    email: "",
    active: false,
    verified: false
  },
    {
    name: "IEEE TEMS UNAL",
    short: "TEMS",
    description: "Grupo para fortalecer habilidasdes de gestión de la tecnología y la ingeniería: habilidades blandas, liderazgo, manejo de grupos, emprendimiento.",
    campus: "UNAL Bogotá",
    categories: ["IEEE", "Innovación", "Programación", "Emprendimiento", "Gestión de Proyectos"],
    instagram: "https://www.instagram.com/temsunal/",
    types: ["Grupo estudiantil"],
    pgp: true,
    website: "",
    email: "tems_fibog@unal.edu.co",
    active: true,
    verified: false
  },
  {
    name: "IEEE EMBS UNAL",
    short: "EMBS",
    description: "Tecnología aplicada a ingeniería biomédica, salud y bioingeniería.",
    campus: "UNAL Bogotá",
    categories: ["IEEE", "Innovación"],
    instagram: "https://www.instagram.com/embsunal/",
    types: ["Grupo estudiantil"],
    pgp: true,
    website: "",
    email: "",
    active: true,
    verified: false
  },
    {
    name: "IEEE COMPUTER UNAL",
    short: "COMPUTER",
    description: "Ciencias de la computación e informática: software, IA, y más.",
    campus: "UNAL Bogotá",
    categories: ["IEEE", "Innovación","IA", "Programación"],
    instagram: "https://www.instagram.com/computer.unal/",
    types: ["Grupo estudiantil"],
    pgp: false,
    website: "",
    email: "",
    active: true,
    verified: false
  },
      {
    name: "Semillero de Investigación en Modelos Generativos",
    short: "SIMG",
    description: "IA Generativa aplicada en genómica, neurociencias. Computación Cuántica. Más.",
    campus: "UNAL Bogotá",
    categories: ["Innovación","IA", "Programación"],
    instagram: "https://www.instagram.com/simgunal/",
    types: ["Semillero"],
    pgp: false,
    website: "https://wsimg-un.vercel.app/es",
    email: "",
    active: true,
    verified: false
  },
  {
    name: "KartUN",
    short: "KU",
    description: "Proyecto estudiantil interdisciplinario alrededor del diseño, ingeniería y desarrollo de un vehículo tipo kart.",
    campus: "UNAL Bogotá",
    categories: ["Innovación"],
    instagram: "https://www.instagram.com/kartun_grupo/",
    types: ["Grupo estudiantil"],
    pgp: true,
    website: "",
    email: "",
    active: true,
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
