import * as getTurnModule from '../../../src/accessors/getTurn'
import * as getPlayerModule from '../../../src/accessors/getPlayer'
import * as getTieModule from '../../../src/accessors/getTie'
import * as getWinnerModule from '../../../src/accessors/getWinner'
import * as determineMessageContentModule from '../../../src/utilities/determineMessageContent'
import updateMessage from '../../../src/mutators/updateMessage'

describe('updateMessage mutator', () => {
    beforeEach(() => {
        document.body.innerHTML = `<p>some message</p>`
    })

    it('should call getTurn once', () => {
        const spy: jest.SpyInstance = jest.spyOn(getTurnModule, 'default')
        updateMessage()
        expect(spy).toBeCalledTimes(1)
        spy.mockRestore()
    })

    it('should call getPlayer once', () => {
        const spy: jest.SpyInstance = jest.spyOn(getPlayerModule, 'default')
        updateMessage()
        expect(spy).toBeCalledTimes(1)
        spy.mockRestore()
    })

    it('should call getTie once', () => {
        const spy: jest.SpyInstance = jest.spyOn(getTieModule, 'default')
        updateMessage()
        expect(spy).toBeCalledTimes(1)
        spy.mockRestore()
    })

    it('should call getWinner once', () => {
        const spy: jest.SpyInstance = jest.spyOn(getWinnerModule, 'default')
        updateMessage()
        expect(spy).toBeCalledTimes(1)
        spy.mockRestore()
    })

    it('should call determineMessageContent once', () => {
        const spy: jest.SpyInstance = jest.spyOn(determineMessageContentModule, 'default')
        updateMessage()
        expect(spy).toBeCalledTimes(1)
        spy.mockRestore()
    })

    it('should change textContent of p tag to value returned by determineMessageContent', () => {
        const text: string = 'updated message'
        const spy: jest.SpyInstance = jest.spyOn(determineMessageContentModule, 'default')
        spy.mockReturnValue(text)
        updateMessage()
        const message: HTMLElement = document.querySelector('p') as HTMLElement
        expect(message.textContent).toBe(text)
        spy.mockRestore()
    })
})
