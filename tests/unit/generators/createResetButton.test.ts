import * as handleResetModule from '../../../src/handlers/handleReset'
import createResetButton from '../../../src/generators/createResetButton'

describe('createResetButton generator', () => {
    const result: any = createResetButton()

    it('should return an HTMLElement', () => {
        expect(result instanceof HTMLElement).toBe(true)
    })

    it('should return an element with Reset as its textContent', () => {
        expect(result.textContent).toBe('Reset')
    })

    it('should fire the handleReset function when clicked', () => {
        const spy: jest.SpyInstance = jest.spyOn(handleResetModule, 'default')
        spy.mockReturnValue(jest.fn())
        const spiedResult: HTMLElement = createResetButton()
        spiedResult.click()
        expect(spy).toBeCalledTimes(1)
    })
})
