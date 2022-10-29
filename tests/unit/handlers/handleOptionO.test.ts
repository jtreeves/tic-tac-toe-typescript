import handleOptionO from '../../../src/handlers/handleOptionO'

describe('handleOptionO handler', () => {
    beforeEach(() => {
        document.body.innerHTML = `
            <p>Some message</p>
            <div>Some contents</div>
        `
    })

    it('should set player state to -1', () => {
        handleOptionO()
        const player: string | null = localStorage.getItem('player')
        expect(player).toBe('-1')
    })
})
