import handleTurn from '../../src/handlers/handleTurn'

describe('handleTurn handler', () => {
    beforeEach(() => {
        document.body.innerHTML = `<article id='square-5'></article>`
    })
    
    it('should update textContent of target on event to X when player and turn are both 1', () => {
        localStorage.setItem('player', '1')
        localStorage.setItem('turn', '1')
        const article: HTMLElement = document.querySelector('article') as HTMLElement
        article.addEventListener('click', handleTurn)
        article.click()
        const updatedArticle: HTMLElement = document.querySelector('article') as HTMLElement
        expect(updatedArticle.textContent).toBe('X')
    })
})
