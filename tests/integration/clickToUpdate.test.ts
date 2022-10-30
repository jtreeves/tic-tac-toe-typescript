import setInitialStates from '../../src/storers/setInitialStates'
import setPlayer from '../../src/storers/setPlayer'
import createInitialScreen from '../../src/generators/createInitialScreen'
import updateScreenWithOptions from '../../src/mutators/updateScreenWithOptions'
import updateScreenWithGame from '../../src/mutators/updateScreenWithGame'

describe('click to update integration', () => {
    it('should replace start button with option buttons if click start button on initial screen', () => {
        document.body.innerHTML = ``
        createInitialScreen()
        const startButton: HTMLElement | null = document.querySelector('button')
        startButton?.click()
        const optionButtons: NodeListOf<HTMLElement> = document.querySelectorAll('button')
        expect(startButton?.textContent).toBe('Start')
        expect(optionButtons[0].textContent).toBe('Play X')
        expect(optionButtons[1].textContent).toBe('Play O')
    })
    
    it('should replace option buttons with reset button if click Play X button on options screen', () => {
        document.body.innerHTML = ``
        createInitialScreen()
        updateScreenWithOptions()
        const optionsButtons: NodeListOf<HTMLElement> = document.querySelectorAll('button')
        const firstButton: HTMLElement = optionsButtons[0]
        firstButton.click()
        const resetButton: HTMLElement | null = document.querySelector('button')
        expect(firstButton.textContent).toBe('Play X')
        expect(resetButton?.textContent).toBe('Reset')
    })
    
    it('should replace option buttons with reset button if click Play O button on options screen', () => {
        document.body.innerHTML = ``
        createInitialScreen()
        updateScreenWithOptions()
        const optionsButtons: NodeListOf<HTMLElement> = document.querySelectorAll('button')
        const secondButton: HTMLElement = optionsButtons[1]
        secondButton.click()
        const resetButton: HTMLElement | null = document.querySelector('button')
        expect(secondButton.textContent).toBe('Play O')
        expect(resetButton?.textContent).toBe('Reset')
    })

    it('should replace reset button with option buttons if click reset button on game screen', () => {
        document.body.innerHTML = ``
        createInitialScreen()
        updateScreenWithOptions()
        updateScreenWithGame()
        const resetButton: HTMLElement | null = document.querySelector('button')
        resetButton?.click()
        const optionButtons: NodeListOf<HTMLElement> = document.querySelectorAll('button')
        expect(resetButton?.textContent).toBe('Reset')
        expect(optionButtons[0].textContent).toBe('Play X')
        expect(optionButtons[1].textContent).toBe('Play O')
    })
})
