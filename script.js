// Toggle like/gem på alle sider hvor .heart-btn findes
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".heart-btn").forEach((btn) => {
    const id = btn.dataset.id;
    // Sæt state ved load
    if (localStorage.getItem(id)) btn.classList.add("liked");

    btn.addEventListener("click", () => {
      btn.classList.toggle("liked");
      if (btn.classList.contains("liked")) {
        localStorage.setItem(id, "true");
      } else {
        localStorage.removeItem(id);
      }
    });
  });
});
