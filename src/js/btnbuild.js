const buildButtons = document.querySelectorAll(".build-button");
const buildContainers = document.querySelectorAll(".build-container");

buildButtons.forEach(function(button) {
  button.addEventListener("click", function() {
    // Elimina la clase "active" de todos los botones
    buildButtons.forEach(function(btn) {
      btn.classList.remove("btn-active");
    });

    const targetContainerId = button.getAttribute("data-target-container");
    buildContainers.forEach(function(container) {
      if (container.getAttribute("id") === targetContainerId) {
        container.style.display = "block";
        button.classList.add("btn-active");
      } else {
        container.style.display = "none";
      }
    });
  });
});
