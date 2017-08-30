import { pressedKeyCodesFromOldestToNewest, isKeyPressed } from './kepo'

document.addEventListener('DOMContentLoaded', () => {
    const pressedKeysContainer = document.getElementById('pressed-keys')!
    const isSpacebarPressedContainer = document.getElementById('is-spacebar-pressed')!

    function frame() {
        pressedKeysContainer.innerHTML = pressedKeyCodesFromOldestToNewest.join(', ')
        isSpacebarPressedContainer.innerHTML = isKeyPressed(32).toString()
        window.requestAnimationFrame(frame)
    }

    frame()
})