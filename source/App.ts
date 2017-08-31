import { keysDownFromOldestToNewest, isKeyDown, newestKeyDown, areAllKeysDown } from './Kepo'

function getElementById(id: string): HTMLElement {
    return document.getElementById(id)!
}
document.addEventListener('DOMContentLoaded', () => {
    function frame() {
        getElementById('keysDownFromOldestToNewest').innerHTML =
            keysDownFromOldestToNewest.join(', ')

        getElementById('isKeyDown').innerHTML =
            isKeyDown(32).toString()

        getElementById('newestKeyDown').innerHTML =
            (newestKeyDown(37, 38, 39, 40) || 'None').toString()

        getElementById('areAllKeysDown').innerHTML =
            areAllKeysDown(17, 13).toString()

        window.requestAnimationFrame(frame)
    }

    frame()
})