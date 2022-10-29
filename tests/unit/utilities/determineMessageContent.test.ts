import determineMessageContent from '../../../src/utilities/determineMessageContent'

describe('determineMessageContent utility', () => {
    it('should return string of You win! if winner parameter is true and turnIsPlayer parameter is true', () => {
        const message: string = determineMessageContent(true, false, true)
        expect(message).toBe('You win!')
    })
    
    it('should return string of You lose! if winner parameter is true but turnIsPlayer parameter is false', () => {
        const message: string = determineMessageContent(true, false, false)
        expect(message).toBe('You lose!')
    })
    
    it('should return string of Tie game! if winner parameter is false but tie parameter is true', () => {
        const message: string = determineMessageContent(false, true, false)
        expect(message).toBe('Tie game!')
    })
    
    it('should return string of Your turn! if winner and tie parameters are false but turnIsPlayer parameter is true', () => {
        const message: string = determineMessageContent(false, false, true)
        expect(message).toBe('Your turn!')
    })
    
    it('should return string of Wait your turn... if all parameters are false', () => {
        const message: string = determineMessageContent(false, false, false)
        expect(message).toBe('Wait your turn...')
    })
})
