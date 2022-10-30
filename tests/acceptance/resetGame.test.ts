import getPoints from '../../src/accessors/getPoints'
import getWinner from '../../src/accessors/getWinner'
import getTie from '../../src/accessors/getTie'
import selectBestCell from '../../src/utilities/selectBestCell'
import app from '../../src/app'

jest.setTimeout(10000)

describe('reset game acceptance', () => {
    beforeEach(() => {
        document.body.innerHTML = ``
        app()
    })

    it('should let user reset game at the beginning of the game, while the board is still empty, which will take them back to the options screen', () => {
        const startButton: HTMLElement | null = document.querySelector('button')
        startButton?.click()
        const optionButtons: NodeListOf<HTMLElement> = document.querySelectorAll('button')
        optionButtons[0].click()
        const cells: NodeListOf<HTMLElement> = document.querySelectorAll('article')
        cells.forEach((cell: HTMLElement) => {
            expect(cell.textContent).toBe('')
        })
        const resetButton: HTMLElement | null = document.querySelector('button')
        resetButton?.click()
        const newOptionButtons: NodeListOf<HTMLElement> = document.querySelectorAll('button')
        expect(newOptionButtons[0].textContent).toBe('Play X')
        expect(newOptionButtons[1].textContent).toBe('Play O')
    })
    
    it('should let user reset game after 1 move, which will take them back to the options screen and reset states', async () => {
        const startButton: HTMLElement | null = document.querySelector('button')
        startButton?.click()
        const optionButtons: NodeListOf<HTMLElement> = document.querySelectorAll('button')
        optionButtons[0].click()
        const firstCell: HTMLElement | null = selectBestCell(1)
        firstCell?.click()
        await new Promise((r) => setTimeout(r, 1000))
        const currentPoints: number[] = getPoints()
        const resetButton: HTMLElement | null = document.querySelector('button')
        resetButton?.click()
        const updatedPoints: number[] = getPoints()
        const newOptionButtons: NodeListOf<HTMLElement> = document.querySelectorAll('button')
        expect(updatedPoints).not.toStrictEqual(currentPoints)
        expect(newOptionButtons[0].textContent).toBe('Play X')
        expect(newOptionButtons[1].textContent).toBe('Play O')
    })
    
    it('should let user reset game after 2 moves, which will take them back to the options screen and reset states', async () => {
        const startButton: HTMLElement | null = document.querySelector('button')
        startButton?.click()
        const optionButtons: NodeListOf<HTMLElement> = document.querySelectorAll('button')
        optionButtons[0].click()
        const firstCell: HTMLElement | null = selectBestCell(1)
        firstCell?.click()
        await new Promise((r) => setTimeout(r, 1000))
        const secondCell: HTMLElement | null = selectBestCell(1)
        secondCell?.click()
        await new Promise((r) => setTimeout(r, 1000))
        const currentPoints: number[] = getPoints()
        const resetButton: HTMLElement | null = document.querySelector('button')
        resetButton?.click()
        const updatedPoints: number[] = getPoints()
        const newOptionButtons: NodeListOf<HTMLElement> = document.querySelectorAll('button')
        expect(updatedPoints).not.toStrictEqual(currentPoints)
        expect(newOptionButtons[0].textContent).toBe('Play X')
        expect(newOptionButtons[1].textContent).toBe('Play O')
    })
    
    it('should let user reset game after game has ended, either with a winner or a tie, which will take them back to the options screen and reset states', async () => {
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
        const currentPoints: number[] = getPoints()
        const resetButton: HTMLElement | null = document.querySelector('button')
        resetButton?.click()
        const updatedPoints: number[] = getPoints()
        const updatedWinner: boolean = getWinner()
        const updatedTie: boolean = getTie()
        const newOptionButtons: NodeListOf<HTMLElement> = document.querySelectorAll('button')
        expect(updatedPoints).not.toStrictEqual(currentPoints)
        expect(winner || tie).toBe(true)
        expect(updatedWinner && updatedTie).toBe(false)
        expect(newOptionButtons[0].textContent).toBe('Play X')
        expect(newOptionButtons[1].textContent).toBe('Play O')
    })
})
