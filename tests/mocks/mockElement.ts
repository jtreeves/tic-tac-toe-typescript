class MockElement extends HTMLElement {
    constructor(
        text: string,
        id: string
    ) {
        super()

        this.textContent = text
        this.id = id
    }
}

customElements.define('mock-element', MockElement)

function mockElement(
    text: string,
    id: string
): MockElement {
    const mockedElement: MockElement = new MockElement(text, id)

    return mockedElement
}

export {
    mockElement
}
