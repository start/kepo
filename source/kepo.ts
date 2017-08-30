// The currently-pressed key codes from oldest to newest
const pressedKeyCodes: number[] = []

export const pressedKeyCodesFromOldestToNewest =
    pressedKeyCodes as ReadonlyArray<number>

export function isKeyPressed(keyCode: number): boolean {
    return pressedKeyCodes.includes(keyCode)
}

export function areAllKeysPressed(...keyCodes: number[]): boolean {
    return keyCodes.every(k => isKeyPressed(k))
}

export function mostRecentlyPressedKey(...keyCodes: number[]): number | undefined {
    return last(
        keyCodes.length
            ? pressedKeyCodes.filter(p => keyCodes.includes(p))
            : pressedKeyCodes
    )
}

document.addEventListener('keydown', event => {
    if (!isKeyPressed(event.keyCode)) {
        pressedKeyCodes.push(event.keyCode)
    }
})

document.addEventListener('keyup', event => {
    if (isKeyPressed(event.keyCode)) {
        pressedKeyCodes.splice(pressedKeyCodes.indexOf(event.keyCode), 1)
    }
})

function last<T>(items: ReadonlyArray<T>): T | undefined {
    return items[items.length - 1];
}
