function mockEvent(
    target: EventTarget | null
): Event {
    const mockedEvent: Event = {
        ...new Event('click'),
        target: target,
    }

    return mockedEvent
}

export {
    mockEvent
}
