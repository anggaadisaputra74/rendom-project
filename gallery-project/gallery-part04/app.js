const next = document.querySelector(".next");
const prev = document.querySelector(".prev");
const slideContainer = document.querySelector(".main-container");

// 1. Fungsi untuk menggeser ke slide berikutnya
function nextSlide() {
    let items = document.querySelectorAll(".item");
    document.querySelector('.slide').appendChild(items[0]);
}

// 2. Fungsi untuk menggeser ke slide sebelumnya
function prevSlide() {
    let items = document.querySelectorAll(".item");
    document.querySelector('.slide').prepend(items[items.length - 1]);
}

// Event listener untuk tombol manual
next.addEventListener("click", nextSlide);
prev.addEventListener("click", prevSlide);

// 3. Inisialisasi Autoplay (3000 ms = 3 detik)
let autoPlayTimer = setInterval(nextSlide, 3000);

// 4. Hentikan autoplay saat mouse masuk ke container slider
slideContainer.addEventListener("mouseenter", () => {
    clearInterval(autoPlayTimer);
});

// 5. Jalankan kembali autoplay saat mouse keluar dari container slider
slideContainer.addEventListener("mouseleave", () => {
    autoPlayTimer = setInterval(nextSlide, 3000);
});


