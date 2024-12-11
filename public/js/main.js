(() => {
  // <stdin>
  console.log("This site was generated by Hugo.");
  document.addEventListener("DOMContentLoaded", function() {
    const sidebarToggle = document.getElementById("sidebar-toggle");
    const sidebarClose = document.getElementById("sidebar-close");
    const sidebar = document.getElementById("sidebar-right");
    const overlay = document.querySelector(".sidebar-overlay");
    sidebarToggle.addEventListener("click", function() {
      sidebar.classList.add("show");
      overlay.classList.add("show");
    });
    sidebarClose.addEventListener("click", function() {
      sidebar.classList.remove("show");
      overlay.classList.remove("show");
    });
    overlay.addEventListener("click", function() {
      sidebar.classList.remove("show");
      overlay.classList.remove("show");
    });
  });
})();
