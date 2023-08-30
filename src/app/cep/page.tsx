'use client'
import { useState } from 'react';
import axios from 'axios';
import SearchCepForm from '../../../components/SearchCepForm';
import SearchResultsCep from '../../../components/SearchResultsCep';
import { ViaCepSuggestion } from '../../../types/cep';
import ModalResultsCep from '../../../components/modal/ModalResultsCep';

const CepSearch = () => {
    const [suggestions, setSuggestions] = useState<ViaCepSuggestion[]>([]);

    const handleSearchSubmit = async (uf: string, city: string, street: string) => {
        try {
            const response = await axios.get(`https://viacep.com.br/ws/${uf}/${city}/${street}/json/`);
            const data: ViaCepSuggestion[] = response.data;
            setSuggestions(data);
        } catch (error) {
            console.error('Erro ao buscar sugestões de CEP:', error);
            setSuggestions([]);
        }
    };

    return (

        <div className="">
            <SearchCepForm onSubmit={handleSearchSubmit} />
            {suggestions.length > 0 && <ModalResultsCep suggestions={suggestions} />}

        </div>
    );
};

export default CepSearch;
