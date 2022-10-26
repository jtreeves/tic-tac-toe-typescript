import selectBestCell from '../../src/utilities/selectBestCell'
import { mockCreateBoard } from '../mockCreateBoard'
import { allEmpty, nearlyFull } from '../mockBoardCases'

describe('selectBestCell utility', () => {
    it('should return an HTMLElement', () => {
        localStorage.setItem('points', allEmpty)
        document.body.innerHTML = mockCreateBoard(allEmpty)
        const result: any = selectBestCell(1)
        expect(result instanceof HTMLElement).toBe(true)
    })

    it('should return element from screen with no textContent', () => {
        localStorage.setItem('points', allEmpty)
        document.body.innerHTML = mockCreateBoard(allEmpty)
        const result: HTMLElement | null = selectBestCell(1)
        expect(result?.textContent).toBe('')
    })

    it('should return element with an id containing 1 if first row nearly full but empty in middle', () => {
        localStorage.setItem('points', nearlyFull)
        document.body.innerHTML = mockCreateBoard(nearlyFull)
        const result: HTMLElement | null = selectBestCell(1)
        expect(result?.id).toContain('1')
    })
})
