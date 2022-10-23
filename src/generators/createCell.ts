import handleTurn from '../handlers/handleTurn'

function createCell(id: string): HTMLElement {
    const article: HTMLElement = document.createElement('article')

    article.id = id
    article.addEventListener('click', handleTurn)

    return article
}

export default createCell
