// sticky nav bar

window.addEventListener("scroll", function () {
  let header = document.getElementsByClassName("header__main__nav")[0];
  header.classList.toggle("sticky", window.scrollY > 0);
});
