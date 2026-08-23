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
  {
  name: "Ingeniería de la Salud",
  short: "IS",
  description: "Investigación en TICs en Atención Primaria en Salud, gestión de tecnología, calidad y riesgo.",
  campus: "Bogotá",
  types: ["Grupo de investigación"],
  pgp: false,
  categories: ["Innovación"],
  instagram: "",
  website: "http://www.hermes.unal.edu.co/pages/Consultas/Grupo.jsf?idGrupo=723",
  email: "chcaicedoe@unal.edu.co",
  phone: "",
  verified: true
},

{
  name: "INTICOLOMBIA",
  short: "INTI",
  description: "Investigación en diseño de interacción, colaboración, experiencia de usuario, TIC en educación, innovación y nuevas tecnologías.",
  campus: "Bogotá",
  types: ["Grupo de investigación"],
  pgp: false,
  categories: ["Innovación", "Programación"],
  instagram: "",
  website: "http://www.hermes.unal.edu.co/pages/Consultas/Grupo.jsf?idGrupo=2006",
  email: "inticol_fibog@unal.edu.co",
  phone: "",
  verified: true
},

{
  name: "UNSECURELAB",
  short: "USL",
  description: "Grupo especializado en ciberseguridad, analítica de ciberseguridad, software seguro y seguridad de la información.",
  campus: "Bogotá",
  types: ["Grupo de investigación"],
  pgp: false,
  categories: ["Ciberseguridad"],
  instagram: "",
  website: "http://www.unsecurelab.org",
  email: "jecamargom@unal.edu.co",
  phone: "",
  verified: true
},

{
  name: "ALIFE",
  short: "AL",
  description: "Investigación en sistemas complejos y sistemas inteligentes.",
  campus: "Bogotá",
  types: ["Grupo de investigación"],
  pgp: false,
  categories: ["IA"],
  instagram: "",
  website: "http://www.disi.unal.edu.co/grupos/alife",
  email: "jgomezpe@unal.edu.co",
  phone: "",
  verified: true
},

{
  name: "MINDLAB",
  short: "ML",
  description: "Investigación en recuperación de información, aprendizaje de máquina e imágenes médicas.",
  campus: "Bogotá",
  types: ["Grupo de investigación"],
  pgp: false,
  categories: ["IA"],
  instagram: "",
  website: "http://www.mindlaboratoy.org",
  email: "fagonzalezo@unal.edu.co",
  phone: "",
  verified: true
},

{
  name: "MIDAS",
  short: "MID",
  description: "Investigación en recuperación de información, minería de datos, Big Data Analytics, bases de datos, aprendizaje de máquina y minería web.",
  campus: "Bogotá",
  types: ["Grupo de investigación"],
  pgp: false,
  categories: ["IA", "Programación"],
  instagram: "",
  website: "http://www.midas.unal.edu.co",
  email: "eleonguz@unal.edu.co",
  phone: "",
  verified: true
},

{
  name: "LISI",
  short: "LISI",
  description: "Laboratorio de investigación en inteligencia computacional, bioinformática, aprendizaje de máquina, recuperación de información, computación evolutiva e inteligencia de negocios.",
  campus: "Bogotá",
  types: ["Grupo de investigación"],
  pgp: false,
  categories: ["IA"],
  instagram: "",
  website: "http://201.234.78.173:8080/gruplac/jsp/visualiza/visualizagr.jsp?nro=00000000000633",
  email: "lfninov@unal.edu.co",
  phone: "",
  verified: true
},

{
  name: "TLÖN",
  short: "TL",
  description: "Investigación en sistemas inteligentes, lenguajes de programación, telecomunicaciones, informática y computación aplicada.",
  campus: "Bogotá",
  types: ["Grupo de investigación"],
  pgp: false,
  categories: ["IA", "Programación"],
  instagram: "",
  website: "http://www.hermes.unal.edu.co/pages/Consultas/Grupo.jsf?idGrupo=2220",
  email: "jeortizt@unal.edu.co",
  phone: "",
  verified: true
},

{
  name: "GITIDIC",
  short: "GIT",
  description: "Investigación en ingeniería y sustentabilidad, innovación y sociedad, ingeniería y sociedad, y educación en ingeniería.",
  campus: "Bogotá",
  types: ["Grupo de investigación"],
  pgp: false,
  categories: ["Innovación"],
  instagram: "",
  website: "http://www.hermes.unal.edu.co/pages/Consultas/Grupo.jsf?idGrupo=2224",
  email: "jipenar@unal.edu.co",
  phone: "",
  verified: true
},

{
  name: "PLAS",
  short: "PLAS",
  description: "Investigación en diseño e implementación de lenguajes de programación, sistemas embebidos tolerantes a fallos y educación en programación.",
  campus: "Bogotá",
  types: ["Grupo de investigación"],
  pgp: false,
  categories: ["Programación"],
  instagram: "",
  website: "http://plas.unal.edu.co/",
  email: "plas_fibog@unal.edu.co",
  phone: "",
  verified: true
},

{
  name: "UNET",
  short: "UNET",
  description: "Investigación en redes de datos, computación distribuida, computación en la nube, administración y seguridad de redes e infraestructura de telecomunicaciones.",
  campus: "Bogotá",
  types: ["Grupo de investigación"],
  pgp: false,
  categories: ["Ciberseguridad"],
  instagram: "",
  website: "http://www.hermes.unal.edu.co/pages/Consultas/Grupo.jsf?idGrupo=2368",
  email: "jgtovar@unal.edu.co",
  phone: "",
  verified: true
},

{
  name: "COLSWE",
  short: "SWE",
  description: "Investigación en arquitectura empresarial y de software, desarrollo de software, mantenimiento y evolución de software e ingeniería dirigida por modelos.",
  campus: "Bogotá",
  types: ["Grupo de investigación"],
  pgp: false,
  categories: ["Programación", "Innovación"],
  instagram: "",
  website: "http://colswe.unal.edu.co/",
  email: "colswe_fibog@unal.edu.co",
  phone: "",
  verified: true
},

{
  name: "SEPRO",
  short: "SEPRO",
  description: "Investigación en productividad y calidad, gestión de cadenas de abastecimiento y logística, y estudios socioeconómicos urbanos.",
  campus: "Bogotá",
  types: ["Grupo de investigación"],
  pgp: false,
  categories: ["Innovación"],
  instagram: "",
  website: "http://www.docentes.unal.edu.co/wadarmej",
  email: "wadarmej@unal.edu.co",
  phone: "",
  verified: true
},

{
  name: "ALGOS-UN",
  short: "ALG",
  description: "Grupo de investigación dedicado a algoritmos y complejidad computacional.",
  campus: "Bogotá",
  types: ["Grupo de investigación"],
  pgp: false,
  categories: ["Programación"],
  instagram: "",
  website: "http://disi.unal.edu.co/~algos",
  email: "algos@unal.edu.co",
  phone: "",
  verified: true
},

{
  name: "Productividad, Competitividad y Calidad",
  short: "PCC",
  description: "Investigación en alianzas productivas, competitividad, productividad, redes empresariales y sistemas integrales de gestión.",
  campus: "Bogotá",
  types: ["Grupo de investigación"],
  pgp: false,
  categories: ["Innovación"],
  instagram: "",
  website: "",
  email: "hcifuentesa@unal.edu.co",
  phone: "",
  verified: true
},

{
  name: "INNOVATE UN",
  short: "INU",
  description: "Grupo enfocado en innovación tecnológica, emprendimiento, creación de empresas y prospectiva tecnológica.",
  campus: "Bogotá",
  types: ["Grupo de investigación"],
  pgp: false,
  categories: ["Innovación"],
  instagram: "",
  website: "https://ingenieria.bogota.unal.edu.co/innovate",
  email: "innovate_fibog@unal.edu.co",
  phone: "",
  verified: true
},

{
  name: "COMPLEXUS",
  short: "CX",
  description: "Investigación interdisciplinaria en innovación, organizaciones, complejidad y creatividad.",
  campus: "Bogotá",
  types: ["Grupo de investigación"],
  pgp: false,
  categories: ["Innovación"],
  instagram: "",
  website: "http://dis.unal.edu.co/grupos/complexus",
  email: "complexusun@gmail.com",
  phone: "",
  verified: true
}

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
