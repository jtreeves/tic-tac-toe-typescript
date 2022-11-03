import getPoints from '../../src/accessors/getPoints'
import getWinner from '../../src/accessors/getWinner'
import getPlayer from '../../src/accessors/getPlayer'
import setInitialStates from '../../src/storers/setInitialStates'
import setPlayer from '../../src/storers/setPlayer'
import setWinner from '../../src/storers/setWinner'
import setPoints from '../../src/storers/setPoints'
import setTurn from '../../src/storers/setTurn'
import createInitialScreen from '../../src/generators/createInitialScreen'
import updateScreenWithOptions from '../../src/mutators/updateScreenWithOptions'
import updateScreenWithGame from '../../src/mutators/updateScreenWithGame'

describe('click to update integration', () => {
    beforeEach(() => {
        document.body.innerHTML = ``
        createInitialScreen()
    })

    it('should replace start button with option buttons if click start button on initial screen', () => {
        const startButton: HTMLElement | null = document.querySelector('button')
        startButton?.click()
        const optionButtons: NodeListOf<HTMLElement> = document.querySelectorAll('button')
        expect(startButton?.textContent).toBe('Start')
        expect(optionButtons[0].textContent).toBe('Play X')
        expect(optionButtons[1].textContent).toBe('Play O')
    })
    
    it('should replace option buttons with reset button and set player state to 1 if click Play X button on options screen', () => {
        updateScreenWithOptions()
        const optionsButtons: NodeListOf<HTMLElement> = document.querySelectorAll('button')
        const firstButton: HTMLElement = optionsButtons[0]
        firstButton.click()
        const resetButton: HTMLElement | null = document.querySelector('button')
        const player: number = getPlayer()
        expect(player).toBe(1)
        expect(firstButton.textContent).toBe('Play X')
        expect(resetButton?.textContent).toBe('Reset')
    })
    
    it('should replace option buttons with reset button and set player state to -1 if click Play O button on options screen', () => {
        updateScreenWithOptions()
        const optionsButtons: NodeListOf<HTMLElement> = document.querySelectorAll('button')
        const secondButton: HTMLElement = optionsButtons[1]
        secondButton.click()
        const resetButton: HTMLElement | null = document.querySelector('button')
        const player: number = getPlayer()
        expect(player).toBe(-1)
        expect(secondButton.textContent).toBe('Play O')
        expect(resetButton?.textContent).toBe('Reset')
    })

    it('should replace reset button with option buttons if click reset button on game screen', () => {
        updateScreenWithOptions()
        updateScreenWithGame()
        const resetButton: HTMLElement | null = document.querySelector('button')
        resetButton?.click()
        const optionButtons: NodeListOf<HTMLElement> = document.querySelectorAll('button')
        expect(resetButton?.textContent).toBe('Reset')
        expect(optionButtons[0].textContent).toBe('Play X')
        expect(optionButtons[1].textContent).toBe('Play O')
    })

    it('should reset points to array of zeroes and winner to false if click reset button on game screen', () => {
        updateScreenWithOptions()
        updateScreenWithGame()
        setPoints([1, 1, 1, 0, 0, 0, 0, 0, 0])
        setWinner(true)
        const resetButton: HTMLElement | null = document.querySelector('button')
        resetButton?.click()
        const points: number[] = getPoints()
        const winner: boolean = getWinner()
        expect(points).toStrictEqual(Array(9).fill(0))
        expect(winner).toBe(false)
    })

    it('should change first cell content from empty to X if click first cell on game screen and player set to 1', () => {
        setInitialStates()
        updateScreenWithOptions()
        updateScreenWithGame()
        setPlayer(1)
        setTurn(1)
        const cells: NodeListOf<HTMLElement> = document.querySelectorAll('article')
        const firstCell: HTMLElement = cells[0]
        expect(firstCell.textContent).toBe('')
        firstCell.click()
        expect(firstCell.textContent).toBe('X')
    })

    it('should change first cell content from empty to O if click first cell on game screen and player set to -1', () => {
        setInitialStates()
        updateScreenWithOptions()
        updateScreenWithGame()
        setPlayer(-1)
        setTurn(-1)
        const cells: NodeListOf<HTMLElement> = document.querySelectorAll('article')
        const firstCell: HTMLElement = cells[0]
        expect(firstCell.textContent).toBe('')
        firstCell.click()
        expect(firstCell.textContent).toBe('O')
    })

    it('should not change first cell content from empty if click first cell on game screen but player and turn are not equal', () => {
        setInitialStates()
        updateScreenWithOptions()
        updateScreenWithGame()
        setPlayer(-1)
        const cells: NodeListOf<HTMLElement> = document.querySelectorAll('article')
        const firstCell: HTMLElement = cells[0]
        expect(firstCell.textContent).toBe('')
        firstCell.click()
        expect(firstCell.textContent).toBe('')
    })

    it('should not change first cell content when click first cell on game screen if the cell already has content', () => {
        setInitialStates()
        updateScreenWithOptions()
        updateScreenWithGame()
        setPlayer(1)
        const cells: NodeListOf<HTMLElement> = document.querySelectorAll('article')
        const firstCell: HTMLElement = cells[0]
        firstCell.textContent = 'O'
        expect(firstCell.textContent).toBe('O')
        firstCell.click()
        expect(firstCell.textContent).toBe('O')
    })

    it('should not change first cell content when click first cell on game screen if winner is true', () => {
        setInitialStates()
        updateScreenWithOptions()
        updateScreenWithGame()
        setPlayer(1)
        setWinner(true)
        const cells: NodeListOf<HTMLElement> = document.querySelectorAll('article')
        const firstCell: HTMLElement = cells[0]
        firstCell.click()
        expect(firstCell.textContent).toBe('')
    })
})
