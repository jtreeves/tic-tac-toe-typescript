import setValue from './setValue'

function setPlayer(
    choice: number
): void {
    const stringPlayer: string = String(choice)
    
    setValue('player', stringPlayer)
}

export default setPlayer
