let mockStorage: any

const mockSetItem = jest.fn((
    key: string, 
    value: string
): void => { 
    mockStorage[key] = String(value) 
})

const mockGetItem = jest.fn((
    key: string
): string => { 
    return mockStorage[key] 
})

Object.defineProperty(localStorage, 'setItem', {
    value: mockSetItem
})

Object.defineProperty(localStorage, 'getItem', {
    value: mockGetItem
})
