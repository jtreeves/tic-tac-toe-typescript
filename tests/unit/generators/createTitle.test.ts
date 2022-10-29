import createTitle from '../../../src/generators/createTitle'

describe('createTitle generator', () => {
    const result: any = createTitle()

    it('should return an HTMLElement', () => {
        expect(result instanceof HTMLElement).toBe(true)
    })

    it('should return an element with Tic-Tac-Toe as its textContent', () => {
        expect(result.textContent).toBe('Tic-Tac-Toe')
    })
})
