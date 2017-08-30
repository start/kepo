import { pressedKeyCodesFromOldestToNewest, isKeyPressed, mostRecentlyPressedKey, areAllKeysPressed} from './kepo'

function getElementById(id: string): HTMLElement {
    return document.getElementById(id)!
}
document.addEventListener('DOMContentLoaded', () => {
    function frame() {
        getElementById('pressedKeyCodesFromOldestToNewest').innerHTML = pressedKeyCodesFromOldestToNewest.join(', ')
        getElementById('isKeyPressed').innerHTML = isKeyPressed(32).toString()
        getElementById('mostRecentlyPressedKey').innerHTML = (mostRecentlyPressedKey(37, 38, 39, 40) || 'None').toString()
        getElementById('areAllKeysPressed').innerHTML = areAllKeysPressed(17, 13).toString()

        window.requestAnimationFrame(frame)
    }

    frame()
})