const backImage = document.getElementsByClassName("back_img")[0];

var width = window.innerWidth > 0 ? window.innerWidth : screen.width;

if (width <= 375) {
  backImage.src = "/assets/images/pattern-background-mobile.svg";
} else {
  backImage.src = "/assets/images/pattern-background-desktop.svg";
}
