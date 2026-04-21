import { useState } from 'react';
import './PokemonSearch.css';

export const PokemonSearch = ({ onSearch, onForceError }) => {
    const [inputValue, setInputValue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Validación básica del input
        if (inputValue.trim().length > 0) {
            onSearch(inputValue.trim());
            setInputValue('');
        }
    };

    return (
        <div className="search-container">
            <form onSubmit={handleSubmit} className="search-form">
                <input 
                    type="text" 
                    placeholder="Buscar por nombre o ID..." 
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    className="search-input"
                />
                <button type="submit" className="btn-search">Buscar</button>
            </form>
            
            <button onClick={onForceError} className="btn-error">
                Generar Error 404
            </button>
        </div>
    );
};