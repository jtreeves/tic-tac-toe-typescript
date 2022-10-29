import yourTurnMessage from '../data/yourTurnMessage'
import waitTurnMessage from '../data/waitTurnMessage'

function determineMessageContent(
    winner: boolean,
    tie: boolean,
    turnIsPlayer: boolean
): string {
    let message: string = ''

    if (winner) {
        message = `You ${turnIsPlayer ? 'win' : 'lose'}!`
    } else if (tie) {
        message = 'Tie game!'
    } else {
        message = turnIsPlayer ? yourTurnMessage : waitTurnMessage
    }

    return message
}

export default determineMessageContent
