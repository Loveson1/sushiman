import AOS from "aos";
import "aos/dist/aos.css";

// init AOS animation
AOS.init({
  duration: 1000,
  offset: 100,
});

let close = document.getElementById("sidebar");
close.addEventListener("click", () => {
  close.style.width = "0px";
});

let open = document.getElementById("mobile");
open.addEventListener("click", () => {
  close.style.width = "200px";
});
