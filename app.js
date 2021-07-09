const links = document.querySelectorAll("body ul li a");
let revealerpoint = 140;
// ======================================================
// loading
window.addEventListener("scroll", reveal);
reveal();

function reveal() {
  console.log("scrolling");
  let revealers = document.querySelectorAll(".loading");
  for (let i = 0; i < revealers.length; i++) {
    let windowheight = window.innerHeight;
    let revealertop = revealers[i].getBoundingClientRect().top;
    let revealerbottom = revealers[i].getBoundingClientRect().bottom;
    if (revealertop < windowheight - revealerpoint) {
      revealers[i].classList.add("active");
    } else {
      revealers[i].classList.remove("active");
    }
    if (revealerbottom < 0 + revealerpoint) {
      revealers[i].classList.remove("active");
    }
  }
}
// ======================================================
// 跳轉
for (const link of links) {
  link.addEventListener("click", clickHandler);
}

function clickHandler(e) {
  e.preventDefault();
  const href = this.getAttribute("href");
  const offsetTop = document.querySelector(href).offsetTop;

  scroll({
    top: offsetTop,
    behavior: "smooth"
  });
}
// ======================================================

window.onscroll = function() {
  const nav = document.querySelector("#navbar");
  if (this.scrollY <= 50) nav.className = "";
  else nav.className = "scroll";
};
