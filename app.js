const modal = document.querySelector('.modal');
const spiderman = document.querySelector('#spiderman');
const robin = document.querySelector('#robin');
const batman = document.querySelector('#batman');
const closebtn = document.querySelector('.modal__content--close');

spiderman.addEventListener('click', () => {
    modal.classList.remove('hidden');
    modal.classList.add('visible');
});

robin.addEventListener('click', () => {
    modal.classList.remove('hidden');
    modal.classList.add('visible');
});

batman.addEventListener('click', () => {
    modal.classList.remove('hidden');
    modal.classList.add('visible');
});

closebtn.addEventListener('click', () => {
    console.log('Here');
    modal.classList.add('hidden');
    modal.classList.remove('visible');
});