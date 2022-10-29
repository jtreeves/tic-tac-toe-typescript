import createInitialScreen from '../../../src/generators/createInitialScreen'

describe('createInitialScreen generator', () => {
    beforeEach(() => {
        document.createElement('body')
    })
    
    it('should append three elements to the body', () => {
        createInitialScreen()
        const body: HTMLElement = document.querySelector('body') as HTMLElement
        expect(body.childNodes.length).toBe(3)
    })
    
    it('should throw an error if body does not exist', () => {
        const body: HTMLElement = document.querySelector('body') as HTMLElement
        body.remove()
        expect(() => {
            createInitialScreen()
        }).toThrow('No screen')
    })
})
