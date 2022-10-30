import { mockCreateBoard } from '../../mocks/mockCreateBoard'
import { allEmpty, nearlyFull, allFull, xAlmostWins, oAlmostWins } from '../../mocks/mockBoardCases'
import * as getPointsModule from '../../../src/accessors/getPoints'
import selectBestCell from '../../../src/utilities/selectBestCell'

describe('selectBestCell utility', () => {
    it('should return an HTMLElement under normal circumstances', () => {
        const spy: jest.SpyInstance = jest.spyOn(getPointsModule, 'default')
        spy.mockReturnValue(allEmpty)
        document.body.innerHTML = mockCreateBoard(allEmpty)
        const result: any = selectBestCell(1)
        expect(result instanceof HTMLElement).toBe(true)
        spy.mockRestore()
    })

    it('should return element from screen with no textContent', () => {
        const spy: jest.SpyInstance = jest.spyOn(getPointsModule, 'default')
        spy.mockReturnValue(allEmpty)
        document.body.innerHTML = mockCreateBoard(allEmpty)
        const result: HTMLElement | null = selectBestCell(1)
        expect(result?.textContent).toBe('')
        spy.mockRestore()
    })

    it('should return element with an id containing 1 if first row nearly full but empty in middle', () => {
        const spy: jest.SpyInstance = jest.spyOn(getPointsModule, 'default')
        spy.mockReturnValue(nearlyFull)
        document.body.innerHTML = mockCreateBoard(nearlyFull)
        const result: HTMLElement | null = selectBestCell(1)
        expect(result?.id).toContain('1')
        spy.mockRestore()
    })

    it('should return element with an id containing 4 if playing O and indices 3 and 5 are both 1 in array currently returned by getPoints, thus making a blocking move', () => {
        const spy: jest.SpyInstance = jest.spyOn(getPointsModule, 'default')
        spy.mockReturnValue(xAlmostWins)
        document.body.innerHTML = mockCreateBoard(xAlmostWins)
        const result: HTMLElement | null = selectBestCell(-1)
        expect(result?.id).toContain('4')
        spy.mockRestore()
    })

    it('should return element with an id containing 4 if playing O and indices 3 and 5 are both -1 in array currently returned by getPoints, thus making a winning move', () => {
        const spy: jest.SpyInstance = jest.spyOn(getPointsModule, 'default')
        spy.mockReturnValue(oAlmostWins)
        document.body.innerHTML = mockCreateBoard(oAlmostWins)
        const result: HTMLElement | null = selectBestCell(-1)
        expect(result?.id).toContain('4')
        spy.mockRestore()
    })

    it('should return element with an id containing any number from 0 to 8 if board empty, thus making a random move', () => {
        const spy: jest.SpyInstance = jest.spyOn(getPointsModule, 'default')
        spy.mockReturnValue(allEmpty)
        document.body.innerHTML = mockCreateBoard(allEmpty)
        const result: HTMLElement | null = selectBestCell(1)
        const options: string[] = ['0', '1', '2', '3', '4', '5', '6', '7', '8']
        const id: string = String(result?.id)
        const lastDigit: string = id.slice(-1)
        expect(options.includes(lastDigit)).toBe(true)
        spy.mockRestore()
    })

    it('should return null if board fully occupied', () => {
        const spy: jest.SpyInstance = jest.spyOn(getPointsModule, 'default')
        spy.mockReturnValue(allFull)
        document.body.innerHTML = mockCreateBoard(allFull)
        const result: HTMLElement | null = selectBestCell(1)
        expect(result).toBe(null)
        spy.mockRestore()
    })
})
