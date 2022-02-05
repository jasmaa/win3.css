// Adapted from: https://www.w3schools.com/howto/howto_js_draggable.asp
const windowFrame1 = document.getElementById('window-frame-1');
const windowHeader1 = document.getElementById('window-header-1');
const windowFrame2 = document.getElementById('window-frame-2');
const windowHeader2 = document.getElementById('window-header-2');

let zIndex = 9999;

document.body.style.overflow = 'hidden';
windowFrame1.style.left = '2%';
windowFrame1.style.top = '2%';
windowFrame2.style.left = '40%';
windowFrame2.style.top = '20%';

initializeDraggableWindow(windowFrame1, windowHeader1);
initializeDraggableWindow(windowFrame2, windowHeader2);

function initializeDraggableWindow(windowFrame, windowHeader) {
  windowFrame.style.position = 'absolute';
  windowHeader.style.cursor = 'move';

  let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;

  windowHeader.onmousedown = e => {
    if (e.target.nodeName !== 'BUTTON') {
      e.preventDefault();

      pos3 = e.clientX;
      pos4 = e.clientY;
      windowFrame.style.zIndex = `${zIndex}`;
      zIndex++;

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
