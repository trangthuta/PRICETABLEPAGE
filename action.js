function showSlides_slider() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  if (slideIndex < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  // slideIndex++;
  // setTimeout(showSlides_slider,1000)
}
showSlides_slider(slideIndex=1);
function currentSlide(n) {
  showSlides_slider((slideIndex = n));
}
function plusSlide(n) {
  showSlides_slider((slideIndex += n));
}

function showSlides_infopage() {
  var i;
  var slides = document.getElementsByClassName("infopage-slides");
  var dots = document.getElementsByClassName("infopage-dot");
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  if (slideIndex < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" infopage-active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " infopage-active";
  // setTimeout(showSlides_infopage,1000);
}
showSlides_infopage(slideIndex=1);
function currentSlide_infopage(n) {
  showSlides_infopage((slideIndex = n));
}
