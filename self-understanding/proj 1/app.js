const aubergine = document.querySelector('.closed');
const peach = document.querySelector('.open');
const sweat = document.querySelector('sweat');

//event listener

aubergine.addEventListener('click', () => {
    if (peach.classList.contains('open')) {
        peach.classList.add('active');
        aubergine.classList.remove('active');
    }
});

peach.addEventListener('click', () => {
    if (aubergine.classList.contains('closed')) {
        aubergine.classList.add('active');
        peach.classList.remove('active');
    }
});    
