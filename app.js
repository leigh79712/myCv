const links = document.querySelectorAll("body ul li a");

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

window.onscroll = function() {
  var nav = document.querySelector("#navbar");
  if (this.scrollY <= 50) nav.className = "";
  else nav.className = "scroll";
};
