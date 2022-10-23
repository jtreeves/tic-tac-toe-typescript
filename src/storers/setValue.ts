function setValue(
    key: string, 
    value: string
): void {
    localStorage.setItem(key, value)
}

export default setValue
