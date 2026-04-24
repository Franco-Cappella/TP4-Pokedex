# Mini Pokédex Web

Aplicación desarrollada en React que consume la PokéAPI para buscar y mostrar información de Pokémon.

---

## Endpoints utilizados

### Obtener Pokémon por nombre o ID

```bash
GET /pokemon/{name}
GET /pokemon/{id}
```

Ejemplo:

```bash
/pokemon/pikachu
/pokemon/25
```

### Obtener lista de Pokémon

```bash
GET /pokemon?limit=20&offset=0
```

### Obtener Pokémon por tipo

```bash
GET /type/{type}
```

Ejemplo:

```bash
/type/fire
```

### Error intencional

```bash
GET /recurso-inexistente-404
```

Utilizado para probar manejo de errores.

---

## Estructura del proyecto

```bash
src/
│── components/
│   ├── PokemonSearch.jsx
│   ├── PokemonCard.jsx
│   ├── PokemonList.jsx
│   ├── Loader.jsx
│   └── ErrorMessage.jsx
│
│── pokeApi.js
│── App.jsx
│── App.css
│── main.jsx
```

* **pokeApi.js:** funciones para consumir la API.
* **App.jsx:** componente principal y manejo de estados.
* **components/**: componentes reutilizables de interfaz.

---

## Decisiones tomadas

* Se utilizó Axios para facilitar las peticiones HTTP.
* Se usó async/await para mejorar legibilidad.
* Se separó la lógica de API en un archivo independiente.
* Se dividió la interfaz en componentes reutilizables.
* Se agregó botón para volver a la lista principal.

---

## Dificultades encontradas

* Manejar errores cuando el Pokémon no existe.
* Controlar estados de carga correctamente.
* Mostrar diferentes vistas según el estado (lista, resultado, error).
* Organizar el proyecto en componentes claros y ordenados.
