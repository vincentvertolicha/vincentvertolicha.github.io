const arah = sessionStorage.getItem("arah");
if (arah === "kiri") {
  const style = document.createElement("style");
  style.textContent = `
    ::view-transition-old(page-content) { animation-name: slide-out-right; }
    ::view-transition-new(page-content) { animation-name: slide-in-left; }
  `;
  document.head.appendChild(style);
}
sessionStorage.removeItem("arah");

document.querySelectorAll(".navbar__link").forEach((link) => {
  link.addEventListener("click", (e) => {
    const links = [...document.querySelectorAll(".navbar__link")];
    const clickedIndex = links.indexOf(e.currentTarget);
    const activeIndex = links.indexOf(
      document.querySelector(".navbar__item--active .navbar__link"),
    );

    if (clickedIndex > activeIndex) {
      sessionStorage.removeItem("arah");
    } else {
      sessionStorage.setItem("arah", "kiri");
    }
  });
});
