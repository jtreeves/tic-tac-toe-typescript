function findCellByIndex(
    index: number
): HTMLElement | null {
    const id: string = 'square-' + index
    const cell: HTMLElement | null = document.getElementById(id)

    return cell
}

export default findCellByIndex
