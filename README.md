# Conecta UNAL — Directorio tecnológico

Sitio estático para GitHub Pages.

## Estructura

- `index.html` → estructura de la página.
- `styles.css` → diseño.
- `groups.js` → **único archivo que necesitas editar para añadir grupos**.
- `app.js` → búsqueda, filtros y generación de tarjetas.

## Añadir un grupo

Abre `groups.js` y agrega un objeto dentro de `groups`:

```js
{
  name: "Nombre del grupo",
  short: "ABC",
  description: "Descripción breve.",
  campus: "Bogotá",
  categories: ["Programación"],
  instagram: "https://www.instagram.com/usuario/",
  website: "",
  email: "",
  verified: true
},
```

Puedes usar estas categorías:

- `Programación`
- `IA`
- `Ciberseguridad`
- `Robótica`
- `IEEE`
- `Innovación`

Si un grupo tiene otros canales, puedes añadirlos en el objeto y ampliar `app.js`.

## Publicar en GitHub Pages

1. Crea un repositorio en GitHub.
2. Sube los cuatro archivos.
3. Ve a `Settings` → `Pages`.
4. En `Build and deployment`, selecciona `Deploy from a branch`.
5. Selecciona `main` y `/ (root)`.
6. Guarda.
7. GitHub publicará el sitio en una dirección tipo:
   `https://TU-USUARIO.github.io/NOMBRE-REPOSITORIO/`

## Importante

El sitio es público, pero los visitantes no pueden modificarlo simplemente por entrar a la URL. Para impedir modificaciones no autorizadas, no agregues colaboradores con permisos de escritura al repositorio.

Los enlaces de redes sociales deben verificarse antes de publicarlos. El campo `verified` solo sirve como una marca visual interna del directorio.
