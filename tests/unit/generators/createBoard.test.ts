import createBoard from '../../src/generators/createBoard'

describe('createBoard generator', () => {
    localStorage.setItem('points', '0,0,0,0,0,0,0,0,0')
    const result: any = createBoard()
    const children: any[] = result.childNodes

    it('should return an HTMLElement', () => {
        expect(result instanceof HTMLElement).toBe(true)
    })

    it('should return an element with 9 child elements', () => {
        expect(children.length).toBe(9)
    })
})
