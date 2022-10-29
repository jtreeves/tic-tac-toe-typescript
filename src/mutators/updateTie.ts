import getPoints from '../accessors/getPoints'
import setTie from '../storers/setTie'
import checkIfTie from '../utilities/checkIfTie'

function updateTie(): void {
    const points: number[] = getPoints()
    const tie: boolean = checkIfTie(points)

    setTie(tie)
}

export default updateTie
