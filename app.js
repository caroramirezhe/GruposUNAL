const grid = document.getElementById("groupsGrid");
const searchInput = document.getElementById("searchInput");
const resultCount = document.getElementById("resultCount");
const emptyState = document.getElementById("emptyState");
const filterButtons = [...document.querySelectorAll(".filter")];

let activeCategory = "Todos";

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

function actionButtons(group) {
  const buttons = [];

  if (group.instagram) {
    buttons.push(`
      <a class="action primary" href="${escapeHtml(group.instagram)}"
         target="_blank" rel="noopener noreferrer" aria-label="Instagram de ${escapeHtml(group.name)}">
        Instagram ↗
      </a>
    `);
  }

  if (group.website) {
    buttons.push(`
      <a class="action" href="${escapeHtml(group.website)}"
         target="_blank" rel="noopener noreferrer">
        Sitio web ↗
      </a>
    `);
  }

  if (group.email) {
    buttons.push(`
      <a class="action" href="mailto:${escapeHtml(group.email)}">
        Correo ✉
      </a>
    `);
  }

  if (!buttons.length) {
    buttons.push(`<span class="action" title="Todavía no hay un canal público añadido">Canales por verificar</span>`);
  }

  return buttons.join("");
}

function card(group) {
  const badges = group.categories
    .map(category => `<span class="badge">${escapeHtml(category)}</span>`)
    .join("");

  const verification = group.verified
    ? `<span class="badge" title="Enlace revisado por el administrador">✓ revisado</span>`
    : "";

  return `
    <article class="group-card">
      <div class="card-top">
        <div class="logo-placeholder" aria-hidden="true">${escapeHtml(group.short || initials(group.name))}</div>
        <div class="badges">${badges}${verification}</div>
      </div>

      <h3>${escapeHtml(group.name)}</h3>
      <p class="description">${escapeHtml(group.description)}</p>
      <p class="meta">📍 ${escapeHtml(group.campus)}</p>

      <div class="card-actions">
        ${actionButtons(group)}
      </div>
    </article>
  `;
}

function render() {
  const query = normalize(searchInput.value.trim());

  const filtered = groups.filter(group => {
    const haystack = normalize([
      group.name,
      group.description,
      group.campus,
      ...(group.categories || [])
    ].join(" "));

    const matchesSearch = !query || haystack.includes(query);
    const matchesCategory =
      activeCategory === "Todos" ||
      (group.categories || []).includes(activeCategory);

    return matchesSearch && matchesCategory;
  });

  grid.innerHTML = filtered.map(card).join("");
  resultCount.textContent = `${filtered.length} ${filtered.length === 1 ? "grupo" : "grupos"}`;

  emptyState.hidden = filtered.length !== 0;
  grid.hidden = filtered.length === 0;
}

searchInput.addEventListener("input", render);

filterButtons.forEach(button => {
  button.addEventListener("click", () => {
    activeCategory = button.dataset.category;

    filterButtons.forEach(btn => {
      btn.classList.toggle("active", btn === button);
    });

    render();
  });
});

render();
