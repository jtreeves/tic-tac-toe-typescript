import handleReset from '../../../src/handlers/handleReset'

describe('handleReset handler', () => {
    beforeEach(() => {
        localStorage.setItem('points', '1,0,1,0,-1,0,1,0,-1')
        localStorage.setItem('turn', '-1')
        localStorage.setItem('winner', 'false')
        localStorage.setItem('tie', 'false')
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

    it('should set points to array of all zeroes', () => {
        handleReset()
        const points: string | null = localStorage.getItem('points')
        expect(points).toBe('0,0,0,0,0,0,0,0,0')
    })

    it('should set turn to 1', () => {
        handleReset()
        const turn: string | null = localStorage.getItem('turn')
        expect(turn).toBe('1')
    })
})
