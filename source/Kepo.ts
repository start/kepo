// The currently-pressed key codes from oldest to newest
const _downKeys: number[] = []

export const keysDownFromOldestToNewest =
    _downKeys as ReadonlyArray<number>

export function isKeyDown(key: number): boolean {
    return includes(_downKeys, key)
}

export function areAllKeysDown(...keys: number[]): boolean {
    return keys.every(k => isKeyDown(k))
}

export function newestKeyDown(...keys: number[]): number | undefined {
    return last(
        keys.length
            ? _downKeys.filter(p => includes(keys, p))
            : _downKeys)
}

function last<T>(items: ReadonlyArray<T>): T | undefined {
    return items[items.length - 1]
}

function includes<T>(haystack: ReadonlyArray<T>, needle: T): boolean {
    return haystack.indexOf(needle) >= 0
}

document.addEventListener('keydown', event => {
    if (surrenderedDueToMetaKey(event)) {
        return
    }

    if (!isKeyDown(event.keyCode)) {
        _downKeys.push(event.keyCode)
    }
})


document.addEventListener('keyup', event => {
    if (surrenderedDueToMetaKey(event)) {
        return
    }

    if (isKeyDown(event.keyCode)) {
        _downKeys.splice(_downKeys.indexOf(event.keyCode), 1)
    }
})

window.addEventListener('blur', () => {
    releaseAllKeys()
})

function releaseAllKeys(): void {
    _downKeys.splice(0)
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
    }

    return event.metaKey
}