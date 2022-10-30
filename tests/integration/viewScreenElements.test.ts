import setInitialStates from '../../src/storers/setInitialStates'
import setPlayer from '../../src/storers/setPlayer'
import createInitialScreen from '../../src/generators/createInitialScreen'
import updateScreenWithOptions from '../../src/mutators/updateScreenWithOptions'
import updateScreenWithGame from '../../src/mutators/updateScreenWithGame'

describe('view screen elements integration', () => {
    it('should display title, message, and start button with appropriate texts after executing createInitialScreen', () => {
        document.body.innerHTML = ``
        createInitialScreen()
        const title: HTMLElement | null = document.querySelector('h1')
        const message: HTMLElement | null = document.querySelector('p')
        const button: HTMLElement | null = document.querySelector('button')
        expect(title).not.toBe(null)
        expect(message).not.toBe(null)
        expect(button).not.toBe(null)
        expect(title?.textContent).toBe('Tic-Tac-Toe')
        expect(message?.textContent).toBe('Would you like to play a game?')
        expect(button?.textContent).toBe('Start')
    })
    
    it('should change message to concern options and add options buttons after executing updateScreenWithOptions', () => {
        document.body.innerHTML = ``
        createInitialScreen()
        updateScreenWithOptions()
        const message: HTMLElement | null = document.querySelector('p')
        const buttons: NodeListOf<HTMLElement> = document.querySelectorAll('button')
        expect(message?.textContent).toBe('Which option do you want to play?')
        expect(buttons[0].textContent).toBe('Play X')
        expect(buttons[1].textContent).toBe('Play O')
    })
    
    it('should add board with 9 empty children with ids from square-0 to square-8 after executing updateScreenWithGame', () => {
        document.body.innerHTML = ``
        createInitialScreen()
        updateScreenWithOptions()
        setInitialStates()
        setPlayer(1)
        updateScreenWithGame()
        const board: HTMLElement | null = document.querySelector('section')
        const children: NodeListOf<ChildNode> | undefined = board?.childNodes
        expect(board).not.toBe(null)
        expect(children).not.toBe(undefined)
        expect(children?.length).toBe(9)
        const ids: string[] = []
        const texts: string[] = []
        children?.forEach((child: ChildNode) => {
            const coercedChild: HTMLElement = child as HTMLElement
            const id: string = coercedChild.id
            const text: string = String(coercedChild.textContent)
            ids.push(id)
            texts.push(text)
        })
        const allEmpty: boolean = texts.every((text: string) => {
            return text === ''
        })
        expect(ids[0]).toBe('square-0')
        expect(ids.slice(-1)[0]).toBe('square-8')
        expect(allEmpty).toBe(true)
    })
    
    it('should add reminder and update the message after executing updateScreenWithGame, with X and Your turn! if player set to 1', () => {
        document.body.innerHTML = ``
        createInitialScreen()
        updateScreenWithOptions()
        setInitialStates()
        setPlayer(1)
        updateScreenWithGame()
        const reminder: HTMLElement | null = document.querySelector('h2')
        const message: HTMLElement | null = document.querySelector('p')
        expect(reminder).not.toBe(null)
        expect(reminder?.textContent).toBe('You are playing X')
        expect(message?.textContent).toBe('Your turn!')
    })
    
    it('should add reminder and update the message after executing updateScreenWithGame, with O and Wait your turn... if player set to -1', () => {
        document.body.innerHTML = ``
        createInitialScreen()
        updateScreenWithOptions()
        setInitialStates()
        setPlayer(-1)
        updateScreenWithGame()
        const reminder: HTMLElement | null = document.querySelector('h2')
        const message: HTMLElement | null = document.querySelector('p')
        expect(reminder).not.toBe(null)
        expect(reminder?.textContent).toBe('You are playing O')
        expect(message?.textContent).toBe('Wait your turn...')
    })
    
    it('should add reset button to screen after executing updateScreenWithGame', () => {
        document.body.innerHTML = ``
        createInitialScreen()
        updateScreenWithOptions()
        setInitialStates()
        setPlayer(-1)
        updateScreenWithGame()
        const button: HTMLElement | null = document.querySelector('button')
        expect(button).not.toBe(null)
        expect(button?.textContent).toBe('Reset')
    })
})
