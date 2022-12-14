const allEmpty: number[] = [0, 0, 0, 0, 0, 0, 0, 0, 0]
const nearlyFull: number[] = [1, 0, 1, 0, -1, 0, 0, 0, 0]
const allFull: number[] = [1, -1, 1, -1, -1, 1, 1, -1, 1]
const tieGame: number[] = [1, 1, -1, -1, -1, 1, 1, 1, -1]
const oneMissing: number[] = [1, 0, -1, -1, -1, 1, 1, 1, -1]
const xAlmostWins: number[] = [-1, 0, 0, 1, 0, 1, 0, 0, 0]
const oAlmostWins: number[] = [1, 0, 0, -1, 0, -1, 0, 1, 1]

export {
    allEmpty,
    nearlyFull,
    allFull,
    tieGame,
    oneMissing,
    xAlmostWins,
    oAlmostWins
}
