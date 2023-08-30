import React from 'react';
import { SearchResultsProps } from '../types/cep';



const SearchResultsCep: React.FC<SearchResultsProps> = ({ suggestions }) => {
    return (
        <div className=' '>
            <h2>Sugestões de CEP:</h2>
            <ul>
                {suggestions.map((suggestion, index) => (
                    <li key={index}>{suggestion.cep}</li>
                ))}
            </ul>
        </div>
    );
};

export default SearchResultsCep;
