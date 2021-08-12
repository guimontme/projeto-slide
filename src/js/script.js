import { SlideNav } from './slide';

const slide = new SlideNav('.slide', '.slide-wrapper');
slide.init();
slide.addArrows('.arrow-nav .prev', '.arrow-nav .next');
slide.addControl();
