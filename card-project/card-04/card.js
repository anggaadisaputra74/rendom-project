document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".btn-booking");

    buttons.forEach((btn) => {
        btn.addEventListener("click", (e) => {
            const card = e.target.closest(".card");
            const title = card.querySelector(".card-title").innerText;

            // Efek visual tombol saat diklik
            const originalText = btn.innerText;
            btn.innerText = "MEMPROSES...";
            btn.style.backgroundColor = "#15803d"; // Hijau

            setTimeout(() => {
                alert(`Terima kasih! Pesanan untuk "${title}" berhasil diproses.`);
                btn.innerText = originalText;
                btn.style.backgroundColor = "#0d2b59"; // Kembalikan ke warna awal
            }, 800);
        });
    });
});