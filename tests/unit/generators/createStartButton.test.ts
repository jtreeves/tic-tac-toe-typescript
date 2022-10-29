import * as updateScreenWithOptionsModule from '../../../src/mutators/updateScreenWithOptions'
import createStartButton from '../../../src/generators/createStartButton'

describe('createStartButton generator', () => {
    const result: any = createStartButton()

    it('should return an HTMLElement', () => {
        expect(result instanceof HTMLElement).toBe(true)
    })

    it('should return an element with Start as its textContent', () => {
        expect(result.textContent).toBe('Start')
    })

    it('should fire the updateScreenWithOptions function when clicked', () => {
        const spy: jest.SpyInstance = jest.spyOn(updateScreenWithOptionsModule, 'default')
        spy.mockReturnValue(jest.fn())
        const spiedResult: HTMLElement = createStartButton()
        spiedResult.click()
        expect(spy).toBeCalledTimes(1)
    })
})
