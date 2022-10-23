import getPoints from '../accessors/getPoints'
import setTie from '../storers/setTie'

function updateTie(): void {
    const points: number[] = getPoints()
    const anyZeroes: boolean = points.includes(0)
    const tie: boolean = !anyZeroes

    setTie(tie)
}

export default updateTie
