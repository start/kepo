import { pressedKeyCodesFromOldestToNewest, isKeyPressed, mostRecentlyPressedKey } from './kepo'

document.addEventListener('DOMContentLoaded', () => {
    const pressedKeysContainer = document.getElementById('pressed-keys')!
    const isSpacebarPressedContainer = document.getElementById('is-spacebar-pressed')!
    const arrowRecencyContainer = document.getElementById('arrow-recency')!

    function frame() {
        pressedKeysContainer.innerHTML = pressedKeyCodesFromOldestToNewest.join(', ')
        isSpacebarPressedContainer.innerHTML = isKeyPressed(32).toString()
        arrowRecencyContainer.innerHTML = (mostRecentlyPressedKey(37, 38, 39, 40) || 'None').toString()

        window.requestAnimationFrame(frame)
    }

    frame()
})