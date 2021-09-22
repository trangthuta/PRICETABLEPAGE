let slideIndex = 1
let slider_slides = document.querySelectorAll(".slideshow-slide")
let slider_sliderLength = slider_slides.length
let slider_classNameSlide = "slideshow-slide"
let slider_dots = document.querySelectorAll(".slideshow-dot")
let slider_dotsLength = slider_dots.length
let slider_activeDot = " active"
let infoPage_slides = document.querySelectorAll(".infopage-slides")
let infoPage_sliderLength = infoPage_slides.length
let infoPage_classNameSlide = "infopage-slides"
let infoPage_dots = document.querySelectorAll(".infopage-dot")
let infoPage_dotsLength = infoPage_dots.length
let infoPage_activeDot = " infopage-active"

//callback function 
showSlides = (
  index,
  slides,
  dots,
  activeDot,
  classNameSlide,
  lengthSlides,
  lengthDots
) => {
  if (index > lengthSlides) index = 1
  if (index < 1) index = lengthSlides
  for (i = 0; i < lengthSlides; i++) {
    slides[i].className = `${classNameSlide} slideOut`
  }
  for (i = 0; i < lengthDots; i++) {
    dots[i].className = dots[i].className.replace(`${activeDot}`, "")
  }
  slides[index - 1].style.display = "inline-block"
  slides[index - 1].className = `${classNameSlide} slideIn`
  dots[index - 1].className += `${activeDot}`
  slideIndex = index
}

//show first slide in 'slider' block
showSlides(
  slideIndex,
  slider_slides,
  slider_dots,
  slider_activeDot,
  slider_classNameSlide,
  slider_sliderLength,
  slider_dotsLength
)

// Next/previous button controls in 'slider' block
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

  // Stop autoplay after clicking on Next/previous button  in 'slider' block
  clearInterval(autoplay_slider)

}

// dots button  in 'slider' block
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

  //Stop autoplay after clicking on dots  in 'slider' block
  clearInterval(autoplay_slider)

}

//show first slide  in 'slider' block
showSlides(
  slideIndex,
  infoPage_slides,
  infoPage_dots,
  infoPage_activeDot,
  infoPage_classNameSlide,
  infoPage_sliderLength,
  infoPage_dotsLength
)

//dots button in "infopage" block
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

  //Stop autoplay after clicking in "infopage" block 
  clearInterval(autoplay_infopage)
}

//set auto play slideshow in  in 'slider' block
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


//set auto play slideshow in  in 'infopage' block
// let indexAuto_infopage = 1
// let autoplay_infopage = setInterval(() => {
//   showSlides(
//     indexAuto_infopage,
//     infoPage_slides,
//     infoPage_dots,
//     infoPage_activeDot,
//     infoPage_classNameSlide,
//     infoPage_sliderLength,
//     infoPage_dotsLength
//   );
//   indexAuto_infopage = indexAuto_infopage + 1 > infoPage_sliderLength ? 1 : indexAuto_infopage + 1
// }, 1000);




