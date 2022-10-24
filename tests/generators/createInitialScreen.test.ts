import createInitialScreen from '../../src/generators/createInitialScreen'

describe('createInitialScreen generator', () => {
    document.createElement('body')
    createInitialScreen()
    
    it('should append three elements to the body', () => {
        const body: HTMLElement = document.querySelector('body') as HTMLElement
        expect(body.childNodes.length).toBe(3)
    })
})
