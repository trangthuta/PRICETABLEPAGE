let slideIndex = 1;
showSlides = (Index) => {
  const slides = document.getElementsByClassName("slideshow-slide");
  const dots = document.getElementsByClassName("slideshow-dot");
  const slide1 = document.getElementById("slide-first");
  if (Index > slides.length) Index = 1;
  if (Index < 1) Index = slides.length;
  if (Index > 1) slide1.style.display = "none";
  for (i = 0; i < slides.length; i++) {
    slides[i].className = "slideshow-slide slideOut";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[Index - 1].style.display = "inline-block";
  slides[Index - 1].className = "slideshow-slide slideIn";
  dots[Index - 1].className += " active";
  slideIndex = Index;
};
showSlides(slideIndex);
plusSlides = (n) => {
  showSlides(slideIndex + n);
};
currentSlide = (n) => {
  showSlides((slideIndex = n));
};
//////
showSlides_infopage = (Index) => {
  const slides = document.getElementsByClassName("infopage-slides");
  const dots = document.getElementsByClassName("infopage-dot");
  const slide1 = document.getElementById("infotable-slide-first");
  if (Index > slides.length) Index = 1;
  if (Index < 1) Index = slides.length;
  if (Index > 1) slide1.style.display = "none";
  for (i = 0; i < slides.length; i++) {
    slides[i].className = "infopage-slides slideOut";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" infopage-active", "");
  }
  slides[Index - 1].style.display = "inline-block";
  slides[Index - 1].className = "infopage-slides slideIn";
  dots[Index - 1].className += " infopage-active";
  slideIndex = Index;
};
showSlides_infopage(slideIndex);
currentSlide_infopage = (n) => {
  showSlides_infopage((slideIndex = n));
};
///autoplay
let Index = 1;
let Index1 = 1;
setInterval(() => {
  showSlides(Index1);
  let slides = document.getElementsByClassName("slideshow-slide");
  Index1 = Index1 + 1 <= slides.length ? Index1 + 1 : 1;
}, 2000);
setInterval(() => {
  showSlides_infopage(Index);
  let slides = document.getElementsByClassName("infopage-slides");
  Index = Index + 1 <= slides.length ? Index + 1 : 1;
}, 2000);
