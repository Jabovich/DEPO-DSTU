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
            delay: 2500,
            disableOnInteraction: false,
        },
    });
}
