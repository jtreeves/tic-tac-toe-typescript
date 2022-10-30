import getTurn from '../../src/accessors/getTurn'
import getTie from '../../src/accessors/getTie'
import getWinner from '../../src/accessors/getWinner'
import selectBestCell from '../../src/utilities/selectBestCell'
import app from '../../src/app'

jest.setTimeout(10000)

describe('play game acceptance', () => {
    it('should let user click through an entire game until a winner or tie occurs, which should appear on the screen with a custom message', async () => {
        document.body.innerHTML = ``
        app()
        const startButton: HTMLElement | null = document.querySelector('button')
        startButton?.click()
        const optionButtons: NodeListOf<HTMLElement> = document.querySelectorAll('button')
        optionButtons[0].click()
        let winner: boolean = getWinner()
        let tie: boolean = getTie()
        while (!winner && !tie) {
            const newCell: HTMLElement | null = selectBestCell(1)
            newCell?.click()
            await new Promise((r) => setTimeout(r, 1000))
            winner = getWinner()
            tie = getTie()
        }
        let xWins: boolean = false
        let oWins: boolean = false
        let tieGame: boolean = false
        const message: HTMLElement | null = document.querySelector('p')
        if (tie) {
            tieGame = true
            expect(message?.textContent).toBe('Tie game!')
        } else {
            const turn: number = getTurn()
            if (turn === 1) {
                xWins = true
                expect(message?.textContent).toBe('You win!')
            } else {
                oWins = true
                expect(message?.textContent).toBe('You lose!')
            }
        }
        expect(xWins || oWins || tieGame).toBe(true)
    })
})
