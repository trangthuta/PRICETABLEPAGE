let slideIndex = 1
const sliderSlides = document.querySelectorAll(".slideshow-slide")
const sliderSliderLength = sliderSlides.length
const sliderClassNameSlide = "slideshow-slide"
const sliderDots = document.querySelectorAll(".slideshow-dot")
const sliderDotsLength = sliderDots.length
const sliderActiveDot = " active"
const infoPageSlides = document.querySelectorAll(".infoPage-slides")
const infoPageSliderLength = infoPageSlides.length
const infoPageClassNameSlide = "infoPage-slides"
const infoPageDots = document.querySelectorAll(".infoPage-dot")
const infoPageDotsLength = infoPageDots.length
const infoPageActiveDot = " infoPage-active"
const arrowLeft = document.querySelector(".arrow-left")
const arrowRight = document.querySelector(".arrow-right")

//callback function
const showSlides = (
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
  for ( var i = 0; i < lengthSlides; i++) {
    slides[i].className = `${classNameSlide} slideOut`
  }
  for ( var i = 0; i < lengthDots; i++) {
    dots[i].className = dots[i].className.replace(`${activeDot}`, "")
  }
  slides[index-1].style.display = "inline-block"
  slides[index-1].className = `${classNameSlide} slideIn`
  dots[index-1].className += `${activeDot}`
  slideIndex = index
 }

//show first slide in 'slider' block
  showSlides(
    slideIndex,
    sliderSlides,
    sliderDots,
    sliderActiveDot,
    sliderClassNameSlide,
    sliderSliderLength,
    sliderDotsLength
  )
  //show first slide  in "infoPage" block
  showSlides(
  slideIndex,
  infoPageSlides,
  infoPageDots,
  infoPageActiveDot,
  infoPageClassNameSlide,
  infoPageSliderLength,
  infoPageDotsLength
)
  //Next  button slide


arrowLeft.addEventListener("click", () =>{
  clearInterval(autoplay)
  showSlides(
    slideIndex - 1,
    sliderSlides,
    sliderDots,
    sliderActiveDot,
    sliderClassNameSlide,
    sliderSliderLength,
    sliderDotsLength
  )
})  
arrowRight.addEventListener("click", () =>{
  clearInterval(autoplay)
  showSlides(
    slideIndex +1,
    sliderSlides,
    sliderDots,
    sliderActiveDot,
    sliderClassNameSlide,
    sliderSliderLength,
    sliderDotsLength
  )
})
// dots button  in 'slider' block
const currentSlide = (index) => {
  showSlides(
    (slideIndex = index),
    sliderSlides,
    sliderDots,
    sliderActiveDot,
    sliderClassNameSlide,
    sliderSliderLength,
    sliderDotsLength
  )
}

//assign event to dot button in 'slider' block
sliderDots.forEach((dot, index) => {
  index = slideIndex++
  dot.addEventListener('click', () => {
    currentSlide(index)
  })
})


//dots button in "infoPage" block
const currentSlideInfoPage = (index) => {
  showSlides(
    (slideIndex = index),
    infoPageSlides,
    infoPageDots,
    infoPageActiveDot,
    infoPageClassNameSlide,
    infoPageSliderLength,
    infoPageDotsLength
  )
}

//assign event to dot button in 'infoPage' block
infoPageDots.forEach((dot, index) => {
  index = slideIndex++
  dot.addEventListener('click', () => {
    currentSlide(index)
  })
})

// autoRun
  let autoplay=setInterval(()=>{
    showSlides(
      slideIndex,
      sliderSlides,
      sliderDots,
      sliderActiveDot,
      sliderClassNameSlide,
      sliderSliderLength,
      sliderDotsLength
    )
    slideIndex++
  },2000)








