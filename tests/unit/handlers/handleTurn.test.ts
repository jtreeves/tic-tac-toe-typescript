import { mockElement } from '../../mocks/mockElement'
import { mockEvent } from '../../mocks/mockEvent'
import { mockTarget } from '../../mocks/mockTarget'
import * as getPlayerModule from '../../../src/accessors/getPlayer'
import * as getTurnModule from '../../../src/accessors/getTurn'
import * as updateCurrentStatesModule from '../../../src/mutators/updateCurrentStates'
import * as playOpponentModule from '../../../src/utilities/playOpponent'
import handleTurn from '../../../src/handlers/handleTurn'

describe('handleTurn handler', () => {
    beforeEach(() => {
        document.body.innerHTML = `<p>Some message</p><article id='square-5'></article>`
    })

    it('should update textContent of target on event to X when getPlayer and getTurn both return 1', () => {
        const spyPlayer: jest.SpyInstance = jest.spyOn(getPlayerModule, 'default')
        spyPlayer.mockReturnValue(1)
        const spyTurn: jest.SpyInstance = jest.spyOn(getTurnModule, 'default')
        spyTurn.mockReturnValue(1)
        const body: HTMLElement = document.querySelector('body') as HTMLElement
        const id: string = 'square-3'
        const mockedElement: HTMLElement = mockElement('', id)
        const mockedEvent: Event = mockEvent(mockedElement)
        body.append(mockedElement)
        handleTurn(mockedEvent)
        const cell: HTMLElement = document.getElementById(id) as HTMLElement
        expect(cell.textContent).toBe('X')
        spyPlayer.mockRestore()
        spyTurn.mockRestore()
    })

    it('should update textContent of target on event to O when getPlayer and getTurn both return -1', () => {
        const spyPlayer: jest.SpyInstance = jest.spyOn(getPlayerModule, 'default')
        spyPlayer.mockReturnValue(-1)
        const spyTurn: jest.SpyInstance = jest.spyOn(getTurnModule, 'default')
        spyTurn.mockReturnValue(-1)
        const body: HTMLElement = document.querySelector('body') as HTMLElement
        const id: string = 'square-3'
        const mockedElement: HTMLElement = mockElement('', id)
        const mockedEvent: Event = mockEvent(mockedElement)
        body.append(mockedElement)
        handleTurn(mockedEvent)
        const cell: HTMLElement = document.getElementById(id) as HTMLElement
        expect(cell.textContent).toBe('O')
        spyPlayer.mockRestore()
        spyTurn.mockRestore()
    })

    it('should call updateCurrentStates once if textContent is empty and getPlayer and getTurn return identical values', () => {
        const textContent: string = ''
        const value: number = 1
        const spy: jest.SpyInstance = jest.spyOn(updateCurrentStatesModule, 'default')
        spy.mockReturnValue(jest.fn())
        const spyPlayer: jest.SpyInstance = jest.spyOn(getPlayerModule, 'default')
        spyPlayer.mockReturnValue(value)
        const spyTurn: jest.SpyInstance = jest.spyOn(getTurnModule, 'default')
        spyTurn.mockReturnValue(value)
        const mockedElement: HTMLElement = mockElement(textContent, 'square-3')
        const mockedEvent: Event = mockEvent(mockedElement)
        handleTurn(mockedEvent)
        expect(spy).toBeCalledTimes(1)
        spy.mockRestore()
        spyPlayer.mockRestore()
        spyTurn.mockRestore()
    })

    it('should call playOpponent if textContent is empty and getPlayer and getTurn return identical values', async () => {
        const textContent: string = ''
        const value: number = 1
        const spy: jest.SpyInstance = jest.spyOn(playOpponentModule, 'default')
        spy.mockReturnValue(jest.fn())
        const spyPlayer: jest.SpyInstance = jest.spyOn(getPlayerModule, 'default')
        spyPlayer.mockReturnValue(value)
        const spyTurn: jest.SpyInstance = jest.spyOn(getTurnModule, 'default')
        spyTurn.mockReturnValue(value)
        const mockedElement: HTMLElement = mockElement(textContent, 'square-3')
        const mockedEvent: Event = mockEvent(mockedElement)
        handleTurn(mockedEvent)
        await new Promise((r) => setTimeout(r, 1000))
        expect(spy).toBeCalled()
        spy.mockRestore()
        spyPlayer.mockRestore()
        spyTurn.mockRestore()
    })

    it('should not call updateCurrentStates if textContent is not empty', () => {
        const textContent: string = 'O'
        const spy: jest.SpyInstance = jest.spyOn(updateCurrentStatesModule, 'default')
        spy.mockReturnValue(jest.fn())
        const spyPlayer: jest.SpyInstance = jest.spyOn(getPlayerModule, 'default')
        spyPlayer.mockReturnValue(1)
        const spyTurn: jest.SpyInstance = jest.spyOn(getTurnModule, 'default')
        spyTurn.mockReturnValue(1)
        const mockedElement: HTMLElement = mockElement(textContent, 'square-3')
        const mockedEvent: Event = mockEvent(mockedElement)
        handleTurn(mockedEvent)
        expect(spy).toBeCalledTimes(0)
        spy.mockRestore()
        spyPlayer.mockRestore()
        spyTurn.mockRestore()
    })

    it('should not call updateCurrentStates if getPlayer and getTurn return different values', () => {
        const textContent: string = ''
        const spy: jest.SpyInstance = jest.spyOn(updateCurrentStatesModule, 'default')
        spy.mockReturnValue(jest.fn())
        const spyPlayer: jest.SpyInstance = jest.spyOn(getPlayerModule, 'default')
        spyPlayer.mockReturnValue(1)
        const spyTurn: jest.SpyInstance = jest.spyOn(getTurnModule, 'default')
        spyTurn.mockReturnValue(-1)
        const mockedElement: HTMLElement = mockElement(textContent, 'square-3')
        const mockedEvent: Event = mockEvent(mockedElement)
        handleTurn(mockedEvent)
        expect(spy).toBeCalledTimes(0)
        spy.mockRestore()
        spyPlayer.mockRestore()
        spyTurn.mockRestore()
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
})
