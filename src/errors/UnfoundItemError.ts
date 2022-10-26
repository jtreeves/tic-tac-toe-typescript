class UnfoundItemError extends Error {
    name: string
    message: string

    constructor(message: string) {
        super()
        this.name = 'UnfoundItemError'
        this.message = message
    }
}

export default UnfoundItemError
