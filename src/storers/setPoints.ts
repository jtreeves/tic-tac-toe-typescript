import setValue from './setValue'

function setPoints(
    newPoints: number[]
): void {
    const stringPoints: string = newPoints.join(',')

    setValue('points', stringPoints)
}

export default setPoints
