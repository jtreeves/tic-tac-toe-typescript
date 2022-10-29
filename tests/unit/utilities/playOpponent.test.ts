import { mockCreateBoard } from '../../mocks/mockCreateBoard'
import { allEmpty, allFull } from '../../mocks/mockBoardCases'
import * as getPlayerModule from '../../../src/accessors/getPlayer'
import * as getTieModule from '../../../src/accessors/getTie'
import * as getWinnerModule from '../../../src/accessors/getWinner'
import * as updateCurrentStatesModule from '../../../src/mutators/updateCurrentStates'
import playOpponent from '../../../src/utilities/playOpponent'

describe('playOpponent utility', () => {
    it('should change the board from containing all empty cells to containing exactly 1 cell with an X when getPlayer returns -1 and getWinner and getTie both return false', () => {
        const spyPlayer: jest.SpyInstance = jest.spyOn(getPlayerModule, 'default')
        spyPlayer.mockReturnValue(-1)
        const spyTie: jest.SpyInstance = jest.spyOn(getTieModule, 'default')
        spyTie.mockReturnValue(false)
        const spyWinner: jest.SpyInstance = jest.spyOn(getWinnerModule, 'default')
        spyWinner.mockReturnValue(false)
        const spyScreen: jest.SpyInstance = jest.spyOn(updateCurrentStatesModule, 'default')
        spyScreen.mockReturnValue(jest.fn())
        document.body.innerHTML = mockCreateBoard(allEmpty)
        const originalCells: NodeListOf<HTMLElement> = document.querySelectorAll('article')
        const originalCellContents: string[] = []
        originalCells.forEach((cell: HTMLElement) => {
            const text: string = String(cell.textContent)
            originalCellContents.push(text)
        })
        const allOriginalsEmpty: boolean = originalCellContents.every((content: string) => {
            return content === ''
        })
        playOpponent()
        const updatedCells: NodeListOf<HTMLElement> = document.querySelectorAll('article')
        const updatedCellContents: string[] = []
        updatedCells.forEach((cell: HTMLElement) => {
            const text: string = String(cell.textContent)
            updatedCellContents.push(text)
        })
        let cellsWithXAfter: number = 0
        updatedCellContents.forEach((content: string) => {
            if (content === 'X') {
                cellsWithXAfter += 1
            }
        })
        expect(allOriginalsEmpty).toBe(true)
        expect(cellsWithXAfter).toBe(1)
        spyPlayer.mockRestore()
        spyTie.mockRestore()
        spyWinner.mockRestore()
        spyScreen.mockRestore()
    })
    
    it('should change the board from containing all empty cells to containing exactly 1 cell with an O when getPlayer returns 1 and getWinner and getTie both return false', () => {
        const spyPlayer: jest.SpyInstance = jest.spyOn(getPlayerModule, 'default')
        spyPlayer.mockReturnValue(1)
        const spyTie: jest.SpyInstance = jest.spyOn(getTieModule, 'default')
        spyTie.mockReturnValue(false)
        const spyWinner: jest.SpyInstance = jest.spyOn(getWinnerModule, 'default')
        spyWinner.mockReturnValue(false)
        const spyScreen: jest.SpyInstance = jest.spyOn(updateCurrentStatesModule, 'default')
        spyScreen.mockReturnValue(jest.fn())
        document.body.innerHTML = mockCreateBoard(allEmpty)
        const originalCells: NodeListOf<HTMLElement> = document.querySelectorAll('article')
        const originalCellContents: string[] = []
        originalCells.forEach((cell: HTMLElement) => {
            const text: string = String(cell.textContent)
            originalCellContents.push(text)
        })
        const allOriginalsEmpty: boolean = originalCellContents.every((content: string) => {
            return content === ''
        })
        playOpponent()
        const updatedCells: NodeListOf<HTMLElement> = document.querySelectorAll('article')
        const updatedCellContents: string[] = []
        updatedCells.forEach((cell: HTMLElement) => {
            const text: string = String(cell.textContent)
            updatedCellContents.push(text)
        })
        let cellsWithOAfter: number = 0
        updatedCellContents.forEach((content: string) => {
            if (content === 'O') {
                cellsWithOAfter += 1
            }
        })
        expect(allOriginalsEmpty).toBe(true)
        expect(cellsWithOAfter).toBe(1)
        spyPlayer.mockRestore()
        spyTie.mockRestore()
        spyWinner.mockRestore()
        spyScreen.mockRestore()
    })
    
    it('should execute updateCurrentStates function once if getWinner and getTie both return false and the board is not full', () => {
        const spyPlayer: jest.SpyInstance = jest.spyOn(getPlayerModule, 'default')
        spyPlayer.mockReturnValue(1)
        const spyTie: jest.SpyInstance = jest.spyOn(getTieModule, 'default')
        spyTie.mockReturnValue(false)
        const spyWinner: jest.SpyInstance = jest.spyOn(getWinnerModule, 'default')
        spyWinner.mockReturnValue(false)
        const spyScreen: jest.SpyInstance = jest.spyOn(updateCurrentStatesModule, 'default')
        spyScreen.mockReturnValue(jest.fn())
        document.body.innerHTML = mockCreateBoard(allEmpty)
        playOpponent()
        expect(spyScreen).toBeCalledTimes(1)
        spyPlayer.mockRestore()
        spyTie.mockRestore()
        spyWinner.mockRestore()
        spyScreen.mockRestore()
    })
    
    it('should not execute updateCurrentStates function if getWinner returns true', () => {
        const spyPlayer: jest.SpyInstance = jest.spyOn(getPlayerModule, 'default')
        spyPlayer.mockReturnValue(1)
        const spyTie: jest.SpyInstance = jest.spyOn(getTieModule, 'default')
        spyTie.mockReturnValue(false)
        const spyWinner: jest.SpyInstance = jest.spyOn(getWinnerModule, 'default')
        spyWinner.mockReturnValue(true)
        const spyScreen: jest.SpyInstance = jest.spyOn(updateCurrentStatesModule, 'default')
        spyScreen.mockReturnValue(jest.fn())
        document.body.innerHTML = mockCreateBoard(allEmpty)
        playOpponent()
        expect(spyScreen).toBeCalledTimes(0)
        spyPlayer.mockRestore()
        spyTie.mockRestore()
        spyWinner.mockRestore()
        spyScreen.mockRestore()
    })
    
    it('should not execute updateCurrentStates function if getTie returns true', () => {
        const spyPlayer: jest.SpyInstance = jest.spyOn(getPlayerModule, 'default')
        spyPlayer.mockReturnValue(1)
        const spyTie: jest.SpyInstance = jest.spyOn(getTieModule, 'default')
        spyTie.mockReturnValue(true)
        const spyWinner: jest.SpyInstance = jest.spyOn(getWinnerModule, 'default')
        spyWinner.mockReturnValue(false)
        const spyScreen: jest.SpyInstance = jest.spyOn(updateCurrentStatesModule, 'default')
        spyScreen.mockReturnValue(jest.fn())
        document.body.innerHTML = mockCreateBoard(allEmpty)
        playOpponent()
        expect(spyScreen).toBeCalledTimes(0)
        spyPlayer.mockRestore()
        spyTie.mockRestore()
        spyWinner.mockRestore()
        spyScreen.mockRestore()
    })
    
    it('should throw an error if all cells are full', () => {
        const spyPlayer: jest.SpyInstance = jest.spyOn(getPlayerModule, 'default')
        spyPlayer.mockReturnValue(1)
        const spyTie: jest.SpyInstance = jest.spyOn(getTieModule, 'default')
        spyTie.mockReturnValue(false)
        const spyWinner: jest.SpyInstance = jest.spyOn(getWinnerModule, 'default')
        spyWinner.mockReturnValue(false)
        const spyScreen: jest.SpyInstance = jest.spyOn(updateCurrentStatesModule, 'default')
        spyScreen.mockReturnValue(jest.fn())
        document.body.innerHTML = mockCreateBoard(allFull)
        expect(() => {
            playOpponent()
        }).toThrow('No cells on the current board can be played by the opponent')
        spyPlayer.mockRestore()
        spyTie.mockRestore()
        spyWinner.mockRestore()
        spyScreen.mockRestore()
    })
})
