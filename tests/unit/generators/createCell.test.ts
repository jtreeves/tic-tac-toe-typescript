import * as handleTurnModule from '../../../src/handlers/handleTurn'
import createCell from '../../../src/generators/createCell'

describe('createCell generator', () => {
    const id: string = 'some-id'
    const result: any = createCell(id)

    it('should return an HTMLElement', () => {
        expect(result instanceof HTMLElement).toBe(true)
    })

    it('should return an element with an id equal to the id it receives as a parameter', () => {
        expect(result.id).toBe(id)
    })

    it('should fire the handleTurn function when clicked', () => {
        const spy: jest.SpyInstance = jest.spyOn(handleTurnModule, 'default')
        const spiedResult: HTMLElement = createCell(id)
        spiedResult.click()
        expect(spy).toBeCalledTimes(1)
        spy.mockRestore()
    })
})
