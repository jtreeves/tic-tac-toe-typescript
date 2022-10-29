import waitTurnMessage from '../../../src/data/waitTurnMessage'

describe('waitTurnMessage data', () => {
    it('should return a string', () => {
        expect(typeof waitTurnMessage).toBe('string')
    })
    
    it('should return message beginning with Wait', () => {
        expect(waitTurnMessage).toContain('Wait')
    })
})
