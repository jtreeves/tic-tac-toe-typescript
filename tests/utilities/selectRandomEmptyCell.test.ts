import selectRandomEmptyCell from '../../src/utilities/selectRandomEmptyCell'

describe('selectRandomEmptyCell utility', () => {
    beforeEach(() => {
        document.body.innerHTML = `<section>
            <article id='square-0'>X</article>
            <article id='square-1'>O</article>
            <article id='square-2'></article>
        </section>`
    })

    it('should return an HTMLElement', () => {
        const result: any = selectRandomEmptyCell()
        expect(result instanceof HTMLElement).toBe(true)
    })

    it('should return element from screen with no textContent', () => {
        const result: HTMLElement = selectRandomEmptyCell()
        expect(result.textContent).toBe('')
    })
})
