let btn = document.querySelector('.friend');
let computerButton = document.querySelector('.computer');
let xButton = document.querySelector('.X');
let oButton = document.querySelector('.O');


xButton.classList.add('hidden');
oButton.classList.add('hidden');

btn.addEventListener('click', Shkofriend);
xButton.addEventListener('click', ShkocomputerX);
oButton.addEventListener('click', ShkocomputerO);

function Shkofriend(){
    window.open("https://playwithfriend.netlify.app/");
  
}

function ShkocomputerX() {
    window.open("https://playcomputerxo.netlify.app/");
}

function ShkocomputerO() {
    window.open("https://playcomputero.netlify.app/");
}

computerButton.addEventListener('click', () => {
    xButton.removeAttribute('hidden');
    oButton.removeAttribute('hidden');
  });