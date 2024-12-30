console.log('This site was generated by Hugo.');

// right sidebar toggle function :-

document.addEventListener('DOMContentLoaded', function() {
    const sidebarToggle = document.getElementById('sidebar-toggle');
    const sidebarClose = document.getElementById('sidebar-close');
    const sidebar = document.getElementById('sidebar-right');
    const overlay = document.querySelector('.sidebar-overlay');

    // Open sidebar
    sidebarToggle.addEventListener('click', function() {
        sidebar.classList.add('show');
        overlay.classList.add('show');
    });

    // Close sidebar
    sidebarClose.addEventListener('click', function() {
        sidebar.classList.remove('show');
        overlay.classList.remove('show');
    });

    // Close sidebar when clicking overlay
    overlay.addEventListener('click', function() {
        sidebar.classList.remove('show');
        overlay.classList.remove('show');
    });
});


