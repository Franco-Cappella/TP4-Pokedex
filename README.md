 Mini Pokédex Web

Aplicación desarrollada en React que consume la PokéAPI para buscar y mostrar información de Pokémon.



 Endpoints utilizados

 Obtener Pokémon por nombre o ID


GET /pokemon/{name}
GET /pokemon/{id}


Ejemplo:


/pokemon/pikachu
/pokemon/25


 Obtener lista de Pokémon


GET /pokemon?limit=20&offset=0


 Obtener Pokémon por tipo


GET /type/{type}


Ejemplo:


/type/fire


 Error intencional


GET /recurso-inexistente-404


Utilizado para probar manejo de errores.



 Estructura del proyecto


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


pokeApi.js:*funciones para consumir la API.
App.jsx:*componente principal y manejo de estados.
components/: componentes reutilizables de interfaz.



 Decisiones tomadas

Se utilizó Axios para facilitar las peticiones HTTP.
Se usó async/await para mejorar legibilidad.
Se separó la lógica de API en un archivo independiente.
Se dividió la interfaz en componentes reutilizables.
Se agregó botón para volver a la lista principal.



 
