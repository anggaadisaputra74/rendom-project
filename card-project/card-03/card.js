document.addEventListener("DOMContentLoaded", () => {
    const btns = document.querySelectorAll(".btn-booking");

    btns.forEach((btn) => {
        btn.addEventListener("click", (e) => {
            const card = e.target.closest(".card");
            const title = card.querySelector(".card-title").innerText;

            // efect visual tombol saat di-click.
            const originalText = btn.innerText;
            btn.innerText = "MEMPROSES...";
            btn.style.backgroundColor = "#0d2b59"; // hijau teal

            setTimeout(() => {
                alert(`Terima kasih! Pesanan untuk "${title}" berhasil di proses.`);
                btn.innerText = originalText;
                btn.style.backgroundColor = "#107d55"; // kembalikan kewarna awal
            }, 800);
        });
    });
});