import handleTurn from '../../src/handlers/handleTurn'
import { mockElement } from '../mocks/mockElement'
import { mockEvent } from '../mocks/mockEvent'
import { mockTarget } from '../mocks/mockTarget'

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
    
    it('should throw an error if event lacks target', () => {
        const mockedEvent: Event = new Event('click')
        expect(() => {
            handleTurn(mockedEvent)
        }).toThrow('No target found, or target not of proper type')
    })
    
    it('should throw an error if event target is null', () => {
        const mockedEvent: Event = mockEvent(null)
        expect(() => {
            handleTurn(mockedEvent)
        }).toThrow('No target found, or target not of proper type')
    })
    
    it('should throw an error if event target is not an HTMLElement', () => {
        const mockedTarget: EventTarget = mockTarget()
        const mockedEvent: Event = mockEvent(mockedTarget)
        expect(() => {
            handleTurn(mockedEvent)
        }).toThrow('No target found, or target not of proper type')
    })

    it('should update textContent of target on event to X when player and turn are both 1, using mocked event', () => {
        localStorage.setItem('player', '1')
        localStorage.setItem('turn', '1')
        const body: HTMLElement = document.querySelector('body') as HTMLElement
        const id: string = 'square-3'
        const mockedElement: HTMLElement = mockElement('', id)
        const mockedEvent: Event = mockEvent(mockedElement)
        body.append(mockedElement)
        handleTurn(mockedEvent)
        const cell: HTMLElement = document.getElementById(id) as HTMLElement
        expect(cell.textContent).toBe('X')
    })

    it('should update textContent of target on event to O when player and turn are both -1, using mocked event', () => {
        localStorage.setItem('player', '-1')
        localStorage.setItem('turn', '-1')
        const body: HTMLElement = document.querySelector('body') as HTMLElement
        const id: string = 'square-3'
        const mockedElement: HTMLElement = mockElement('', id)
        const mockedEvent: Event = mockEvent(mockedElement)
        body.append(mockedElement)
        handleTurn(mockedEvent)
        const cell: HTMLElement = document.getElementById(id) as HTMLElement
        expect(cell.textContent).toBe('O')
    })
})
