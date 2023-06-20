var _a;
var bike = document.querySelector('main > div');
var degElement = document.querySelector('#deg');
var l = document.querySelector('#l');
var r = document.querySelector('#r');
var u = document.querySelector('#u');
var d = document.querySelector('#d');
var bounding = (_a = document.querySelector('main')) === null || _a === void 0 ? void 0 : _a.getBoundingClientRect();
var currentLeft = getComputedStyle(document.documentElement).getPropertyValue('--left-start');
var currentTop = getComputedStyle(document.documentElement).getPropertyValue('--top-start');
var rotateStart = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--rotate-start'));
degElement.innerText = rotateStart.toString();
function convertKeyToDirection(key) {
    switch (key) {
        case 'w':
        case 'ArrowUp':
            return 'u';
        case 'a':
        case 'ArrowLeft':
            return 'l';
        case 'd':
        case 'ArrowRight':
            return 'r';
        case 's':
        case 'ArrowDown':
            return 'd';
        default:
            return '';
    }
}
function moveBike(e) {
    var target = e.target;
    bike = document.querySelector('main > div');
    var direction = target.id.length
        ? target.id
        : convertKeyToDirection(e.key);
    currentLeft = getComputedStyle(document.documentElement).getPropertyValue('--left-start');
    currentTop = getComputedStyle(document.documentElement).getPropertyValue('--top-start');
    rotateStart = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--rotate-start'));
    console.log({ currentLeft: currentLeft, currentTop: currentTop, rotateStart: rotateStart });
    if (direction === '')
        return;
    if (direction === 'd') {
        if (rotateStart === 0) {
            document.documentElement.style.setProperty('--rotate-start', "180deg");
        }
        else if (rotateStart === 90) {
            document.documentElement.style.setProperty('--rotate-start', "270deg");
        }
        else if (rotateStart === 180) {
            document.documentElement.style.setProperty('--rotate-start', "0deg");
        }
        else if (rotateStart === 270) {
            document.documentElement.style.setProperty('--rotate-start', "90deg");
        }
        else {
            document.documentElement.style.setProperty('--rotate-start', "0deg");
        }
    }
    if (direction === 'u') {
        if (rotateStart === 0) {
            if (parseInt(currentTop) <= 1)
                return;
            document.documentElement.style.setProperty('--top-start', "".concat(parseFloat(currentTop) - 2, "em"));
        }
        if (rotateStart === 90) {
            if (parseInt(currentLeft) >= 17)
                return;
            document.documentElement.style.setProperty('--left-start', "".concat(parseFloat(currentLeft) + 2, "em"));
        }
        if (rotateStart === 180) {
            if (parseInt(currentTop) >= 17)
                return;
            document.documentElement.style.setProperty('--top-start', "".concat(parseFloat(currentTop) + 2, "em"));
        }
        if (rotateStart === 270) {
            if (parseInt(currentLeft) <= 1)
                return;
            document.documentElement.style.setProperty('--left-start', "".concat(parseFloat(currentLeft) - 2, "em"));
        }
    }
    if (direction === 'r') {
        if (rotateStart === 0) {
            document.documentElement.style.setProperty('--rotate-start', "".concat(rotateStart + 90, "deg"));
            degElement.textContent = String(rotateStart + 90);
            rotateStart = rotateStart + 90;
        }
        else if (rotateStart === 90) {
            document.documentElement.style.setProperty('--rotate-start', "".concat(rotateStart + 90, "deg"));
            degElement.textContent = String(rotateStart + 90);
            rotateStart = rotateStart + 90;
        }
        else if (rotateStart === 180) {
            document.documentElement.style.setProperty('--rotate-start', "".concat(rotateStart + 90, "deg"));
            degElement.textContent = String(rotateStart + 90);
            rotateStart = rotateStart + 90;
        }
        else if (rotateStart === 270) {
            document.documentElement.style.setProperty('--rotate-start', "".concat(0, "deg"));
            degElement.textContent = String(0);
            rotateStart = 0;
        }
    }
    if (direction === 'l') {
        if (rotateStart === 0) {
            document.documentElement.style.setProperty('--rotate-start', "".concat(270, "deg"));
            degElement.textContent = String(270);
            rotateStart = 270;
        }
        else if (rotateStart === 90) {
            document.documentElement.style.setProperty('--rotate-start', "".concat(0, "deg"));
            degElement.textContent = String(0);
            rotateStart = 0;
        }
        else if (rotateStart === 180) {
            document.documentElement.style.setProperty('--rotate-start', "".concat(90, "deg"));
            degElement.textContent = String(90);
            rotateStart = 90;
        }
        else if (rotateStart === 270) {
            document.documentElement.style.setProperty('--rotate-start', "".concat(180, "deg"));
            degElement.textContent = String(180);
            rotateStart = 180;
        }
    }
}
r.addEventListener('click', moveBike);
l.addEventListener('click', moveBike);
u.addEventListener('click', moveBike);
document.addEventListener('keydown', moveBike);
