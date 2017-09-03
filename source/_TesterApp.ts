import { keysDownFromOldestToNewest, isKeyDown, newestKeyDown, areAllKeysDown } from './Kepo'

function setHtml(id: string, html: string): void {
    document.getElementById(id)!.innerHTML = html;
}

document.addEventListener('DOMContentLoaded', () => {
    function frame() {
        setHtml('keysDownFromOldestToNewest',
            keysDownFromOldestToNewest.join(', '))

        setHtml('isKeyDown',
            isKeyDown(32).toString())

        setHtml('newestKeyDown',
            (newestKeyDown(37, 38, 39, 40) || 'None').toString())

        setHtml('areAllKeysDown',
            areAllKeysDown(17, 13).toString())

        window.requestAnimationFrame(frame)
    }

    frame()
})
