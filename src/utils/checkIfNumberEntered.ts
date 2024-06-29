export const checkIfNumberEntered = (key: string) => {
    return !/[0-9]/.test(key)
        && key !== 'Backspace'
        && key !== 'Tab'
        && key !== 'Enter'
        && key !== 'ArrowLeft'
        && key !== 'ArrowRight'
}
