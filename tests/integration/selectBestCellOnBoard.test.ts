import { mockCreateBoard } from '../mocks/mockCreateBoard'
import { allEmpty, nearlyFull, allFull, oneMissing } from '../mocks/mockBoardCases'
import setPoints from '../../src/storers/setPoints'
import selectBestCell from '../../src/utilities/selectBestCell'

describe('select best cell on board integration', () => {
    it('should return an HTMLElement corresponding to one of the article tags when run at beginning of game with an empty board', () => {
        document.body.innerHTML = mockCreateBoard(allEmpty)
        setPoints(allEmpty)
        const result: HTMLElement | null = selectBestCell(1)
        const cells: NodeListOf<HTMLElement> = document.querySelectorAll('article')
        let resultMatchesCell: boolean = false
        cells.forEach((cell: HTMLElement) => {
            if (cell.id === result?.id) {
                resultMatchesCell = true
            }
        })
        expect(result).not.toBe(null)
        expect(resultMatchesCell).toBe(true)
    })

    it('should return element with an id containing 1 if first row nearly full but empty in middle', () => {
        document.body.innerHTML = mockCreateBoard(nearlyFull)
        setPoints(nearlyFull)
        const result: HTMLElement | null = selectBestCell(1)
        expect(result?.id).toContain('1')
    })

    it('should return element with an id matching the only empty cell on the screen if only one cell remains empty', () => {
        document.body.innerHTML = mockCreateBoard(oneMissing)
        setPoints(oneMissing)
        const allCells: NodeListOf<HTMLElement> = document.querySelectorAll('article')
        const emptyCells: HTMLElement[] = []
        allCells.forEach((cell: HTMLElement) => {
            if (cell.textContent === '') {
                emptyCells.push(cell)
            }
        })
        const result: HTMLElement | null = selectBestCell(1)
        expect(emptyCells.length).toBe(1)
        expect(result?.id).toBe(emptyCells[0].id)
    })

    it('should return null if board fully occupied', () => {
        document.body.innerHTML = mockCreateBoard(allFull)
        setPoints(allFull)
        const result: HTMLElement | null = selectBestCell(1)
        expect(result).toBe(null)
    })
})
