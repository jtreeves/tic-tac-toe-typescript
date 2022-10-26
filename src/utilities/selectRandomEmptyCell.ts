function selectRandomEmptyCell(): HTMLElement | null {
    const cells: NodeListOf<HTMLElement> = document.querySelectorAll('article')
    const emptyCells: HTMLElement[] = []
    
    cells.forEach((
        cell: HTMLElement
    ): void => {
        if (cell.textContent === '') {
            emptyCells.push(cell)
        }
    })

    const amount: number = emptyCells.length

    if (amount > 0) {
        const randomIndex: number = Math.floor(Math.random() * amount)
        const randomCell: HTMLElement = emptyCells[randomIndex]
    
        return randomCell
    } else {
        return null
    }
}

export default selectRandomEmptyCell
