const header = document.querySelector('header');

window.addEventListener('scroll', function () {
    header.classList.toggle('sticky', window.scrollY > 0);
});

let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
}

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('open');
}

const modal = document.querySelector('.modal');
const loginBtn = document.querySelector('.login-btn');
const closeBtn = document.querySelector('.close');

loginBtn.addEventListener('click', openModal)
closeBtn.addEventListener('click', closeModal)
window.addEventListener('click', outsideClick)

function openModal() {
    modal.style.display = 'block'
}
function closeModal() {
    modal.style.display = 'none'
}

function outsideClick(e) {
    if (e.target == modal) {
        closeModal()
    }

}

const sr = ScrollReveal ({
	distance: '60px',
	duration: 2500,
	reset: true
});

sr.reveal('.home-text',{delay:200, origin:'left'});
sr.reveal('.home-img',{delay:200, origin:'right'});

sr.reveal('.container, .about, .menu, .contact',{delay:200, origin:'bottom'});