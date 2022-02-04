// Adapted from: https://www.w3schools.com/howto/howto_js_draggable.asp
const windowFrame = document.getElementById('window-frame')
const windowHeader = document.getElementById('window-header');

document.body.style.overflow = 'hidden';
windowFrame.style.top = '8em';

initializeDraggableWindow(windowFrame, windowHeader);

function initializeDraggableWindow(windowFrame, windowHeader) {
  windowFrame.style.position = 'absolute';
  windowHeader.style.cursor = 'move';

  let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;

  windowHeader.onmousedown = e => {
    if (e.target.nodeName !== 'BUTTON') {
      e.preventDefault();

      pos3 = e.clientX;
      pos4 = e.clientY;

      document.onmousemove = e => {
        e.preventDefault();
        // get mouse position
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        // set the element's new position:
        windowFrame.style.top = (windowFrame.offsetTop - pos2) + "px";
        windowFrame.style.left = (windowFrame.offsetLeft - pos1) + "px";
      }

      document.onmouseup = () => {
        document.onmouseup = null;
        document.onmousemove = null;
      }
    }
  }
}
