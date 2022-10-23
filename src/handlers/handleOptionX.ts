import setPlayer from '../storers/setPlayer'
import updateScreenWithGame from '../mutators/updateScreenWithGame'

function handleOptionX(): void {
    setPlayer(1)
    updateScreenWithGame()
}

export default handleOptionX
