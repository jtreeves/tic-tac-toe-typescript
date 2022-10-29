import * as getPointsModule from '../../../src/accessors/getPoints'
import createBoard from '../../../src/generators/createBoard'

describe('createBoard generator', () => {
    it('should return an HTMLElement containing other HTMLElements', () => {
        const spy: jest.SpyInstance = jest.spyOn(getPointsModule, 'default')
        spy.mockReturnValue([0, 0, 0, 0, 0, 0, 0, 0, 0])
        const result: any = createBoard()
        const children: any[] = result.childNodes
        expect(result instanceof HTMLElement).toBe(true)
        children.forEach((child: any) => {
            expect(child instanceof HTMLElement).toBe(true)
        })
    })

    it('should return an element with 9 child elements', () => {
        const spy: jest.SpyInstance = jest.spyOn(getPointsModule, 'default')
        spy.mockReturnValue([0, 0, 0, 0, 0, 0, 0, 0, 0])
        const result: HTMLElement = createBoard()
        const children: NodeListOf<ChildNode> = result.childNodes
        expect(children.length).toBe(9)
    })

    it('should contain child elements with ids square-0 to square-8', () => {
        const spy: jest.SpyInstance = jest.spyOn(getPointsModule, 'default')
        spy.mockReturnValue([0, 0, 0, 0, 0, 0, 0, 0, 0])
        const result: HTMLElement = createBoard()
        const children: NodeListOf<ChildNode> = result.childNodes
        const ids: string[] = []
        children.forEach((child: ChildNode, index: number) => {
            const coercedChild: HTMLElement = child as HTMLElement
            const id: string = coercedChild.id
            ids.push(id)
        })
        expect(ids[0]).toBe('square-0')
        expect(ids.slice(-1)[0]).toBe('square-8')
    })
})
