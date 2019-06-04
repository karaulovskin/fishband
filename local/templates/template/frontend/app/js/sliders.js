import Swiper from 'swiper/dist/js/swiper.js'

export default class Sliders {
    constructor() {
        this.sliders = [
            {
                'selector': '.shop-slider__container.swiper-container',
                'options': {
                    slidesPerView: 4,
                    spaceBetween: 25,
                    navigation: {
                        nextEl: '.shop-slider__nav-next',
                        prevEl: '.shop-slider__nav-prev',
                    },
                    pagination: {
                        el: '.shop-slider__pagination.swiper-pagination',
                        dynamicBullets: true,
                    },
                    breakpoints: {
                        600: {

                        }
                    }
                }
            }
        ];

        this.init();
    }

    init() {
        this.sliders.forEach(function (slider) {
            new Slider(slider.selector, slider.options)
        });
    }
}
export class Slider {
    constructor(selector, options) {
        new Swiper(selector, options);
    }
}
