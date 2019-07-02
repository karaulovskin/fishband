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
            },
            {
                'selector': '.card-slider .swiper-container',
                'options': {
                    slidesPerView: 1,
                    resistance: true,
                    resistanceRatio: 0,
                    navigation: {
                        nextEl: '.card-slider-navigation__btn--next',
                        prevEl: '.card-slider-navigation__btn--prev',
                    },
                }
            },
            {
                'selector': '.card-slider-thumbs .swiper-container',
                'options': {
                    direction: 'vertical',
                    slidesPerView: 4,
                    // spaceBetween: 12,
                    watchSlidesVisibility: true,
                    watchSlidesProgress: true,
                    slideToClickedSlide: true,
                    freeMode: true,
                }
            },
        ];

        this.init();
        this.bindThumbs();
    }

    init() {
        this.sliders.forEach(function (slider) {
            new Slider(slider.selector, slider.options)
        });
    }

    bindThumbs() {
        if(this.windowWidth < 1366) return;

        const thumbs = document.querySelectorAll('.card-slider-thumbs .swiper-slide');
        const photoSliders = document.querySelectorAll('.card-slider .swiper-container');

        Array.from(photoSliders).forEach(slider => {
            const swiper = slider.swiper;

            swiper.on('transitionStart', function (e) {
                const activeIndex = this.activeIndex;
                const galleryGroup = slider.closest('.card__gallery');
                const thumbsSlider = galleryGroup.querySelector('.card-slider-thumbs .swiper-container').swiper;

                thumbsSlider.slideTo(activeIndex);
            });
        });

        Array.from(thumbs).forEach(thumb => {
            thumb.addEventListener('click', function () {
                const index = getElementIndex(this);
                const galleryGroup = thumb.closest('.card__gallery');
                const productSlider = galleryGroup.querySelector('.card-slider .swiper-container').swiper;

                productSlider.slideTo(index);
            });
        });
    }
}
export class Slider {
    constructor(selector, options) {
        new Swiper(selector, options);
    }
}
