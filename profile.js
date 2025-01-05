document.querySelectorAll(".sidebar-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      alert(`Navigasi ke ${btn.textContent}`);
    });
  });
  