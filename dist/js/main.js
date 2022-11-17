// sticky nav bar

window.addEventListener("scroll", function () {
  let header = document.getElementsByClassName("header__main__nav")[0];
  header.classList.toggle("sticky", window.scrollY > 0);
});

window.addEventListener("scroll", function () {
  let header = document.getElementsByClassName("About__main__nav")[0];
  header.classList.toggle("sticky", window.scrollY > 0);
});

// slideshow

let listImg = document.getElementsByClassName("slideshow__bg slide fade");
let truocBtn = document.getElementsByClassName("truoc")[0];

let index = 0;
let index2 = 0;
truocBtn.style.left = "0px";

listImg[index].style.display = "inline";

function hienThiSlideTruocDo() {
  // [1,2,3,4] length = 4
  if (index === 0) {
    return (index = listImg.length - 1);
  }
  index -= 1;
  setDisplay(index);
}
function hienThiSlideKeTiep() {
  if (index === listImg.length - 1) {
    return (index = 0);
  }
  index += 1;
  setDisplay(index);
}

function setDisplay(index) {
  for (let i = 0; i < listImg.length; ++i) {
    listImg[i].style.display = "none";
  }
  listImg[index].style.display = "inline";
}

index2 = index;
setInterval(function () {
  if (index2 === listImg.length - 1) {
    index2 = 0;
    setDisplay(index2);
  } else {
    index2 += 1;
    setDisplay(index2);
  }
}, 2000);
