gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true,
});
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length
      ? locoScroll.scrollTo(value, 0, 0)
      : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {
      top: 0,
      left: 0,
      width: window.innerWidth,
      height: window.innerHeight,
    };
  },
  pinType: document.querySelector(".main").style.transform
    ? "transform"
    : "fixed",
});

ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();

var crsr = document.querySelector(".cursor");
var sound = document.querySelector("#p");
var main = document.querySelector(".main");
document.addEventListener("mousemove", function (dets) {
  crsr.style.left = dets.x + 1 + "px";
  crsr.style.top = dets.y + 1 + "px";
});

gsap.from(".page1 h1,.page1 h2", {
  y: 10,
  rotate: 10,
  opacity: 0,
  delay: 0.3,
  duration: 0.7,
});
var tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".page1 h1",
    scroller: ".main",
    start: "top 27%",
    end: "top 0",
    scrub: 3,
  },
});
tl.to(
  ".page1 h1",
  {
    x: -100,
  },
  "animate"
);
tl.to(
  ".page1 h2",
  {
    x: 100,
  },
  "animate"
);
tl.to(
  ".page1 video",
  {
    width: "95%",
  },
  "animate"
);

var tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".page1 h1",
    scroller: ".main",
    start: "top -115%",
    end: "top -120%",
    scrub: 3,
  },
});
tl2.to(".main", {
  backgroundColor: "#fff",
});

var tl3 = gsap.timeline({
  scrollTrigger: {
    trigger: ".page1 h1",
    scroller: ".main",
    start: "top -280%",
    end: "top -300%",
    scrub: 3,
  },
});

tl3.to(".main", {
  backgroundColor: "#0F0D0D",
});
var vid = document.querySelector("#video");
var sound = document.querySelector("#p");
var boxes = document.querySelectorAll(".box");
vid.addEventListener("mouseenter", function () {
  crsr.style.width = "70px";
  sound.style.paddingTop = "5px";
  sound.style.paddingRight = "3px";
  sound.style.paddingLeft = "3px";

  sound.style.opacity = "1";
  crsr.style.borderRadius = "26.5%";
});

var navanim = gsap.fromTo(
  ".text-container",
  { xPercent: 22 },
  { xPercent: -100, duration: 10, ease: "linear", repeat: -1 }
);

vid.addEventListener("mouseleave", function () {
  crsr.style.width = "20px";
  sound.style.opacity = "0";

  crsr.style.borderRadius = "50%";
});

vid.addEventListener("click", function () {
  if (vid.muted) {
    vid.muted = false;
  } else {
    vid.muted = true;
  }
});

boxes.forEach(function (elem) {
  elem.addEventListener("mouseenter", function () {
    var att = elem.getAttribute("data-image");
    crsr.style.mixBlendMode = "normal";
    crsr.style.width = "470px";
    crsr.style.height = "370px";
    crsr.style.borderRadius = "0";
    crsr.style.backgroundImage = `url(${att})`;
  });
  elem.addEventListener("mouseleave", function () {
    elem.style.backgroundColor = "transparent";
    crsr.style.mixBlendMode = "difference";

    crsr.style.width = "20px";
    crsr.style.height = "20px";
    crsr.style.borderRadius = "50%";
    crsr.style.backgroundImage = `none`;
  });
});

var h4 = document.querySelectorAll(".nav h4");
var purple = document.querySelector(".purple");
var text = document.querySelector(".scrolling-text");

h4.forEach(function (elem) {
  elem.addEventListener("mouseenter", function () {
    console.log(elem.id);
    navanim.restart();
    text.innerHTML = elem.id;
    purple.style.display = "flex";
    purple.style.opacity = "1";
  });
  elem.addEventListener("mouseleave", function () {
    purple.style.display = "none";
    purple.style.opacity = "0";
  });
});
