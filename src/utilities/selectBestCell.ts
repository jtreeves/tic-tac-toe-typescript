import findEmptyIndexInNearlyFullCombo from './findEmptyIndexInNearlyFullCombo'
import findCellByIndex from './findCellByIndex'
import selectRandomEmptyCell from './selectRandomEmptyCell'

function selectBestCell(
    opponent: number
): HTMLElement {
    const xEmpty: number = findEmptyIndexInNearlyFullCombo(1)
    const oEmpty: number = findEmptyIndexInNearlyFullCombo(-1)

    let winningIndex: number = 0
    let blockingIndex: number = 0
    let bestCell: HTMLElement = new HTMLElement()

    if (opponent === 1) {
        winningIndex = xEmpty
        blockingIndex = oEmpty
    } else {
        winningIndex = oEmpty
        blockingIndex = xEmpty
    }

    if (winningIndex !== -1) {
        bestCell = findCellByIndex(winningIndex)
    } else if (blockingIndex !== -1) {
        bestCell = findCellByIndex(blockingIndex)
    } else {
        bestCell = selectRandomEmptyCell()
    }

    return bestCell
}

export default selectBestCell
