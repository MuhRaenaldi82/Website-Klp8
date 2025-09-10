document.addEventListener('DOMContentLoaded', () => {
    const donasiBtn = document.getElementById('donasi-btn');

    donasiBtn.addEventListener('click', (e) => {
        e.preventDefault();
        alert('Terima kasih atas niat baik Anda! Ini adalah contoh fungsi. Anda bisa mengarahkan tombol ini ke halaman formulir donasi.');
    });
});