// Tombol Sapa
const sapaButton = document.getElementById("sapaButton");

sapaButton.addEventListener("click", () => {
    alert("Halo! Terima kasih sudah mampir ke website saya 👋");
    sapaButton.textContent = "😊 Sudah Disapa!";
    sapaButton.disabled = true;

    // Efek disabled style
    sapaButton.style.background = "#ccc";
    sapaButton.style.cursor = "not-allowed";
});
