function extractIndexFromId(
    id: string
): number {
    const lastCharacter: string = id.slice(-1)
    const index: number = Number(lastCharacter)

    return index
}

export default extractIndexFromId
