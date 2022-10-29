import * as setInitialStatesModule from '../../../src/storers/setInitialStates'
import * as updateScreenWithOptionsModule from '../../../src/mutators/updateScreenWithOptions'
import handleReset from '../../../src/handlers/handleReset'

describe('handleReset handler', () => {
    beforeEach(() => {
        document.body.innerHTML = `
            <h2>Some reminder</h2>
            <p>Some message</p>
            <section>Some contents</section>
            <button>Reset</button>
        `
    })

    it('should create screen with no h2 or section tags', () => {
        handleReset()
        const h2: HTMLElement | null = document.querySelector('h2')
        const section: HTMLElement | null = document.querySelector('section')
        expect(h2).toBe(null)
        expect(section).toBe(null)
    })

    it('should call setInitialStates once', () => {
        const spy: jest.SpyInstance = jest.spyOn(setInitialStatesModule, 'default')
        handleReset()
        expect(spy).toBeCalledTimes(1)
        spy.mockRestore()
    })

    it('should call updateScreenWithOptions once', () => {
        const spy: jest.SpyInstance = jest.spyOn(updateScreenWithOptionsModule, 'default')
        handleReset()
        expect(spy).toBeCalledTimes(1)
        spy.mockRestore()
    })
})
