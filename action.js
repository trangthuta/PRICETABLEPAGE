let slideIndex;
showSlides_slider = () => {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (slideIndex > slides.length) slideIndex = 1;
  if (slideIndex < 1) slideIndex = slides.length;
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  slideIndex++;
  setTimeout(showSlides_slider,1000)
};
showSlides_slider((slideIndex = 1));
currentSlide = (n) => {
  showSlides_slider((slideIndex = n));
};
plusSlide = (n) => {
  showSlides_slider((slideIndex += n));
};
showSlides_infopage = () => {
  let i;
  let slides = document.getElementsByClassName("infopage-slides");
  let dots = document.getElementsByClassName("infopage-dot");
  if (slideIndex > slides.length) slideIndex = 1;
  if (slideIndex < 1) slideIndex = slides.length;
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" infopage-active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " infopage-active";
  setTimeout(showSlides_infopage,1000);
};
showSlides_infopage((slideIndex = 1));
currentSlide_infopage = (n) => {
  showSlides_infopage((slideIndex = n));
};
