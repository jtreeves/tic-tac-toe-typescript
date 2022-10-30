import getPoints from '../../src/accessors/getPoints'
import selectBestCell from '../../src/utilities/selectBestCell'
import app from '../../src/app'

describe('reset game acceptance', () => {
    it('should let user reset button at any point during the game play, which will take them back to the options screen and reset states', async () => {
        document.body.innerHTML = ``
        app()
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
})
