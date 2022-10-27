import findCellByIndex from '../../src/utilities/findCellByIndex'

describe('findCellByIndex utility', () => {
    beforeEach(() => {
        document.body.innerHTML = `<section>
            <article id='square-0'/>
            <article id='square-1'/>
            <article id='square-2'/>
        </section>`
    })

    it('should return an HTMLElement under normal circumstances', () => {
        const result: any = findCellByIndex(0)
        expect(result instanceof HTMLElement).toBe(true)
    })

    it('should return element from screen with an id matching the index parameter', () => {
        const index: number = 0
        const id: string = 'square-' + index
        const result: HTMLElement | null = findCellByIndex(index)
        const expected: HTMLElement | null = document.getElementById(id)
        expect(result).toBe(expected)
        expect(result).not.toBe(null)
    })

    it('should return null if no element from screen has a matching id', () => {
        const index: number = 5
        const result: HTMLElement | null = findCellByIndex(index)
        expect(result).toBe(null)
    })
})
