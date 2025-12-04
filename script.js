function scrollToSection() {
    document.getElementById("about").scrollIntoView({ behavior: "smooth" });
  }
  document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const emailInput = document.querySelector('input[type="email"]');
  
    form.addEventListener("submit", function (e) {
      if (emailInput.value.trim() === "") {
        e.preventDefault(); // hentikan submit
        alert("Email wajib diisi!");
        emailInput.focus();
      } else {
        alert("Pesan berhasil dikirim ✅");
      }
    });
  });
  document.addEventListener("DOMContentLoaded", function () {
    const items = document.querySelectorAll(".fade-item");
  
    items.forEach((item, index) => {
      setTimeout(() => {
        item.classList.add("show");
      }, index * 1000); // muncul setiap 1 detik
    });
  });
  
  