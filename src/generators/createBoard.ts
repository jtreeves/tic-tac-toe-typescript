import getPoints from '../accessors/getPoints'
import createCell from './createCell'

function createBoard(): HTMLElement {
    const section: HTMLElement = document.createElement('section')
    const points: number[] = getPoints()

    points.forEach((
        _: number, 
        index: number
    ) => {
        const id: string = 'square-' + index
        const cell: HTMLElement = createCell(id)

        section.appendChild(cell)
    })

    return section
}

export default createBoard
