import './PokemonCard.css';

export const PokemonCard = ({ pokemon }) => {
    if (!pokemon) return null;

    return (
        <div className="pokemon-card">
            <div className="pokemon-image-container">
                <img 
                    src={pokemon.sprites.other['official-artwork'].front_default || pokemon.sprites.front_default} 
                    alt={pokemon.name} 
                />
            </div>
            <div className="pokemon-info">
                <span className="pokemon-id">N.º {pokemon.id}</span>
                <h2 className="pokemon-name">{pokemon.name}</h2>
                
                <div className="pokemon-types">
                    {pokemon.types.map((t) => (
                        <span key={t.type.name} className={`type-badge ${t.type.name}`}>
                            {t.type.name}
                        </span>
                    ))}
                </div>

                <div className="pokemon-stats">
                    <p><strong>Peso:</strong> {pokemon.weight / 10} kg</p>
                    <p><strong>Altura:</strong> {pokemon.height / 10} m</p>
                </div>
            </div>
        </div>
    );
};