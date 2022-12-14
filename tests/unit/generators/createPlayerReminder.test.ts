import * as getPlayerModule from '../../../src/accessors/getPlayer'
import createPlayerReminder from '../../../src/generators/createPlayerReminder'

describe('createPlayerReminder generator', () => {
    const result: any = createPlayerReminder()

    it('should return an HTMLElement', () => {
        expect(result instanceof HTMLElement).toBe(true)
    })

    it('should return an element with textContent that contains the word playing', () => {
        expect(result.textContent).toContain('playing')
    })

    it('should return an element with textContent of You are playing X if getPlayer returns 1', () => {
        const spy: jest.SpyInstance = jest.spyOn(getPlayerModule, 'default')
        spy.mockReturnValue(1)
        const stateResult: HTMLElement = createPlayerReminder()
        expect(stateResult.textContent).toBe('You are playing X')
    })

    it('should return an element with textContent of You are playing O if getPlayer returns -1', () => {
        const spy: jest.SpyInstance = jest.spyOn(getPlayerModule, 'default')
        spy.mockReturnValue(-1)
        const stateResult: HTMLElement = createPlayerReminder()
        expect(stateResult.textContent).toBe('You are playing O')
    })
})
