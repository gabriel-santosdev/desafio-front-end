export interface ViaCepSuggestion {
    cep: string;
}

export interface SearchResultsProps {
    suggestions: ViaCepSuggestion[];
}

export interface SearchFormProps {
    onSubmit: (uf: string, city: string, street: string) => void;
}