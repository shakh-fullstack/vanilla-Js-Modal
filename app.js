const openBtn = document.querySelector("#openBtn");
const closeBtn = document.querySelector("#closeBtn");
const modalOverlay = document.querySelector("#modalOverlay");

// 1. Ochish tugmasi bosilganda modalni ko'rsatish
openBtn.addEventListener("click", () => {
  modalOverlay.classList.remove("hidden");
});

// 2. Yopish tugmasi bosilganda yashirish
closeBtn.addEventListener("click", () => {
  modalOverlay.classList.add("hidden");
});

// 3. Qora fonga (tashqariga) bosilganda yashirish
modalOverlay.addEventListener("click", (e) => {
  if (e.target === modalOverlay) {
    modalOverlay.classList.add("hidden");
  }
});

// 4. Klaviaturadan Escape bosilganda yashirish
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    modalOverlay.classList.add("hidden");
  }
});
