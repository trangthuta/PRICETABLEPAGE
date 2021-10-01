// Bien dieu khien khi chon arrow
const NAV_ARROW = {
	LEFT: "left",
	RIGHT: "right",
}

// Bien khai bao 2 arrow
const prevSlide = document.querySelector(".arrow-left")
const nextSlide = document.querySelector(".arrow-right")

// Slideshow header
const slidersHeader = document.querySelectorAll(".slideshow-slide")
const sliderHeaderClass = slidersHeader[0].className
const dotsHeader = document.querySelectorAll(".dot")

runSlideShow(
	slidersHeader,
	sliderHeaderClass,
	dotsHeader,
	prevSlide,
	nextSlide
)

// Slideshow footer
const slidersFooter = document.querySelectorAll(".infoPage-slides")
const sliderFooterClass = slidersHeader[0].className
const dotsFooter = document.querySelectorAll(".dot-footer")

runSlideShow(slidersFooter, sliderFooterClass, dotsFooter)

// function xu ly hien thi slide
function showSlides(
  navArrow,
  sliders,
  sliderClass,
  dots,
  currentSlideIndex,
  nextSlideIndex
 ) {
  if (navArrow === NAV_ARROW.LEFT) {
    // An slide hien tai, show slide "currentSlideIndex"
    sliders[nextSlideIndex].style.left = "-100%"
    sliders[currentSlideIndex].style.left = 0
    // Them class vao slide
    sliders[nextSlideIndex].setAttribute("class", `${sliderClass} slideInLeft`)
    sliders[currentSlideIndex].setAttribute(
      "class",
      `${sliderClass} slideOutRight`
    )
  } else if (navArrow === NAV_ARROW.RIGHT) {
    sliders[nextSlideIndex].style.left = "100%"
    sliders[currentSlideIndex].style.left = 0
    sliders[nextSlideIndex].setAttribute(
      "class",
      `${sliderClass} slideInRight`
    )
    sliders[currentSlideIndex].setAttribute(
      "class",
      `${sliderClass} slideOutLeft`
    )
  }

	for (let i = 0 ; i < dots.length ; i++) {
		dots[i].classList.remove("active") // Xoa phan hien thi dot
	}
	dots[nextSlideIndex].classList.add("active") // Hien thi dot hien tai
}

// run slideShow
function runSlideShow(
  sliders,
  sliderClass,
  dots,
  prevSlide,
  nextSlide,
  autoplay = true 
) {
  console.warn('dots', dots)
	let currentSlideIndex = 0
  let nextSlideIndex
  let showInterval = null
  // Hien thi slide dau tien
  sliders[currentSlideIndex].style.left = 0
  dots[currentSlideIndex].classList.add("active")

  // Thuc hien hanh dong click vao arrow
  if (prevSlide && nextSlide) {
    prevSlide.addEventListener("click", function () {
      navigateSlide(NAV_ARROW.LEFT)
    })
    nextSlide.addEventListener("click", function () {
      navigateSlide(NAV_ARROW.RIGHT)
    })
  }

  const navigateSlide = (navArrow, interval = true) => {
    nextSlideIndex = getNextSlideIndex(navArrow, sliders, currentSlideIndex)
    controlInterval(nextSlideIndex, interval, navArrow , false)
  }

  // Loop dots thuc hien xu ly cho su kien click
  dots.forEach((element) => {
    element.addEventListener("click", function () {  
      const dotIndex = Number(element.getAttribute("name"))
      controlInterval(dotIndex, true)
    })
  })

  const controlInterval = (nextIndex, interval, navArrow, clickDot = true) => {
    if(interval === true) runClearInterval()

    if(clickDot) { 
      clickDotShowSlide(nextIndex)
    } else {
      controlShowSlides(navArrow)
    }

    if(interval === true) runSetInterval() 

    currentSlideIndex = nextIndex
  }

  const clickDotShowSlide = (dotIndex) => {
    if (
      (currentSlideIndex === sliders.length - 1 && dotIndex === 0) ||
      currentSlideIndex < dotIndex
    ) {
      controlShowSlides(NAV_ARROW.RIGHT, dotIndex)
    } else if (
      (currentSlideIndex === 0 && dotIndex === sliders.length - 1) ||
      currentSlideIndex > dotIndex
    ) {
      controlShowSlides(NAV_ARROW.LEFT, dotIndex)
    }
  }

  // Show slide
  const controlShowSlides = (navArrow, nextIndex = nextSlideIndex) => {
    showSlides(
      navArrow,
      sliders,
      sliderClass,
      dots,
      currentSlideIndex,
      nextIndex
    )
  }

  // Tao ham setInterval chung
  const runSetInterval = () => {   
    showInterval = setInterval(() => {
      navigateSlide(NAV_ARROW.RIGHT, false)
    }, 2000)
  }

  // Kiem tra dieu kien autoplay = true se cho chay tu dong. Neu them slide khac khong muon auto thi co the thay doi 
  if (autoplay) {
    runSetInterval()
  }

  // Xoa ham setInterval
  const runClearInterval = () => {
    clearInterval(showInterval)
  }
}

// Ham xu ly tim nextSlide
function getNextSlideIndex(navArrow, sliders, currentSlideIndex) {
	let nextSlideIndex
	if (navArrow === NAV_ARROW.LEFT) {
	  if (currentSlideIndex === 0) {
		nextSlideIndex = sliders.length - 1
	  } else {
		nextSlideIndex = currentSlideIndex - 1
	  }
	} else if (navArrow === NAV_ARROW.RIGHT) {
	  if (currentSlideIndex === sliders.length - 1) {
		nextSlideIndex = 0
	  } else {
		nextSlideIndex = currentSlideIndex + 1
	  }
	}
	return nextSlideIndex
}
