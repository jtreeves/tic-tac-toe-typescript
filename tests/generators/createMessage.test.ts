import createMessage from '../../src/generators/createMessage'

describe('createMessage generator', () => {
    const result: any = createMessage()

    it('should return an HTMLElement', () => {
        expect(result instanceof HTMLElement).toBe(true)
    })

    it('should return an element with textContent containing the word game', () => {
        expect(result.textContent).toContain('game')
    })
})
