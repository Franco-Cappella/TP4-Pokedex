import { useState, useEffect } from 'react';
import { getPokemonList, getPokemonDetails } from '../services/pokeApi';
import { PokemonCard } from './PokemonCard';
import { Loader } from './Loader';
import { ErrorMessage } from './ErrorMessage';
import './PokemonList.css';

export const PokemonList = () => {
    const [pokemonList, setPokemonList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // useEffect se ejecuta una sola vez al montar el componente
    useEffect(() => {
        const fetchInitialList = async () => {
            try {
                setLoading(true);
                // Traemos la lista básica (limitada a 20 como pide el TP)
                const list = await getPokemonList(20, 0); 
                
                // Mapeamos la lista para hacer un fetch individual por cada Pokémon 
                // y obtener su imagen, tipo, peso, etc.
                const detailedPromises = list.map((poke) => getPokemonDetails(poke.name));
                const detailedList = await Promise.all(detailedPromises);
                
                setPokemonList(detailedList);
            } catch (err) {
                setError("Hubo un error al cargar la lista de Pokémon.");
            } finally {
                setLoading(false);
            }
        };

        fetchInitialList();
    }, []);

    if (loading) return <Loader />;
    if (error) return <ErrorMessage message={error} />;

    return (
        <div className="pokemon-grid">
            {pokemonList.map((pokemon) => (
                <PokemonCard key={pokemon.id} pokemon={pokemon} />
            ))}
        </div>
    );
};