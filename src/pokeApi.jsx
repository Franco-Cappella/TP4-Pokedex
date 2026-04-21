import axios from 'axios';

// 1. Creamos una instancia de Axios con la URL base.
// Esto hace que el código sea más limpio y fácil de mantener.
const pokeInstance = axios.create({
    baseURL: 'https://pokeapi.co/api/v2/'
});

/**
 * SERVICIOS DE POKÉAPI
 * Estas funciones encapsulan la lógica de las peticiones.
 */

// Obtener un Pokémon por nombre o ID
export const getPokemonDetails = async (identifier) => {
    try {
        // Axios ya devuelve el JSON procesado en la propiedad .data
        const response = await pokeInstance.get(`pokemon/${identifier.toLowerCase()}`);
        return response.data;
    } catch (error) {
        // Lanzamos el error para que el componente (App.jsx) pueda manejarlo
        throw error;
    }
};

// Obtener una lista limitada de Pokémon (ej: para la lista principal)
export const getPokemonList = async (limit = 20, offset = 0) => {
    try {
        const response = await pokeInstance.get(`pokemon?limit=${limit}&offset=${offset}`);
        return response.data.results; // Retorna el array de nombres y URLs
    } catch (error) {
        throw error;
    }
};

// Obtener información de un tipo específico (ej: 'fire', 'water')
export const getPokemonsByType = async (typeName) => {
    try {
        const response = await pokeInstance.get(`type/${typeName}`);
        return response.data;
    } catch (error) {
        throw error;
    }
};

// Función para generar un error intencional (punto pedido en el TP)
// Intentamos acceder a un recurso que sabemos que no existe
export const triggerIntentionalError = async () => {
    try {
        await pokeInstance.get('recurso-inexistente-404');
    } catch (error) {
        console.error("Error capturado intencionalmente:", error.message);
        throw error; // Re-lanzamos para que la UI reaccione
    }
};