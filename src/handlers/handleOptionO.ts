import setPlayer from '../storers/setPlayer'
import updateScreenWithGame from '../mutators/updateScreenWithGame'

function handleOptionO(): void {
    setPlayer(-1)
    updateScreenWithGame()
}

export default handleOptionO
