// ==============
// PRELOADER 
// ==============
document.body.style.overflow = 'hidden';

window.addEventListener('load', () => {
  const loadingPage = document.querySelector('.loading-page');
  loadingPage.classList.add('finish-loading');
  homeAnimation();
  document.body.style.overflow = 'visible';
});

// ==============
// DETECT IF DEVICE IS A TOUCH SCREEN DEVICE
// ==============

if ("ontouchstart" in document.documentElement)
{
  document.querySelector('.cursor').style.visibility = 'hidden';
  document.querySelector('.cursor-2').style.visibility = 'hidden';
} 
else
{
  document.querySelector('.cursor').style.visibility = 'visible';
  document.querySelector('.cursor-2').style.visibility = 'visible';
   
}

// ==============
// CURSOR EFFECTS
// ==============
document.addEventListener('mousemove', function (e) {
    const cursor = document.querySelector('.cursor');
    const cursor2 = document.querySelector('.cursor-2');
    cursor.style.cssText = cursor2.style.cssText = "left: " + e.clientX + "px; top: " + e.clientY + "px;";
});

// ==============
// SETTINGS 
// ==============
// const settingsBtn = document.querySelector('.header-settings');

// settingsBtn.addEventListener('click', () => {
//   alert('clicked')
// })

// ==============
// MOBILE NAV
// ==============
const hamburger = document.querySelector('.nav-btn');
const navbar = document.querySelector('.mobile-menu-modal');
const navLink = document.querySelectorAll('.nav-menu__link')

let menuOpen = false;

hamburger.addEventListener('click', hamburgerToggle);
// hamburger animations and open nav
function hamburgerToggle() {
  if(!menuOpen) {
    hamburger.classList.add('open');
    menuOpen = true;
  }else{
    hamburger.classList.remove('open');
    menuOpen = false;
  }
  navbar.classList.toggle('show-nav');
}
// close nav
navbar.addEventListener('click', (e) => {
  if(e.target.classList.contains('mobile-menu-modal')) {
    hamburgerToggle();
  }
});

navLink.forEach(function (navLinks) {
  navLinks.addEventListener('click', () => {

    hamburgerToggle();
  })
});

// change navbar color when scrolling down
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("top-nav").style.top = "0";
    document.getElementById("top-nav").style.backgroundColor = "rgb(28, 28, 30)";
  } else {
    // document.getElementById("top-nav").style.top = "-10rem";
    document.getElementById("top-nav").style.backgroundColor = "rgb(0, 0, 0)";
  }
  prevScrollpos = currentScrollPos;
}

// ==============
// POP UP MODAL
// ==============
const project1 = document.querySelector('.project-1');
const project2 = document.querySelector('.project-2');
const project3 = document.querySelector('.project-3');
const modalWrapper = document.querySelector('.projects-modal');
const modalWrapper2 = document.querySelector('.projects-modal-2');
const modalWrapper3 = document.querySelector('.projects-modal-3');
const modalClose = document.querySelector('.modal__close');
const modalClose2 = document.querySelector('.modal-2__close');
const modalClose3 = document.querySelector('.modal-3__close');

project1.addEventListener('click', toggleModal);
project2.addEventListener('click', toggleModalSecond);
project3.addEventListener('click', toggleModalThird);
modalClose.addEventListener('click', closeModal);
modalClose2.addEventListener('click', closeModalSecond);
modalClose3.addEventListener('click', closeModalThird);

function toggleModal() {

  modalWrapper.style.visibility = 'visible';
  modalWrapper.style.opacity = '1';
  modalWrapper.style.transform = 'scale(1)';
  document.body.style.overflowY = 'hidden';
};

function toggleModalSecond() {
  
  modalWrapper2.style.visibility = 'visible';
  modalWrapper2.style.opacity = '1';
  modalWrapper2.style.transform = 'scale(1)';
  document.body.style.overflowY = 'hidden';

};

function toggleModalThird() {

  modalWrapper3.style.visibility = 'visible';
  modalWrapper3.style.opacity = '1';
  modalWrapper3.style.transform = 'scale(1)';
  document.body.style.overflowY = 'hidden';

}

function closeModal() {
  modalWrapper.style.visibility = 'hidden';
  modalWrapper.style.opacity = '0';
  modalWrapper.style.transform = 'scale(0)';
  document.body.style.overflowY = 'visible';
};

function closeModalSecond() {
  modalWrapper2.style.visibility = 'hidden';
  modalWrapper2.style.opacity = '0';
  modalWrapper2.style.transform = 'scale(0)';
  document.body.style.overflowY = 'visible';
}

function closeModalThird() {
  modalWrapper3.style.visibility = 'hidden';
  modalWrapper3.style.opacity = '0';
  modalWrapper3.style.transform = 'scale(0)';
  document.body.style.overflowY = 'visible';
}

modalWrapper.addEventListener('click', (e) => {
  if(e.target.classList.contains('projects-modal')) {
    closeModal();
  }
})

modalWrapper2.addEventListener('click', (e) => {
  if(e.target.classList.contains('projects-modal-2')) {
    closeModalSecond();
  }
})

modalWrapper3.addEventListener('click', (e) => {
  if(e.target.classList.contains('projects-modal-3')) {
    closeModalThird();
  }
})

// modal next button
const nextBtn = document.getElementById('modal-next');
const nextBtn2 = document.getElementById('modal-next-2');
const nextBtn3 = document.getElementById('modal-next-3');

nextBtn.addEventListener('click', nextModal);
nextBtn2.addEventListener('click', nextModal2);
nextBtn3.addEventListener('click', nextModal3);

function nextModal() {
  closeModal();
  toggleModalSecond();
}

function nextModal2() {
  closeModalSecond();
  toggleModalThird();
}

function nextModal3() {
  closeModalThird();
  toggleModal();
}
// ==============
// FORM VALIDATION
// ==============
const form = document.querySelector('.form');
const inputMail = document.querySelector('.input-email');
const textarea = document.querySelector('.message');
const errorMail = document.querySelector('.error-message');
const errorMessage = document.querySelector('.error-message-text');

form.addEventListener('submit', (e) => {

  const emailValue = inputMail.value;
  const messageValue = textarea.value;

  if(emailValue === '') {
    errorMail.style.display = 'block';
    inputMail.style.borderBottom = 'solid 1px rgb(255, 0, 0)'; 
    e.preventDefault();
  }else{
    errorMail.style.display = 'none';
    inputMail.style.borderBottom = 'solid 1px rgb(0, 255, 200)';
  }

  if(messageValue === '') {
    errorMessage.style.display = 'block';
    textarea.style.borderLeft = 'solid 1px rgb(255, 0, 0)';
    textarea.style.borderBottom = 'solid 1px rgb(255, 0, 0)';
    e.preventDefault()
  }else{
    errorMessage.style.display = 'none';
    textarea.style.borderLeft = 'solid 1px rgb(0, 255, 200)';
    textarea.style.borderBottom = 'solid 1px rgb(0, 255, 200)';
  }
});

// ==============
// GSAP ANIMATIONS HOME
// ==============
function homeAnimation () {
  gsap.from(".home-lines", {
    width: 0,
    height: 0,
    opacity: 0,
    duration: 1.5,
    ease: "power1.out",
    delay: .5,
  });

  gsap.from(".home-text__h1", {
    opacity: 0,
    delay: 1.8,
    duration: 3.5,
    ease: "power1.out",
  });

  gsap.from(".home-text__p", {
    opacity: 0,
    delay: 1.8,
    duration: 3.5,
    ease: "power1.out",
  });

  gsap.from(".home-socials", {
    width: 0,
    height: 0,
    opacity: 0,
    duration: 1.5,
    ease: "power1.out",
    delay: .5,
  });

  gsap.from(".home-socials__1", {
    opacity: 0,
    duration: 3.5, 
    delay: 1.8,
    ease: "power1.out",
  });

  gsap.from(".home-socials__2", {
    opacity: 0,
    duration: 3.5, 
    delay: 1.8,
    ease: "power1.out",
  });

  gsap.from(".home-contact-btn", {
    delay: 1.8,
    opacity: 0,
    duration: 3.5,
    ease: "power1.out",
  });

  gsap.from(".home-scroll", {
    opacity: 0,
    delay: 2.3,
    duration: 2.5,
    ease: "power1.out",
  });
}

// ==============
// GSAP ANIMATIONS ABOUT
// ==============
gsap.registerPlugin(ScrollTrigger);

gsap.from('.about-heading__hr', {
    scrollTrigger: {
        trigger: '.about-heading__hr',
        toggleActions: "play pause resume reverse",
        start: 'top bottom',
    },
    width: 0,
    duration: 1,
    ease: Power3.easeOut,
});

gsap.from('.about-profile', {
  scrollTrigger: {
      trigger: '.about-profile',
      toggleActions: "play pause resume reverse",
      start: 'top bottom',
  },

  opacity: 0,
  y: 100,
  duration: 3,
  ease: "power3.out",
  filter: 'grayscale(100%)',
});

gsap.from('.about-text__p', {
  scrollTrigger: {
      trigger: '.about-text__p',
      toggleActions: "play pause resume reverse",
      start: 'top bottom',
  },
  opacity: 0,
  duration: 3,
  ease: "power3.out",
});


gsap.from('.about-skills-card', {
  scrollTrigger: {
      trigger: '.about-skills-card',
      toggleActions: "play pause resume reverse",
      start: 'top bottom',
  },
  opacity: 0,
  duration: 2,
  ease: "power3.out",
});

gsap.from('.about-skills-card-img', {
  scrollTrigger: {
      trigger: '.about-skills-card-img',
      toggleActions: "play pause resume reverse",
      start: 'top bottom',
  },
  opacity: 0,
  y: 100,
  duration: 2,
  ease: "power3.out",
});

gsap.from('.about-card-2', {
  scrollTrigger: {
      trigger: '.about-card-2',
      toggleActions: "play pause resume reverse",
      start: 'top bottom',
  },
  opacity: 0,
  duration: 2,
  ease: "power3.out",
});

gsap.from('.about-card-img-2', {
  scrollTrigger: {
      trigger: '.about-card-img-2',
      toggleActions: "play pause resume reverse",
      start: 'top bottom',
  },
  opacity: 0,
  y: 100,
  duration: 2,
  ease: "power3.out",
});

// ==============
// GSAP ANIMATIONS PROJECTS
// ==============
gsap.from('.projects-heading__hr', {
  scrollTrigger: {
      trigger: '.projects-heading__hr',
      toggleActions: "play pause resume reverse",
      start: 'top bottom',
  },
    width: 0,
    duration: 1,
    ease: "power3.easeOut",
});

const project = document.querySelectorAll('.project');
const projectTitle = document.querySelectorAll('.project__h3');

project.forEach(projects => {
  gsap.registerPlugin(ScrollTrigger);

  gsap.from(projects, {
    scrollTrigger: {
        trigger: projects,
        toggleActions: "play pause resume reverse",
        start: 'top bottom',
    },
      opacity: 0,
      duration: 1,
      ease: "power3.easeOut",
  })
});

projectTitle.forEach(projectTitles => {
  gsap.registerPlugin(ScrollTrigger);

  gsap.from(projectTitles, {
    scrollTrigger: {
        trigger: projectTitles,
        toggleActions: "play pause resume reverse",
        start: 'top bottom',
    },
      opacity: 0,
      y: -10,
      duration: 1,
      ease: "power3.easeOut",
  })
});

// ==============
// GSAP ANIMATIONS CONTACT
// ==============
gsap.from('.contact-heading__hr', {
  scrollTrigger: {
      trigger: '.contact-heading__hr',
      toggleActions: "play pause resume reverse",
      start: 'top bottom',
  },
  width: 0,
  duration: 1,
  ease: Power3.easeOut,
})

gsap.from('.contact-text__p', {
  scrollTrigger: {
      trigger: '.contact-text__p',
      toggleActions: "play pause resume reverse",
      start: 'top bottom',
  },
  opacity: 0,
  duration: 3,
  ease: "power3.out",
})

gsap.from('.form', {
  scrollTrigger: {
      trigger: '.form',
      toggleActions: "play pause resume reverse",
      start: 'top bottom',
  },
  opacity: 0,
  duration: 3,
  ease: "power3.out",
})