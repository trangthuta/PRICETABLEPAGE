let slideIndex = 1
let slider_slides = document.querySelectorAll(".slideshow-slide")
let slider_sliderLength = slider_slides.length
let slider_classNameSlide = `slideshow-slide`
let slider_dots = document.querySelectorAll(".slideshow-dot")
let slider_dotsLength = slider_dots.length
let slider_activeDot = ` active`
let infoPage_slides = document.querySelectorAll(".infopage-slides")
let infoPage_sliderLength = infoPage_slides.length
let infoPage_classNameSlide = `infopage-slides`
let infoPage_dots = document.querySelectorAll(".infopage-dot")
let infoPage_dotsLength = infoPage_dots.length
let infoPage_activeDot = ` infopage-active`
showSlides = (
  Index,
  slides,
  dots,
  activeDot,
  classNameSlide,
  lengthSlides,
  lengthDots
) => {
  if (Index > lengthSlides) Index = 1
  if (Index < 1) Index = lengthSlides
  for (i = 0; i < lengthSlides; i++) {
    slides[i].className = `${classNameSlide} slideOut`
  }
  for (i = 0; i < lengthDots; i++) {
    dots[i].className = dots[i].className.replace(`${activeDot}`, "")
  }
  slides[Index - 1].style.display = "inline-block"
  slides[Index - 1].className = `${classNameSlide} slideIn`
  dots[Index - 1].className += `${activeDot}`
  slideIndex = Index
}
showSlides(
  slideIndex,
  slider_slides,
  slider_dots,
  slider_activeDot,
  slider_classNameSlide,
  slider_sliderLength,
  slider_dotsLength
)
plusSlides = (index) => {
  showSlides(
    slideIndex + index,
    slider_slides,
    slider_dots,
    slider_activeDot,
    slider_classNameSlide,
    slider_sliderLength,
    slider_dotsLength
  )
  clearInterval(autoplay_slider)
}
currentSlide = (index) => {
  showSlides(
    (slideIndex = index),
    slider_slides,
    slider_dots,
    slider_activeDot,
    slider_classNameSlide,
    slider_sliderLength,
    slider_dotsLength
  )
  clearInterval(autoplay_slider)
}
showSlides(
  slideIndex,
  infoPage_slides,
  infoPage_dots,
  infoPage_activeDot,
  infoPage_classNameSlide,
  infoPage_sliderLength,
  infoPage_dotsLength
)
currentSlide_infopage = (index) => {
  showSlides(
    (slideIndex = index),
    infoPage_slides,
    infoPage_dots,
    infoPage_activeDot,
    infoPage_classNameSlide,
    infoPage_sliderLength,
    infoPage_dotsLength
  )
  clearInterval(autoplay_infopage)
}
let indexAuto = 1
let autoplay_slider = setInterval(() => {
  showSlides(
    indexAuto,
    slider_slides,
    slider_dots,
    slider_activeDot,
    slider_classNameSlide,
    slider_sliderLength,
    slider_dotsLength
  )
  indexAuto = indexAuto + 1 > slider_sliderLength ? 1 : indexAuto + 1
}, 1000)
let autoplay_infopage = setInterval(() => {
  showSlides(
    slideIndex,
    infoPage_slides,
    infoPage_dots,
    infoPage_activeDot,
    infoPage_classNameSlide,
    infoPage_sliderLength,
    infoPage_dotsLength
  )
  slideIndex++
}, 1000)

