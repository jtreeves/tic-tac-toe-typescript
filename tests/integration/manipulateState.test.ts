import getPoints from '../../src/accessors/getPoints'
import getTurn from '../../src/accessors/getTurn'
import getTie from '../../src/accessors/getTie'
import getWinner from '../../src/accessors/getWinner'
import setPlayer from '../../src/storers/setPlayer'
import setPoints from '../../src/storers/setPoints'
import setInitialStates from '../../src/storers/setInitialStates'
import updateCurrentStates from '../../src/mutators/updateCurrentStates'

describe('manipulate state integration', () => {
    it('should set points to an array of 0s, turn to 1, tie to false, and winner to false when execute setInitialStates, which can be verified with each corresponding getter', () => {
        setInitialStates()
        const points: number[] = getPoints()
        const turn: number = getTurn()
        const tie: boolean = getTie()
        const winner: boolean = getWinner()
        expect(points).toStrictEqual(Array(9).fill(0))
        expect(turn).toBe(1)
        expect(tie).toBe(false)
        expect(winner).toBe(false)
    })
    
    it('should change points based on parameters, turn to its opposite, tie after checking, winner after checking, and message based on those results after executing updateCurrentStates', () => {
        document.body.innerHTML = `<p>some message</p>`
        const index: number = 2
        const point: number = 1
        setPlayer(1)
        setInitialStates()
        const initialPoints: number[] = getPoints()
        const initialTurn: number = getTurn()
        const initialTie: boolean = getTie()
        const initialWinner: boolean = getWinner()
        const predictedUpdatedPoints: number[] = [...initialPoints]
        predictedUpdatedPoints[index] = point
        updateCurrentStates(index, point)
        const updatedPoints: number[] = getPoints()
        const updatedTurn: number = getTurn()
        const updatedTie: boolean = getTie()
        const updatedWinner: boolean = getWinner()
        const updatedMessage: HTMLElement = document.querySelector('p') as HTMLElement
        expect(updatedPoints).not.toStrictEqual(initialPoints)
        expect(updatedPoints).toStrictEqual(predictedUpdatedPoints)
        expect(updatedTurn).toBe(initialTurn * -1)
        expect(updatedTie).toBe(initialTie)
        expect(updatedWinner).toBe(initialWinner)
        expect(updatedMessage.textContent).toBe('Wait your turn...')
    })
    
    it('should change winner to true with message of You win! after executing updateCurrentStates if points change would result in player winning', () => {
        document.body.innerHTML = `<p>some message</p>`
        setPlayer(1)
        setInitialStates()
        setPoints([1, 1, 0, -1, -1, 0, 0, 0, 0])
        updateCurrentStates(2, 1)
        const updatedWinner: boolean = getWinner()
        const updatedMessage: HTMLElement = document.querySelector('p') as HTMLElement
        expect(updatedWinner).toBe(true)
        expect(updatedMessage.textContent).toBe('You win!')
    })
    
    it('should change winner to true with message of You lose! after executing updateCurrentStates if points change would result in player losing', () => {
        document.body.innerHTML = `<p>some message</p>`
        setPlayer(-1)
        setInitialStates()
        setPoints([1, 1, 0, -1, -1, 0, 0, 0, 0])
        updateCurrentStates(2, 1)
        const updatedWinner: boolean = getWinner()
        const updatedMessage: HTMLElement = document.querySelector('p') as HTMLElement
        expect(updatedWinner).toBe(true)
        expect(updatedMessage.textContent).toBe('You lose!')
    })
    
    it('should change tie to true with message of Tie game! after executing updateCurrentStates if points change would result in tie', () => {
        document.body.innerHTML = `<p>some message</p>`
        setPlayer(1)
        setInitialStates()
        setPoints([1, 0, -1, -1, -1, 1, 1, 1, -1])
        updateCurrentStates(1, 1)
        const updatedTie: boolean = getTie()
        const updatedMessage: HTMLElement = document.querySelector('p') as HTMLElement
        expect(updatedTie).toBe(true)
        expect(updatedMessage.textContent).toBe('Tie game!')
    })
})
