import playOpponent from '../../src/utilities/playOpponent'
import { mockCreateBoard } from '../mockCreateBoard'
import { allEmpty, allFull } from '../mockBoardCases'

describe('playOpponent utility', () => {
    it('should changes the points array from all zeroes to at all zeroes except for one slot', () => {
        localStorage.setItem('points', allEmpty)
        localStorage.setItem('winner', 'false')
        localStorage.setItem('tie', 'false')
        localStorage.setItem('player', '1')
        const mockBoard: string = mockCreateBoard(allEmpty)
        document.body.innerHTML = `<p>Some message</p>` + mockBoard
        playOpponent()
        const points: string | null = localStorage.getItem('points')
        expect(points).not.toBe(allEmpty)
    })
    
    it('should throw an error if all cells are full', () => {
        localStorage.setItem('points', allFull)
        localStorage.setItem('winner', 'false')
        localStorage.setItem('tie', 'false')
        localStorage.setItem('player', '1')
        const mockBoard: string = mockCreateBoard(allFull)
        document.body.innerHTML = `<p>Some message</p>` + mockBoard
        expect(() => {
            playOpponent()
        }).toThrow('No cells on the current board can be played by the opponent')
    })
})
