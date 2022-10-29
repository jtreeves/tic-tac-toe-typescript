import { mockCreateBoard } from '../../mocks/mockCreateBoard'
import { allEmpty, nearlyFull, allFull } from '../../mocks/mockBoardCases'
import * as getPointsModule from '../../../src/accessors/getPoints'
import selectBestCell from '../../../src/utilities/selectBestCell'

describe('selectBestCell utility', () => {
    it('should return an HTMLElement under normal circumstances', () => {
        const spy: jest.SpyInstance = jest.spyOn(getPointsModule, 'default')
        spy.mockReturnValue([0, 0, 0, 0, 0, 0, 0, 0, 0])
        document.body.innerHTML = mockCreateBoard(allEmpty)
        const result: any = selectBestCell(1)
        expect(result instanceof HTMLElement).toBe(true)
        spy.mockRestore()
    })

    it('should return element from screen with no textContent', () => {
        const spy: jest.SpyInstance = jest.spyOn(getPointsModule, 'default')
        spy.mockReturnValue([0, 0, 0, 0, 0, 0, 0, 0, 0])
        document.body.innerHTML = mockCreateBoard(allEmpty)
        const result: HTMLElement | null = selectBestCell(1)
        expect(result?.textContent).toBe('')
        spy.mockRestore()
    })

    it('should return element with an id containing 1 if first row nearly full but empty in middle', () => {
        const spy: jest.SpyInstance = jest.spyOn(getPointsModule, 'default')
        spy.mockReturnValue([1, 0, 1, 0, -1, 0, 0, 0, 0])
        document.body.innerHTML = mockCreateBoard(nearlyFull)
        const result: HTMLElement | null = selectBestCell(1)
        expect(result?.id).toContain('1')
        spy.mockRestore()
    })

    it('should return null if board fully occupied', () => {
        const spy: jest.SpyInstance = jest.spyOn(getPointsModule, 'default')
        spy.mockReturnValue([1, -1, 1, -1, -1, 1, 1, -1, 1])
        document.body.innerHTML = mockCreateBoard(allFull)
        const result: HTMLElement | null = selectBestCell(1)
        expect(result).toBe(null)
        spy.mockRestore()
    })
})
