const navToggle = document.querySelector('.navbar-toggle');
const navMenu = document.querySelector('.navbar-menu');

// Toggle menu saat tombol hamburger diklik
navToggle.addEventListener('click', (e) => {
    e.stopPropagation(); // Mencegah event klik merambat ke document
    navToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Menutup navbar HANYA jika mengeklik di luar area menu dan tombol toggle
document.addEventListener('click', (e) => {
    const isClickedInsideMenu = navMenu.contains(e.target);
    const isClickedOnToggle = navToggle.contains(e.target);

    // Jika yang diklik BUKAN menu DAN BUKAN tombol toggle, tutup menu
    if (!isClickedInsideMenu && !isClickedOnToggle) {
        navToggle.classList.remove('active');
        navMenu.classList.remove('active');
    }
});