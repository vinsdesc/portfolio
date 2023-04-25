import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


const closeMenu = document.querySelector('#closeMenu');
const mobileMenu = document.querySelector('#mobile-menu');
const mobileMenuLinks = document.querySelectorAll('#mobile-menu li');
const menuBtn = document.querySelector('#menu-btn');

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



console.log(gsap)




gsap.utils.toArray('.job-container').forEach(job => {
  const jobName = job.querySelectorAll('.job-name span');
  const jobHeadline = job.querySelectorAll('.job-headline');
  const jobInfo = job.querySelectorAll('.job-info p');
  const pageNbr = job.querySelectorAll('.page-nbr');
  const move =  gsap.timeline({paused:true})
  .from(jobName, { opacity: 0, x: '-4rem', stagger: .15, delay: 0.1 })
  .from(jobHeadline, { opacity: 0, x: '-4rem',  delay: 0.1 }, ">-0.2")
  .from(jobInfo, { opacity: 0, x: '-100%', duration: 2 }, ">-1.4")
  .from(pageNbr, { opacity: 0, y: '-2rem', ease: "elastic.out(1, 0.3)", duration: 2 })
  
  ScrollTrigger.create({
    trigger: job,
    start: "top 40%",
    onEnter: () => {move.play(); console.log('enter')},
    onLeaveBack: () => move.reverse(),
    // onEnterBack: () => {move.restart(); console.log('enter back')},
    // onLeave: () => {move.clear(), console.log('leave')}
  })
})