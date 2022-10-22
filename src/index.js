import './styles/main.scss';
import './modules/hero-skills.js';

const animate = () => {
  const tl = gsap.timeline({ defaults: { duration: 1, ease: "power1.out" }});
  tl.from('.hero h1', { opacity: 0, x: "-30%"});
  tl.from('.hero h2', { opacity: 0, y: "-50%"}, '-=0.5');
  tl.from('.hero ul', { opacity: 0, }, '-=1');
}

animate();
