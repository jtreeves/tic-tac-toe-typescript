import playOpponent from '../../src/utilities/playOpponent'
import { mockCreateBoard } from '../mockCreateBoard'
import { allEmpty } from '../mockBoardCases'

describe('playOpponent utility', () => {
    it('should changes the points array from all zeroes to at all zeroes except for one slot', () => {
        localStorage.setItem('points', allEmpty)
        localStorage.setItem('winner', 'false')
        localStorage.setItem('tie', 'false')
        localStorage.setItem('player', '1')
        document.body.innerHTML = mockCreateBoard(allEmpty)
        playOpponent()
        const points: string | null = localStorage.getItem('points')
        expect(points).not.toBe(allEmpty)
    })
})
