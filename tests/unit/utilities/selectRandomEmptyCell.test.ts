import selectRandomEmptyCell from '../../../src/utilities/selectRandomEmptyCell'

describe('selectRandomEmptyCell utility', () => {
    beforeEach(() => {
        document.body.innerHTML = `<section>
            <article id='square-0'>X</article>
            <article id='square-1'>O</article>
            <article id='square-2'></article>
        </section>`
    })

    it('should return an HTMLElement under normal circumstances', () => {
        const result: any = selectRandomEmptyCell()
        expect(result instanceof HTMLElement).toBe(true)
    })

    it('should return element from screen with no textContent if one exists', () => {
        const result: HTMLElement | null = selectRandomEmptyCell()
        if (result) {
            const id: string = result.id
            const queryByIdResult: HTMLElement | null = document.getElementById(id)
            expect(result).toBe(queryByIdResult)
            expect(result.textContent).toBe('')
            expect(queryByIdResult?.textContent).toBe('')
        }
    })

    it('should return null if all elements from screen contain textContent', () => {
        document.body.innerHTML = `<section>
            <article id='square-0'>X</article>
            <article id='square-1'>O</article>
            <article id='square-2'>X</article>
        </section>`
        const result: HTMLElement | null = selectRandomEmptyCell()
        expect(result).toBe(null)
    })

    it('should return null if no cells (article tags with certain ids) on the screen', () => {
        document.body.innerHTML = `<section>
        </section>`
        const result: HTMLElement | null = selectRandomEmptyCell()
        expect(result).toBe(null)
    })
})
