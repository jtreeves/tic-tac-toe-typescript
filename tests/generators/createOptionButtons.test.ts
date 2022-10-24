import createOptionButtons from '../../src/generators/createOptionButtons'

describe('createOptionButtons generator', () => {
    const result: any = createOptionButtons()
    const children: any[] = result.childNodes

    it('should return an HTMLElement', () => {
        expect(result instanceof HTMLElement).toBe(true)
    })

    it('should return an element with two child elements', () => {
        expect(children.length).toBe(2)
    })

    it('should return an element whose first child element has Play X as its textContent', () => {
        expect(children[0].textContent).toBe('Play X')
    })

    it('should return an element whose second child element has Play O as its textContent', () => {
        expect(children[1].textContent).toBe('Play O')
    })
})
