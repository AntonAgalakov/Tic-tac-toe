const area = document.getElementById('area');
let move = 0;
let result = '';
const contentWrapper = document.getElementById('content');
const modalResult = document.getElementById('modal-result-wrapper');
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
            result = 'tic';
            prepareResult(result);
        } else if (boxes[arr[i][0]].innerHTML == 'o' && boxes[arr[i][1]].innerHTML == 'o' && boxes[arr[i][2]].innerHTML == 'o') {
            result = 'toes';
            prepareResult(result);
        }
    }
}

const prepareResult = winner => {
    contentWrapper.innerHTML = `Won ${winner} !`;
    modalResult.style.display = 'block';
}

const closeModal = () => {
    modalResult.style.display = 'none';
    location.reload();
}

overlay.addEventListener('click', closeModal);
btnClose.addEventListener('click', closeModal);