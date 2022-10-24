import createResetButton from '../../src/generators/createResetButton'

describe('createResetButton generator', () => {
    const result: any = createResetButton()

    it('should return an HTMLElement', () => {
        expect(result instanceof HTMLElement).toBe(true)
    })

    it('should return an element with Reset as its textContent', () => {
        expect(result.textContent).toBe('Reset')
    })
})
