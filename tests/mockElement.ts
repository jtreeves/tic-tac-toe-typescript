function mockElement(
    text: string,
    id: string
): HTMLElement {
    const mockedElement: HTMLElement = {
        ...new HTMLElement(),
        textContent: text,
        id: id,
    }

    return mockedElement
}

export {
    mockElement
}
