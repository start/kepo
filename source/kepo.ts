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
    if (surrenderedDueToMetaKey(event)) {
        return
    }

    if (!isKeyPressed(event.keyCode)) {
        pressedKeyCodes.push(event.keyCode)
    }
})


document.addEventListener('keyup', event => {
    if (surrenderedDueToMetaKey(event)) {
        return
    }

    if (isKeyPressed(event.keyCode)) {
        pressedKeyCodes.splice(pressedKeyCodes.indexOf(event.keyCode), 1)
    }
})

window.addEventListener('blur', () => {
    releaseAllKeys()
})

function last<T>(items: ReadonlyArray<T>): T | undefined {
    return items[items.length - 1]
}

// We aren't fancy enough to support meta keys (e.g. the
// Windows and Command keys).
//
// On a mac, `keyup` events aren't reliably fired during
// meta key chords. Rather than trying to work around that,
// we'll pout and pretend *nothing* is pressed whenever
// the user presses a meta key.
//
// Note: This Control and Alt keys work fine! This doesn't
// affect them.
function surrenderedDueToMetaKey(event: KeyboardEvent): boolean {
    if (event.metaKey) {
        releaseAllKeys()
        return true
    }

    return false
}

function releaseAllKeys(): void {
    pressedKeyCodes.splice(0)
}
