import modals from './modal';
import sliders from './slides';

window.addEventListener('DOMContentLoaded', () => {
    modals();
    sliders('.feedback-slider-item', 'horizontal', '.main-prev-btn', '.main-next-btn');
    sliders('.main-slider-item', 'vertical')
});