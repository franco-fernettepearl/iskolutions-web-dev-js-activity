document.addEventListener("DOMContentLoaded", function () {
  const button = document.getElementById("toggler");
  const navbar = document.getElementById("collapse")

  button.addEventListener("click", function () {
      this.classList.toggle("active-state");
  });

  button.addEventListener("click", function () {
    if (navbar.classList.contains("show")) {
      navbar.classList.remove("show");
      navbar.classList.add("hide");
    } else {
      navbar.style.display = "block";
      navbar.classList.remove("hide");
      navbar.classList.add("show");
    }
  });

  window.addEventListener("resize", function () {
    const width = window.innerWidth;
    const height = window.innerHeight;

    if (width > 768) {
      navbar.style.display = "block";
      navbar.classList.remove("hide");
      navbar.classList.add("show");
    } else {
      navbar.style.display = "none";
      navbar.classList.remove("show");
      navbar.classList.add("hide");
    }
  });

  // Initial dimensions check
  const initialWidth = window.innerWidth;
  const initialHeight = window.innerHeight;

  if (initialWidth > 768) {
    navbar.style.display = "block";
    navbar.classList.remove("hide");
    navbar.classList.add("show");
  } else {
    navbar.style.display = "none";
    navbar.classList.remove("show");
    navbar.classList.add("hide");
  }

});
