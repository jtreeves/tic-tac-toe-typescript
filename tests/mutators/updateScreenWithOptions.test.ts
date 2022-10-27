import updateScreenWithOptions from '../../src/mutators/updateScreenWithOptions'

describe('updateScreenWithOptions mutator', () => {
    beforeEach(() => {
        document.body.innerHTML = `
            <p>Some message</p>
            <button>Start</button>
        `
    })

    it('should remove Start button from screen', () => {
        updateScreenWithOptions()
        const body: HTMLElement = document.querySelector('body') as HTMLElement
        body.childNodes.forEach((node: ChildNode) => {
            expect(node.textContent).not.toBe('Start')
        })
    })

    it('should add Play X and Play O buttons to the screen', () => {
        updateScreenWithOptions()
        const buttons: NodeListOf<HTMLElement> = document.querySelectorAll('button')
        const firstButton: HTMLElement = buttons[0]
        const secondButton: HTMLElement = buttons[1]
        expect(firstButton.textContent).toBe('Play X')
        expect(secondButton.textContent).toBe('Play O')
    })

    it('should change message to Which option do you want to play?', () => {
        updateScreenWithOptions()
        const message: HTMLElement = document.querySelector('p') as HTMLElement
        expect(message.textContent).toBe('Which option do you want to play?')
    })

    it('should throw an error if body does not exist', () => {
        const body: HTMLElement = document.querySelector('body') as HTMLElement
        body.remove()
        expect(() => {
            updateScreenWithOptions()
        }).toThrow('No screen')
    })
})
