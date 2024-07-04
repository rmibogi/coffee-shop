document.querySelector('.nav__burger').addEventListener('click', function() {
    this.classList.toggle('active');
    document.querySelector('.nav__items').classList.toggle('open');
    document.querySelector('html').classList.toggle('unscroll');
})