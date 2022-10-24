import handleOptionX from '../../src/handlers/handleOptionX'

describe('handleOptionX handler', () => {
    beforeEach(() => {
        document.body.innerHTML = `
            <p>Some message</p>
            <div>Some contents</div>
        `
    })

    it('should set player state to 1', () => {
        handleOptionX()
        const player: string | null = localStorage.getItem('player')
        expect(player).toBe('1')
    })
})
