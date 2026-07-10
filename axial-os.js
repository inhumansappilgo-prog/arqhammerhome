(() => {
  "use strict";

  const root = document.documentElement;
  const cards = document.querySelectorAll(".card");

  root.classList.add("axial-os-enabled");

  window.addEventListener("pageshow", () => {
    document.body.dataset.systemStatus = "online";
  });

  cards.forEach((card) => {
    card.setAttribute("target", "_top");

    card.addEventListener("pointerenter", () => {
      root.dataset.activeArchive = card.querySelector(".card-index")?.textContent?.trim() || "classified";
    });

    card.addEventListener("pointerleave", () => {
      delete root.dataset.activeArchive;
    });
  });
})();
