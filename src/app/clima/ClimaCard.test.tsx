import { getAllByTestId, render, screen } from '@testing-library/react'
import ClimaCard from './page'

describe("Clima Card Teste Component", () => {
    it("Deve renderizar o componente com retorno da API", () => {
        render(<ClimaCard />)
        expect(screen.getAllByTestId('weather-card')).toBeDefined()
    })
})