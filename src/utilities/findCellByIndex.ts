function findCellByIndex(
    index: number
): HTMLElement {
    const id: string = 'square-' + index
    const cell: HTMLElement = document.getElementById(id) as HTMLElement

    return cell
}

export default findCellByIndex
