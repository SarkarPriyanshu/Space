var Burgur = document.querySelector(".Burgur");
Burgur.addEventListener("click", function() {
  document.querySelector(".navbar-nav").classList.toggle("slide");
  Burgur.classList.toggle("move");
});
