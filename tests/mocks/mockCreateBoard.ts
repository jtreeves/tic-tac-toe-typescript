function mockCreateBoard(points: number[]): string {
    const arrayOfArticles: string[] = points.map((
        point: number,
        index: number
    ): string => {
        const id: string = 'square-' + index
        const text: string = point === 1 ? 'X' : point === -1 ? 'O' : ''
        const article: string = `<article id='${id}'>${text}</article>`

        return article
    })
    const stringOfArticles: string = arrayOfArticles.join('')
    const openSection: string = '<section>'
    const closeSection: string = '</section>'

    return openSection + stringOfArticles + closeSection
}

export { 
    mockCreateBoard 
}
