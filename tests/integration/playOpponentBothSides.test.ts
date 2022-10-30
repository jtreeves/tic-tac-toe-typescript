import getTurn from '../../src/accessors/getTurn'
import getWinner from '../../src/accessors/getWinner'
import getTie from '../../src/accessors/getTie'
import setInitialStates from '../../src/storers/setInitialStates'
import createInitialScreen from '../../src/generators/createInitialScreen'
import updateScreenWithOptions from '../../src/mutators/updateScreenWithOptions'
import updateScreenWithGame from '../../src/mutators/updateScreenWithGame'
import playOpponent from '../../src/utilities/playOpponent'

describe('play opponent both sides integration', () => {
    it('should return proportional number of X wins, O wins, and tie games when AI plays against itself, with tie games largest, O wins smallest, and all non-zero', () => {
        const games: number = 1000
        let xWins: number = 0
        let oWins: number = 0
        let tieGames: number = 0
        for (let i = 0; i < games; i++) {
            document.body.innerHTML = ``
            setInitialStates()
            createInitialScreen()
            updateScreenWithOptions()
            updateScreenWithGame()
            let winner: boolean = getWinner()
            let tie: boolean = getTie()
            while (!winner && !tie) {
                playOpponent(-1)
                playOpponent(1)
                winner = getWinner()
                tie = getTie()
            }
            if (winner) {
                const turn: number = getTurn()
                if (turn === 1) {
                    xWins++
                } else {
                    oWins++
                }
            } else {
                tieGames++
            }
        }
        const xWinsPercent: number = xWins / games
        const oWinsPercent: number = oWins / games
        const tiesPercent: number = tieGames / games
        expect(xWins + oWins + tieGames).toBe(games)
        expect(xWins).not.toBe(0)
        expect(oWins).not.toBe(0)
        expect(tieGames).not.toBe(0)
        expect(xWinsPercent).toBeGreaterThan(0.2)
        expect(oWinsPercent).toBeGreaterThan(0.1)
        expect(tiesPercent).toBeGreaterThan(0.4)
        expect(xWinsPercent).toBeLessThan(0.4)
        expect(oWinsPercent).toBeLessThan(0.3)
        expect(tiesPercent).toBeLessThan(0.6)
        expect(tieGames).toBeGreaterThan(xWins)
        expect(xWins).toBeGreaterThan(oWins)
    })
})
