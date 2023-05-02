import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


const closeMenu = document.querySelector('#closeMenu');
const mobileMenu = document.querySelector('#mobile-menu');
const menuBtn = document.querySelector('#menu-btn');
const contactLinks = document.querySelectorAll('#contact h1');


var cursor = document.querySelector('.cursor'),
  cursorScale = document.querySelectorAll('.cursor-scale'),
  mouseX = 0,
  mouseY = 0

gsap.to({}, 0.016, {
  repeat: -1,

  onRepeat: function () {
    gsap.set(cursor, {
      css: {
        left: mouseX,
        top: mouseY
      }
    })
  }
});

window.addEventListener("mousemove", function (e) {
  mouseX = e.clientX;
  mouseY = e.clientY
});

cursorScale.forEach(link => {
  link.addEventListener('mouseleave', () => {
    cursor.classList.remove('grow');
    cursor.classList.remove('grow-small');
  });
  link.addEventListener('mousemove', () => {
    cursor.classList.add('grow');
    if (link.classList.contains('small')) {
      cursor.classList.remove('grow');
      cursor.classList.add('grow-small');
    }
  });
});



gsap.utils.toArray(".clickable").forEach(elem => {
  console.log(elem)
  let hover = gsap.to(cursor, { scale: 2, color: "blue", duration: .4, paused: true, ease: "power1.inOut" });
  elem.addEventListener("mouseenter", () => hover.play());
  elem.addEventListener("mouseleave", () => hover.reverse());
});


menuBtn.addEventListener('click', () => {
  mobileMenu.classList.add('grid');
  mobileMenu.classList.remove('hidden');
})

mobileMenu.addEventListener('click', (e) => {
  if (e.target.tagName === 'A') {
    mobileMenu.classList.add('hidden');
    mobileMenu.classList.remove('grid');
  }
})



closeMenu.addEventListener('click', () => {
  mobileMenu.classList.add('hidden');
  mobileMenu.classList.remove('grid');
})




gsap.registerPlugin(ScrollTrigger)

gsap.from(".scroll", { y: -120, opacity: .2, duration: 1 });
gsap.from("#header", { y: -120, duration: 1, delay: 1 })

const jobLetters = document.querySelectorAll('.job span');
jobLetters.forEach(letter => {
  letter.style.display = 'inline-block';
  letter.style.letterSpacing = '5px';
})


gsap.timeline()
  .from(".profile_picture", { rotation: 180, y: 120, opacity: 0, duration: 1.5 })
  .from('.name', { opacity: -1, y: '-3em', duration: 2 }, ">-1")
  .from('.shaking span', { opacity: 0, x: '100%', stagger: 0.15, ease: 'back.out(2)' }, ">-30%")
  .from(".blue-line", { width: 0, duration: 2 }, ">-50%")



gsap.utils.toArray('.job-container').forEach(job => {
  const jobName = job.querySelectorAll('.job-name span');
  const jobHeadline = job.querySelectorAll('.job-headline');
  const jobInfo = job.querySelectorAll('.job-info p');
  const pageNbr = job.querySelectorAll('.page-nbr');
  const move = gsap.timeline({ paused: true })
    .from(jobName, { opacity: 0, x: '-4rem', stagger: .15, delay: 0.1 })
    .from(jobHeadline, { opacity: 0, x: '-4rem', delay: 0.1 }, ">-0.2")
    .from(jobInfo, { opacity: 0, x: '-100%', duration: 2 }, ">-1.4")
    .from(pageNbr, { opacity: 0, y: '-2rem', ease: "elastic.out(1, 0.3)", duration: 2 })

  ScrollTrigger.create({
    trigger: job,
    start: "top 40%",
    onEnter: () => { move.play(); console.log('enter') },
    onLeaveBack: () => move.reverse(),
  })
})

gsap.to(".underline", {
  scrollTrigger: ".underline", // start the animation when ".box" enters the viewport (once)
  width: '100%',
  duration: 1.5,
});


gsap.utils.toArray(contactLinks).forEach(h1 => {
  console.log(h1.querySelector('.underline'))
  let hover = gsap.to(h1.querySelector('.underline'), { x: '100%', duration: 1.4, paused: true, ease: "power1.inOut" });
  h1.addEventListener("mouseenter", () => hover.play());
  h1.addEventListener("mouseleave", () => hover.reverse());
});
