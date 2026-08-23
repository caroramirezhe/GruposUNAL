const grid = document.getElementById("groupsGrid");
const searchInput = document.getElementById("searchInput");
const resultCount = document.getElementById("resultCount");
const emptyState = document.getElementById("emptyState");

const typeFilters = [
  ...document.querySelectorAll(".type-filter")
];

const pgpFilters = [
  ...document.querySelectorAll(".pgp-filter")
];

const categoryFilters = [
  ...document.querySelectorAll(".category-filter")
];


// ======================================================
// ESTADO DE LOS FILTROS
// ======================================================

let selectedTypes = [];

let selectedPGP = "Todos";

let selectedCategory = "Todos";


// ======================================================
// FUNCIONES AUXILIARES
// ======================================================

function escapeHtml(value = "") {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}


function initials(name) {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map(word => word[0])
    .join("")
    .toUpperCase();
}


function normalize(text) {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}


// ======================================================
// BOTONES DE CONTACTO
// ======================================================

function actionButtons(group) {

  const buttons = [];

  if (group.instagram) {

    buttons.push(`
      <a
        class="action primary"
        href="${escapeHtml(group.instagram)}"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram de ${escapeHtml(group.name)}"
      >
        Instagram ↗
      </a>
    `);

  }


  if (group.website) {

    buttons.push(`
      <a
        class="action"
        href="${escapeHtml(group.website)}"
        target="_blank"
        rel="noopener noreferrer"
      >
        Sitio web ↗
      </a>
    `);

  }


  if (group.email) {

    buttons.push(`
      <a
        class="action"
        href="mailto:${escapeHtml(group.email)}"
      >
        Correo ✉
      </a>
    `);

  }


  if (!buttons.length) {

    buttons.push(`
      <span
        class="action"
        title="Todavía no hay un canal público añadido"
      >
        Canales por verificar
      </span>
    `);

  }

  return buttons.join("");
}


// ======================================================
// TARJETA
// ======================================================

function card(group) {

  const badges = (group.categories || [])
    .map(category => `
      <span class="badge">
        ${escapeHtml(category)}
      </span>
    `)
    .join("");


  const typeBadges = (group.types || [])
    .map(type => `
      <span class="badge type-badge">
        ${escapeHtml(type)}
      </span>
    `)
    .join("");


  const pgpBadge = group.pgp
    ? `<span class="badge pgp-badge">PGP</span>`
    : "";


  const verification = group.verified
    ? `<span class="badge">✓ revisado</span>`
    : "";


  return `
    <article class="group-card">

      <div class="card-top">

        <div
          class="logo-placeholder"
          aria-hidden="true"
        >
          ${escapeHtml(group.short || initials(group.name))}
        </div>

        <div class="badges">

          ${typeBadges}

          ${badges}

          ${pgpBadge}

          ${verification}

        </div>

      </div>


      <h3>
        ${escapeHtml(group.name)}
      </h3>


      <p class="description">
        ${escapeHtml(group.description)}
      </p>


      <p class="meta">
        📍 ${escapeHtml(group.campus)}
      </p>


      <div class="card-actions">
        ${actionButtons(group)}
      </div>

    </article>
  `;
}


// ======================================================
// RENDERIZAR
// ======================================================

function render() {

  const query = normalize(
    searchInput.value.trim()
  );


  const filtered = groups.filter(group => {


    // ----------------------------------------------
    // BUSCADOR
    // ----------------------------------------------

    const haystack = normalize([
      group.name,
      group.description,
      group.campus,
      ...(group.categories || []),
      ...(group.types || [])
    ].join(" "));


    const matchesSearch =
      !query ||
      haystack.includes(query);


    // ----------------------------------------------
    // FILTRO TIPO
    // ----------------------------------------------

    const matchesType =
      selectedTypes.length === 0 ||
      selectedTypes.some(type =>
        (group.types || []).includes(type)
      );


    // ----------------------------------------------
    // FILTRO PGP
    // ----------------------------------------------

    const matchesPGP =
      selectedPGP === "Todos" ||
      (
        selectedPGP === "true" &&
        group.pgp === true
      );


    // ----------------------------------------------
    // FILTRO TEMÁTICO
    // ----------------------------------------------

    const matchesCategory =
      selectedCategory === "Todos" ||
      (group.categories || [])
        .includes(selectedCategory);


    // ----------------------------------------------
    // RESULTADO FINAL
    // ----------------------------------------------

    return (
      matchesSearch &&
      matchesType &&
      matchesPGP &&
      matchesCategory
    );

  });


  // ----------------------------------------------
  // MOSTRAR RESULTADOS
  // ----------------------------------------------

  grid.innerHTML = filtered
    .map(card)
    .join("");


  resultCount.textContent =
    `${filtered.length} ${
      filtered.length === 1
        ? "grupo"
        : "grupos"
    }`;


  emptyState.hidden =
    filtered.length !== 0;


  grid.hidden =
    filtered.length === 0;
}


// ======================================================
// FILTRO DE TIPO
// ======================================================

typeFilters.forEach(button => {

  button.addEventListener("click", () => {

    const type =
      button.dataset.type;


    // "Todos"
    if (type === "Todos") {

      selectedTypes = [];

      typeFilters.forEach(btn => {
        btn.classList.toggle(
          "active",
          btn.dataset.type === "Todos"
        );
      });

    }

    // Selección múltiple
    else {

      const index =
        selectedTypes.indexOf(type);


      if (index === -1) {

        selectedTypes.push(type);

      } else {

        selectedTypes.splice(index, 1);

      }


      // Desactivar "Todos"
      typeFilters
        .find(btn => btn.dataset.type === "Todos")
        ?.classList.remove("active");


      // Si no hay ninguno seleccionado
      // volver a activar Todos
      if (selectedTypes.length === 0) {

        typeFilters
          .find(btn => btn.dataset.type === "Todos")
          ?.classList.add("active");

      }


      // Actualizar botones
      typeFilters.forEach(btn => {

        if (btn.dataset.type !== "Todos") {

          btn.classList.toggle(
            "active",
            selectedTypes.includes(
              btn.dataset.type
            )
          );

        }

      });

    }


    render();

  });

});


// ======================================================
// FILTRO PGP
// ======================================================

pgpFilters.forEach(button => {

  button.addEventListener("click", () => {

    selectedPGP =
      button.dataset.pgp;


    pgpFilters.forEach(btn => {

      btn.classList.toggle(
        "active",
        btn.dataset.pgp === selectedPGP
      );

    });


    render();

  });

});


// ======================================================
// FILTRO DE CATEGORÍA
// ======================================================

categoryFilters.forEach(button => {

  button.addEventListener("click", () => {

    selectedCategory =
      button.dataset.category;


    categoryFilters.forEach(btn => {

      btn.classList.toggle(
        "active",
        btn.dataset.category === selectedCategory
      );

    });


    render();

  });

});


// ======================================================
// BUSCADOR
// ======================================================

searchInput.addEventListener(
  "input",
  render
);


// ======================================================
// INICIALIZAR
// ======================================================

render();
