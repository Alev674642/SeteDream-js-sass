let path = document.querySelector("path");
let pathLength = path.getTotalLength();
let title = document.querySelector("#title-mask text");

path.style.strokeDasharray = pathLength + " " + pathLength;

path.style.strokeDashoffset = pathLength;

window.addEventListener("scroll", () => {
  var scrollPercentage =
    (document.documentElement.scrollTop + document.body.scrollTop) /
    (document.documentElement.scrollHeight -
      document.documentElement.clientHeight);

  var drawLength = pathLength * scrollPercentage;

  path.style.strokeDashoffset = pathLength - drawLength;

  /*  const heroPicture = document.querySelector(".one").style.opacity=(0.15-scrollPercentage)*10; */

  const target = document.querySelectorAll(".scroll");

  var index = 0,
    length = target.length;
  for (index; index < length; index++) {
    var pos = window.pageYOffset * target[index].dataset.rate;

    //for small screen : reduce the rate
    if(document.documentElement.clientWidth < 800){
      pos = pos / 2;
    }


    console.log(scrollPercentage);

    if (target[index].dataset.direction === "vertical") {
      target[index].style.transform = "translate3d(0px," + pos + "px, 0px)";
    } else {
      var posX = window.pageYOffset * target[index].dataset.ratex;
      var posY = window.pageYOffset * target[index].dataset.rateu;

      target[index].style.transform =
        "translate3d(" + posX + "px, " + posY + "px, 0px)";
    }
  }
  
  //Fade out for path
  if (scrollPercentage >= 1) {
    document.querySelector(".line-container").classList.add("fade-out");

    document.querySelector("#section-outro").style.opacity = 1;
  } else {
    document.querySelector(".line-container").classList.remove("fade-out");
    document.querySelector("#section-outro").style.opacity = 0;
  }
});

setTimeout(() => {
  document.querySelector(".svg-title").style.opacity = 0;
}, 300);

setTimeout(() => {
  document.querySelector(".svg-title").style.background = "#ffffff00";
  document.querySelector(".svg-title").style.opacity = 1;
}, 600);

