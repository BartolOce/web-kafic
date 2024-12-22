import "../node_modules/locomotive-scroll/bundled/locomotive-scroll.css";
import "../node_modules/flickity/js/index.js";
import "../node_modules/flickity/css/flickity.css";

import LocomotiveScroll from "locomotive-scroll";

const locomotiveScroll = new LocomotiveScroll({
  lenisOptions: {
    wrapper: window,
    content: document.documentElement,
    lerp: 0.1,
    duration: 1.2,
    orientation: "vertical",
    gestureOrientation: "vertical",
    smoothWheel: true,
    smoothTouch: false,
    wheelMultiplier: 1,
    touchMultiplier: 2,
    normalizeWheel: true,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  },
});

//flickity
import Flickity from "flickity";

const hero_elem = document.querySelector(".flickity1-container");

const hero_options = {
  autoPlay: 10000, 
  prevNextButtons: false, 
  pageDots: false, 
  contain: true,
  accessibility: false,
  ImagesLoaded: true,
  setGallerySize: false,
  wrapAround: true,
  draggable: false,
  pauseAutoPlayOnHover: false,
  selectedAttraction: 0.005,
  friction: 0.25,
};

const hero_flkty = new Flickity(hero_elem, hero_options);

const cat_elem = document.querySelector(".flickity2-container");

const cat_options = {
  prevNextButtons: true, 
  pageDots: true, 
  contain: true, 
  accessibility: false,
  ImagesLoaded: true,
  setGallerySize: false,
  wrapAround: true,
  draggable: false,
  selectedAttraction: 0.005,
  friction: 0.25,
};

const cat_flkty = new Flickity(cat_elem, cat_options);

//Dropdown menu
const dropdown1 = document.getElementById("dropdown1");
const selectedValue1 = document.getElementById("selectedValue1");

const dropdown2 = document.getElementById("dropdown2");
const selectedValue2 = document.getElementById("selectedValue2");

const dropdown3 = document.getElementById("dropdown3");
const selectedValue3 = document.getElementById("selectedValue3");

dropdown1.addEventListener("change", changeTextBoxText1);
dropdown2.addEventListener("change", changeTextBoxText2);
dropdown3.addEventListener("change", changeTextBoxText3);

function changeTextBoxText1() {
  selectedValue1.value = this.value;
}

function changeTextBoxText2() {
  selectedValue2.value = this.value;
}

function changeTextBoxText3() {
  selectedValue3.value = this.value;
}

//Reveal animations
import { gsap } from "gsap";
import SplitType from "split-type";

import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const animateHeading = new SplitType("#animation");

gsap.from(".heading_wrapper .char", {
  yPercent: 130,
  stagger: 0.05,
  ease: "back.out",
  duration: 1,
  scrollTrigger: {
    trigger: "#animation",
    start: "top 80%",
  },
});

gsap.from(".section-text_animation", {
  yPercent: 130,
  stagger: 0.05,
  duration: 0.5,
  ease: "back",
  scrollTrigger: {
    trigger: ".section-text_animation",
    start: "top 90%",
  },
});

//navbar
window.addEventListener("scroll", function () {
  if (window.scrollY > 20) {
    document.querySelector(".header_container").classList.add("black");
    document.querySelector(".hero_title").classList.add("black");
  } else {
    document.querySelector(".header_container").classList.remove("black");
    document.querySelector(".hero_title").classList.remove("black");
  }
});
