import * as handleOptionOModule from '../../../src/handlers/handleOptionO'
import * as handleOptionXModule from '../../../src/handlers/handleOptionX'
import createOptionButtons from '../../../src/generators/createOptionButtons'

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

    it('should fire the handleOptionX function when first child element clicked', () => {
        const spy: jest.SpyInstance = jest.spyOn(handleOptionXModule, 'default')
        spy.mockReturnValue(jest.fn())
        const spiedResult: HTMLElement = createOptionButtons()
        const children: NodeListOf<ChildNode> = spiedResult.childNodes
        const firstChild: HTMLElement = children[0] as HTMLElement
        firstChild.click()
        expect(spy).toBeCalledTimes(1)
        spy.mockRestore()
    })

    it('should fire the handleOptionO function when second child element clicked', () => {
        const spy: jest.SpyInstance = jest.spyOn(handleOptionOModule, 'default')
        spy.mockReturnValue(jest.fn())
        const spiedResult: HTMLElement = createOptionButtons()
        const children: NodeListOf<ChildNode> = spiedResult.childNodes
        const secondChild: HTMLElement = children[1] as HTMLElement
        secondChild.click()
        expect(spy).toBeCalledTimes(1)
        spy.mockRestore()
    })
})
