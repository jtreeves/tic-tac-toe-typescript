import createStartButton from '../../src/generators/createStartButton'

describe('createStartButton generator', () => {
    const result: any = createStartButton()

    it('should return an HTMLElement', () => {
        expect(result instanceof HTMLElement).toBe(true)
    })

    it('should return an element with Start as its textContent', () => {
        expect(result.textContent).toBe('Start')
    })
})
