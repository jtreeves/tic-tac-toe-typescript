function checkIfTie(
    points: number[]
): boolean {
    const anyZeroes: boolean = points.includes(0)
    const tie: boolean = !anyZeroes

    return tie
}

export default checkIfTie
