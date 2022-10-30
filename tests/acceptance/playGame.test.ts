import getTurn from '../../src/accessors/getTurn'
import getTie from '../../src/accessors/getTie'
import getWinner from '../../src/accessors/getWinner'
import selectBestCell from '../../src/utilities/selectBestCell'
import app from '../../src/app'

jest.setTimeout(100000)

describe('play game acceptance', () => {
    it('should let user click through an entire game playing X until a winner or tie occurs, which should appear on the screen with a custom message, and it should be possible for X to win, O to win, or a time game to occur', async () => {
        let allXWins: number = 0
        let allOWins: number = 0
        let allTieGames: number = 0
        while (allXWins === 0 || allOWins === 0 || allTieGames === 0) {
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
            if (winner) {
                const turn: number = getTurn()
                if (turn === 1) {
                    xWins = true
                    allXWins++
                    expect(message?.textContent).toBe('You win!')
                } else {
                    oWins = true
                    allOWins++
                    expect(message?.textContent).toBe('You lose!')
                }
            } else {
                tieGame = true
                allTieGames++
                expect(message?.textContent).toBe('Tie game!')
            }
            expect(xWins || oWins || tieGame).toBe(true)
        }
        expect(allXWins).toBeGreaterThan(0)
        expect(allOWins).toBeGreaterThan(0)
        expect(allTieGames).toBeGreaterThan(0)
    })
    
    it('should let user click through an entire game playing O until a winner or tie occurs, which should appear on the screen with a custom message, and it should be possible for X to win, O to win, or a time game to occur', async () => {
        let allXWins: number = 0
        let allOWins: number = 0
        let allTieGames: number = 0
        while (allXWins === 0 || allOWins === 0 || allTieGames === 0) {
            document.body.innerHTML = ``
            app()
            const startButton: HTMLElement | null = document.querySelector('button')
            startButton?.click()
            const optionButtons: NodeListOf<HTMLElement> = document.querySelectorAll('button')
            optionButtons[1].click()
            await new Promise((r) => setTimeout(r, 1000))
            let winner: boolean = getWinner()
            let tie: boolean = getTie()
            while (!winner && !tie) {
                const newCell: HTMLElement | null = selectBestCell(-1)
                newCell?.click()
                await new Promise((r) => setTimeout(r, 1000))
                winner = getWinner()
                tie = getTie()
            }
            let xWins: boolean = false
            let oWins: boolean = false
            let tieGame: boolean = false
            const message: HTMLElement | null = document.querySelector('p')
            if (winner) {
                const turn: number = getTurn()
                if (turn === -1) {
                    oWins = true
                    allOWins++
                    expect(message?.textContent).toBe('You win!')
                } else {
                    xWins = true
                    allXWins++
                    expect(message?.textContent).toBe('You lose!')
                }
            } else {
                tieGame = true
                allTieGames++
                expect(message?.textContent).toBe('Tie game!')
            }
            expect(xWins || oWins || tieGame).toBe(true)
        }
        expect(allXWins).toBeGreaterThan(0)
        expect(allOWins).toBeGreaterThan(0)
        expect(allTieGames).toBeGreaterThan(0)
    })
})
