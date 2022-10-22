class HeroSkills {
    constructor() {
      this.list = document.querySelectorAll('#hero-skills>li');
      this.duration = parseInt(getComputedStyle(this.list[0])?.getPropertyValue('--animation-duration')) || 6;
      this.current = -1;
      this.list.forEach(item => {
        item.style.setProperty('--length', item.textContent.length);
        item.classList.add('animated');
      });
      setTimeout(() => this.showNext(), 200);
    }

    showNext() {
      this.current = (this.current + 1) % this.list.length;
      this.list.forEach((item, index) => {
        item.style.display = index === this.current ? 'block' : 'none'; 
      });
      setTimeout(() => this.showNext(), this.duration * 1000);
    }
}

const heroSkills = new HeroSkills();

export default heroSkills;