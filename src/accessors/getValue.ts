function getValue(
    key: string
): string {
    const storedValue: string = String(localStorage.getItem(key))

    return storedValue
}

export default getValue
