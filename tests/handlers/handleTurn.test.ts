import handleTurn from '../../src/handlers/handleTurn'

describe('handleTurn handler', () => {
    beforeEach(() => {
        document.body.innerHTML = `<p>Some message</p><article id='square-5'></article>`
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
    
    it('should update textContent of target on event to O when player and turn are both -1', () => {
        localStorage.setItem('player', '-1')
        localStorage.setItem('turn', '-1')
        const article: HTMLElement = document.querySelector('article') as HTMLElement
        article.addEventListener('click', handleTurn)
        article.click()
        const updatedArticle: HTMLElement = document.querySelector('article') as HTMLElement
        expect(updatedArticle.textContent).toBe('O')
    })
    
    it('should not update textContent of target on event when player and turn are not equal', () => {
        localStorage.setItem('player', '1')
        localStorage.setItem('turn', '-1')
        const article: HTMLElement = document.querySelector('article') as HTMLElement
        const articleContent: string | null = article.textContent
        article.addEventListener('click', handleTurn)
        article.click()
        const updatedArticle: HTMLElement = document.querySelector('article') as HTMLElement
        const updatedArticleContent: string | null = updatedArticle.textContent
        expect(articleContent).toBe(updatedArticleContent)
    })
    
    it('should not update textContent of target on event when content already exists', () => {
        localStorage.setItem('player', '1')
        localStorage.setItem('turn', '1')
        document.body.innerHTML = `<article id='square-5'>O</article>`
        const article: HTMLElement = document.querySelector('article') as HTMLElement
        const articleContent: string | null = article.textContent
        article.addEventListener('click', handleTurn)
        article.click()
        const updatedArticle: HTMLElement = document.querySelector('article') as HTMLElement
        const updatedArticleContent: string | null = updatedArticle.textContent
        expect(articleContent).toBe(updatedArticleContent)
    })
})
