import { pressedKeyCodesFromOldestToNewest } from './kepo'

document.addEventListener('DOMContentLoaded', () => {
    const outputContainer = document.getElementById('pressed-keys')!

    function frame() {
        outputContainer.innerHTML = pressedKeyCodesFromOldestToNewest.join(', ')
        
        window.requestAnimationFrame(frame)
    }

    frame()
})