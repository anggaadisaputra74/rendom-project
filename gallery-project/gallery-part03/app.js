document.addEventListener('DOMContentLoaded', () => {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const galleryItems = document.querySelectorAll('.pic');
    const hamburgerBtn = document.getElementById('hamburgerBtn');
    const filterNav = document.getElementById('filterNav');

    // 1. Logika Filter Foto
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Hapus kelas 'active' dari semua tombol
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Tambahkan kelas 'active' pada tombol yang diklik
            button.classList.add('active');

            const filterValue = button.getAttribute('data-filter');

            galleryItems.forEach(item => {
                if (filterValue === 'all' || item.classList.contains(filterValue)) {
                    item.classList.remove('hide');
                } else {
                    item.classList.add('hide');
                }
            });

            // Tutup menu hamburger setelah memilih kategori (khusus mode mobile)
            if (window.innerWidth <= 768) {
                filterNav.classList.remove('active');
            }
        });
    });

    // 2. Logika Hamburger Menu (Buka / Tutup Menu di Layar Kecil)
    hamburgerBtn.addEventListener('click', () => {
        filterNav.classList.toggle('active');
    });
});