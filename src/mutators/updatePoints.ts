import getPoints from '../accessors/getPoints'
import setPoints from '../storers/setPoints'

function updatePoints(
    index: number, 
    point: number
): void {
    const points: number[] = getPoints()
    
    points[index] = point

    setPoints(points)
}

export default updatePoints
