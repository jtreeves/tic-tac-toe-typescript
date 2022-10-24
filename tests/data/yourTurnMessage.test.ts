import yourTurnMessage from '../../src/data/yourTurnMessage'

describe('yourTurnMessage data', () => {
    it('should return a string', () => {
        expect(typeof yourTurnMessage).toBe('string')
    })
    
    it('should return message beginning with Your', () => {
        expect(yourTurnMessage).toContain('Your')
    })
})
