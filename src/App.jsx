import { useState } from 'react';
import { getPokemonDetails, triggerIntentionalError } from './services/pokeApi';
import { PokemonSearch } from './components/PokemonSearch';
import { PokemonCard } from './components/PokemonCard';
import { PokemonList } from './components/PokemonList';
import { Loader } from './components/Loader';
import { ErrorMessage } from './components/ErrorMessage';
import './App.css';

function App() {
    // Estados para manejar la búsqueda individual, la carga y los errores
    const [pokemon, setPokemon] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    // Ejecuta la búsqueda de un Pokémon específico
    const handleSearch = async (identifier) => {
        setLoading(true);
        setError(null);
        setPokemon(null); // Limpiamos para desmontar la lista o resultados previos

        try {
            const data = await getPokemonDetails(identifier);
            setPokemon(data);
        } catch (err) {
            setError(`No se encontró ningún Pokémon con el nombre o ID: "${identifier}"`);
        } finally {
            setLoading(false);
        }
    };

    // Ejecuta el error 404 intencional pedido en el TP
    const handleForceError = async () => {
        setLoading(true);
        setError(null);
        setPokemon(null);

        try {
            await triggerIntentionalError();
        } catch (err) {
            // Capturamos el error y lo mostramos en la interfaz
            setError("Error intencional generado: " + err.message);
        } finally {
            setLoading(false);
        }
    };

    // Función extra para mejorar la navegación: limpia la búsqueda y vuelve a mostrar la grilla
    const handleClearSearch = () => {
        setPokemon(null);
        setError(null);
    };

    return (
        <div className="app-container">
            <header className="app-header">
                {/* Al hacer clic en el título, limpiamos la búsqueda y volvemos al inicio */}
                <h1 onClick={handleClearSearch} title="Volver al inicio">
                    Mini Pokédex
                </h1>
            </header>

            <main className="app-main">
                <PokemonSearch 
                    onSearch={handleSearch} 
                    onForceError={handleForceError} 
                />

                {/* 1. Estado de carga de una búsqueda individual */}
                {loading && <Loader />}
                
                {/* 2. Estado de error (búsqueda fallida o error 404) */}
                {error && (
                    <div className="result-container">
                        <button className="btn-back" onClick={handleClearSearch}>
                            ← Volver a la lista
                        </button>
                        <ErrorMessage message={error} />
                    </div>
                )}
                
                {/* 3. Resultado de búsqueda individual exitosa */}
                {!loading && !error && pokemon && (
                    <div className="result-container">
                        <button className="btn-back" onClick={handleClearSearch}>
                            ← Volver a la lista
                        </button>
                        <PokemonCard pokemon={pokemon} />
                    </div>
                )}
                
                {/* 4. Estado por defecto: Si no está cargando, no hay error y no hay un Pokémon buscado, renderiza la lista */}
                {!loading && !error && !pokemon && <PokemonList />}
            </main>
        </div>
    );
}

export default App;