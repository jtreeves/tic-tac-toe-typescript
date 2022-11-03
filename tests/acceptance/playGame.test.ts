import getTurn from '../../src/accessors/getTurn'
import getTie from '../../src/accessors/getTie'
import getWinner from '../../src/accessors/getWinner'
import selectBestCell from '../../src/utilities/selectBestCell'
import selectRandomEmptyCell from '../../src/utilities/selectRandomEmptyCell'
import app from '../../src/app'

jest.setTimeout(100000)

describe('play game acceptance', () => {
    it('should let user click through an entire game playing X until a winner or tie occurs, which should appear on the screen with a custom message, and it should be possible for X to win, O to win, or a tie game to occur', async () => {
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
            const message: HTMLElement | null = document.querySelector('p')
            if (winner) {
                const turn: number = getTurn()
                if (turn === 1) {
                    allXWins++
                    expect(message?.textContent).toBe('You win!')
                } else {
                    allOWins++
                    expect(message?.textContent).toBe('You lose!')
                }
                const randomRemainingCell: HTMLElement | null = selectRandomEmptyCell()
                if (randomRemainingCell) {
                    const id: string = randomRemainingCell.id
                    randomRemainingCell.click()
                    const updatedCell: HTMLElement = document.getElementById(id) as HTMLElement
                    expect(updatedCell.textContent).toBe('')
                }
            } else {
                allTieGames++
                expect(message?.textContent).toBe('Tie game!')
            }
        }
        expect(allXWins).toBeGreaterThanOrEqual(1)
        expect(allOWins).toBeGreaterThanOrEqual(1)
        expect(allTieGames).toBeGreaterThanOrEqual(1)
    })
    
    it('should let user click through an entire game playing O until a winner or tie occurs, which should appear on the screen with a custom message, and it should be possible for X to win, O to win, or a tie game to occur', async () => {
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
            const message: HTMLElement | null = document.querySelector('p')
            if (winner) {
                const turn: number = getTurn()
                if (turn === -1) {
                    allOWins++
                    expect(message?.textContent).toBe('You win!')
                } else {
                    allXWins++
                    expect(message?.textContent).toBe('You lose!')
                }
                const randomRemainingCell: HTMLElement | null = selectRandomEmptyCell()
                if (randomRemainingCell) {
                    const id: string = randomRemainingCell.id
                    randomRemainingCell.click()
                    const updatedCell: HTMLElement = document.getElementById(id) as HTMLElement
                    expect(updatedCell.textContent).toBe('')
                }
            } else {
                allTieGames++
                expect(message?.textContent).toBe('Tie game!')
            }
        }
        expect(allXWins).toBeGreaterThanOrEqual(1)
        expect(allOWins).toBeGreaterThanOrEqual(1)
        expect(allTieGames).toBeGreaterThanOrEqual(1)
    })
})
