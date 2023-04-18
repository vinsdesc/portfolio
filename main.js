import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger)

gsap.from(".scroll", { y: -120, opacity: .2, duration: 1 });
gsap.from("#header", { y: -120, duration: 1, delay: 1 })

const jobLetters = document.querySelectorAll('.job span');
jobLetters.forEach(letter => {
  letter.style.display = 'inline-block';
  letter.style.letterSpacing = '5px';
})
g

gsap.timeline({
  scrollTrigger: {
    trigger: ".page-1",
    start: "0%",
    end: "100%",
    pin: true,
    pinSpacing: false,
  },
})
//   .from(".profile_picture", { rotation: 180, y: 120, opacity: 0, duration: 1.5 })
//   .from('.job span', { opacity: 0, x: '100%', stagger: 0.15, ease: 'back.out(2)' })
//   .from(".blue-line", { width: 0, duration: 1.5 });

// gsap.from('.name', { opacity: -1, y: '-3em', duration: 2 })

console.log(gsap)


