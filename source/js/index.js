const popularBlock = document.querySelector('#popular-swiper');
const popularWrapper = document.querySelector('#popular-wrapper');
const popularSlides = document.querySelectorAll('#popular-slide');

const toggleSwiper = () => {
    popularBlock.classList.add('swiper');
    popularBlock.classList.add('swiper-container');
    popularWrapper.classList.add('swiper-wrapper');
    popularSlides.forEach(slide => {slide.classList.add('swiper-slide')})

    var swiper = new Swiper('.popular__wrapper', {
        slidesPerView: "auto",
        initialSlide: 2,
        spaceBetween: 6,
        pagination: {
            clickable: true,
        },
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
    });
}

const toggleChapterSlider = () => {
    var swiper = new Swiper('.chapter-slider__carusel', {
        slidesPerView: "auto",
        initialSlide: 1,
        spaceBetween: 0,
        pagination: {
            el: ".chapter-slider__pagination",
            clickable: true,
            renderBullet: function (index, className) {
                return '<span class="' + className + '">' + "</span>";
            }
        },
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
    });
}
