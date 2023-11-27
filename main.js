document.addEventListener("DOMContentLoaded", function () {
  const blinds = document.querySelectorAll(".expandable-blind");

  function removeExpanded() {
    blinds.forEach((blind) => {
      blind.classList.remove("expanded");
    });
  }

  blinds.forEach((blind) => {
    blind.addEventListener("mouseenter", function () {
      removeExpanded();
      this.classList.add("expanded");
    });
  });

  blinds.forEach((blind) => {
    blind.addEventListener("mouseleave", function () {
      removeExpanded();
    });
  });
});
