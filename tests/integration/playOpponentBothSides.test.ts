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
            if (tie) {
                tieGames++
            } else {
                const turn: number = getTurn()
                if (turn === 1) {
                    xWins++
                } else {
                    oWins++
                }
            }
        }
        expect(xWins + oWins + tieGames).toBe(games)
        expect(xWins).not.toBe(0)
        expect(oWins).not.toBe(0)
        expect(tieGames).not.toBe(0)
        expect(xWins / games).toBeGreaterThan(0.2)
        expect(oWins / games).toBeGreaterThan(0.1)
        expect(tieGames / games).toBeGreaterThan(0.4)
        expect(tieGames).toBeGreaterThan(xWins)
        expect(xWins).toBeGreaterThan(oWins)
    })
})
