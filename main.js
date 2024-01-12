const navMenu = document.getElementById('nav-menu');
navToggle= document.getElementById('nav-toggle');
navClose = document.getElementById('nav-close');

if(navToggle){
    navToggle.addEventListener('click',()=>{
        navMenu.classList.add('show-menu');
    })
}

if(navClose){
    navClose.addEventListener('click',()=>{
        navMenu.classList.remove('show-menu');
    })
}

const navLink = document.querySelectorAll('.nav__link');

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu');

    navMenu.classList.remove('show-menu');
}

navLink.forEach(n=>n.addEventListener('click',linkAction));

const scrollHeader= ()=>{
    const Header = document.getElementById('header');

    this.scrollY >= 50 ? Header.classList.add('scroll-header') : 
    Header.classList.remove('scroll-header');
}

window.addEventListener('scroll',scrollHeader);

const scrollUp = ()=>{
    const scrollUp = document.getElementById('scroll-up');
    this.scrollY>=350 ? scrollUp.classList.add('show-scroll') : 
    scrollUp.classList.remove('show-scroll');
}

window.addEventListener('scroll',scrollUp);

const section = document.querySelectorAll('section[id]');

const scrollActive = ()=>{
    const scrollDown = window.scrollY;

    section.forEach(current => {
        const sectionHeight = current.offsetHeight,
        sectionTop = current.offsetTop - 58,
        sectionId = current.getAttribute('id'),
        sectionsClass= document.querySelector('.nav__menu a[href*=' + sectionId + ']')

        if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
            sectionsClass.classList.add('active-link');
        }else{
            sectionsClass.classList.remove('active-link');
        }
    })
}

window.addEventListener('scroll',scrollActive);