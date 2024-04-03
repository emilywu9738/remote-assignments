const h1 = document.querySelector('h1');
const button = document.querySelector('button');
const readMore = document.querySelector('.readMore');

h1.addEventListener('click', () => {
    h1.textContent = '潛安！祝每一潛高清無流無浪無水母！'
    h1.style.color = 'white';
});

button.addEventListener('click', () => {
    readMore.style.display = 'flex';
});