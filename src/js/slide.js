export default class Slide {
  constructor(slide, wrapper) {
    this.slide = document.querySelector(slide);
    this.wrapper = document.querySelector(wrapper);
    this.dist = { finalPosition:0, startX: 0, movement: 0}
  }

  onStart(event) {
    event.preventDefault();
    this.wrapper.addEventListener('onmove', this.onMove);
    console.log(event);
  }

  onMove(event) {
    event.preventDefault();
  }

  onEnd(event) {
    event.preventDefault();
    this.wrapper.removeEventListener('mousemove', this.onMove);
  }

  addSlideEvents() {
    this.wrapper.addEventListener('mousedown', this.onStart);
    this.wrapper.addEventListener('mouseup', this.onEnd);
  }

  bindEvents() {
    this.onStart = this.onStart.bind(this);
    this.onMove = this.onMove.bind(this);
    this.onEnd = this.onEnd.bind(this);
  }

  init() {
    this.bindEvents();
    this.addSlideEvents();
    return this;
  }
}
