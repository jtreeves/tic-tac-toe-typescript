import createPlayerReminder from '../../src/generators/createPlayerReminder'

describe('createPlayerReminder generator', () => {
    const result: any = createPlayerReminder()

    it('should return an HTMLElement', () => {
        expect(result instanceof HTMLElement).toBe(true)
    })

    it('should return an element with textContent that contains the word playing', () => {
        expect(result.textContent).toContain('playing')
    })
})
