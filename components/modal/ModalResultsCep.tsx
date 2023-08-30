import React from 'react'
import { SearchResultsProps } from '../../types/cep'


const ModalResultsCep: React.FC<SearchResultsProps> = ({ suggestions }) => {
    return (
        <div
            className=" absolute w-[350px] h-[200px] bg-slate-100 rounded flex flex-col items-center relative top-[-25vh] left-1/2 transform -translate-x-1/2 -translate-y-1/2 shadow-xl"

        >
            <div className="flex items-center gap-4">
                <p className="font-medium sm:text-lg">Sugestões de CEP:</p>
            </div>

            <ul className="mt-4 text-gray-500">
                {suggestions.map((suggestion, index) => (
                    <li key={index}>{suggestion.cep}</li>
                ))}
            </ul>
        </div>

    )
}

export default ModalResultsCep