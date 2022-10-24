function mockCreateBoard(points: string): string {
    const arrayOfPoints: string[] = points.split(',')
    const arrayOfArticles: string[] = arrayOfPoints.map((
        point: string,
        index: number
    ): string => {
        const id: string = 'square-' + index
        const text: string = point === '1' ? 'X' : point === '-1' ? 'O' : ''
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
