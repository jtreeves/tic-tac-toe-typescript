import * as getPlayerModule from '../../../src/accessors/getPlayer'
import * as playOpponentModule from '../../../src/utilities/playOpponent'
import updateScreenWithGame from '../../../src/mutators/updateScreenWithGame'

describe('updateScreenWithGame mutator', () => {
    beforeEach(() => {
        document.body.innerHTML = `
            <p>Some message</p>
            <div>Some contents</div>
        `
    })

    it('should add reminder of which side player is playing to the screen', () => {
        updateScreenWithGame()
        const reminder: HTMLElement | null = document.querySelector('h2')
        expect(reminder).toBeTruthy()
    })

    it('should add board to the screen', () => {
        updateScreenWithGame()
        const board: HTMLElement | null = document.querySelector('section')
        expect(board).toBeTruthy()
    })

    it('should add Reset button to the screen', () => {
        updateScreenWithGame()
        const button: HTMLElement | null = document.querySelector('button')
        expect(button?.textContent).toBe('Reset')
    })

    it('should execute playOpponent function after 1 second delay if value returned from getPlayer is -1', async () => {
        const spyPlayer: jest.SpyInstance = jest.spyOn(getPlayerModule, 'default')
        spyPlayer.mockReturnValue(-1)
        const spyOpponent: jest.SpyInstance = jest.spyOn(playOpponentModule, 'default')
        updateScreenWithGame()
        await new Promise((r) => setTimeout(r, 1000))
        expect(spyOpponent).toBeCalledTimes(1)
        spyPlayer.mockRestore()
        spyOpponent.mockRestore()
    })

    it('should not execute playOpponent function after 1 second delay if value returned from getPlayer is 1', async () => {
        const spyPlayer: jest.SpyInstance = jest.spyOn(getPlayerModule, 'default')
        spyPlayer.mockReturnValue(1)
        const spyOpponent: jest.SpyInstance = jest.spyOn(playOpponentModule, 'default')
        updateScreenWithGame()
        await new Promise((r) => setTimeout(r, 1000))
        expect(spyOpponent).toBeCalledTimes(0)
        spyPlayer.mockRestore()
        spyOpponent.mockRestore()
    })

    it('should throw an error if body does not exist', () => {
        const body: HTMLElement = document.querySelector('body') as HTMLElement
        body.remove()
        expect(() => {
            updateScreenWithGame()
        }).toThrow('No screen')
    })
})
