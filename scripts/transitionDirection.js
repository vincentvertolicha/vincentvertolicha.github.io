// ===== BAGIAN 1: Baca arah dan pasang style animasi =====
// Bagian ini harus jalan SEBELUM halaman pertama kali digambar.
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

// ===== BAGIAN 2: Simpan arah saat tombol navbar diklik =====
// Pakai satu listener di "document" supaya tidak perlu menunggu navbar selesai dibuat.
document.addEventListener("click", (e) => {
  const link = e.target.closest(".navbar__link");
  if (!link) return;

  // Abaikan Ctrl+klik, Shift+klik, dan klik tengah (membuka tab baru)
  if (e.button !== 0 || e.ctrlKey || e.metaKey || e.shiftKey || e.altKey) return;

  const links = [...document.querySelectorAll(".navbar__link")];
  const clickedIndex = links.indexOf(link);
  const activeIndex = links.indexOf(
    document.querySelector(".navbar__item--active .navbar__link"),
  );

  // Kalau klik halaman yang sedang dibuka, tidak ada arah
  if (clickedIndex === activeIndex) return;

  if (clickedIndex > activeIndex) {
    sessionStorage.removeItem("arah");
  } else {
    sessionStorage.setItem("arah", "kiri");
  }
});