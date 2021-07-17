const area = document.getElementById('area');
let move = 0;
let result = '';
const contentWrapper = document.getElementById('content');
const resultWindow = document.getElementById('result-wrapper');
const overlay = document.getElementById('overlay');
const btnClose = document.getElementById('btn-close');

area.addEventListener('click', e => {
    if (e.target.className = 'box') {
        if (e.target.innerHTML !== 'x' && e.target.innerHTML !== 'o') {
            move % 2 === 0 ? e.target.innerHTML = 'x' : e.target.innerHTML = 'o';
            move++;
            check();
        }
    }
})

const check = () => {
    const boxes = document.getElementsByClassName('box');
    const arr = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7], 
        [2, 5, 8],
        [0, 4, 8], 
        [2, 4, 6]
    ];

    for (i = 0; i < arr.length; i++) {
        if (boxes[arr[i][0]].innerHTML == 'x' && boxes[arr[i][1]].innerHTML == 'x' && boxes[arr[i][2]].innerHTML == 'x') {
            result = 'Won X';
            prepareResult(result);
            break;
        } else if (boxes[arr[i][0]].innerHTML == 'o' && boxes[arr[i][1]].innerHTML == 'o' && boxes[arr[i][2]].innerHTML == 'o') {
            result = 'Won O';
            prepareResult(result);
            break;
        } else if (move === 9) {
            result = 'Draw';
            prepareResult(result);
        }
    }
}

const prepareResult = winner => {
    contentWrapper.innerHTML = `${winner}!`;
    resultWindow.style.display = 'block';
}

const closeResultWindow = () => {
    resultWindow.style.display = 'none';
    location.reload();
}

overlay.addEventListener('click', closeResultWindow);
btnClose.addEventListener('click', closeResultWindow);