// Tombol sapa
const sapaButton = document.getElementById('sapaButton');
sapaButton.addEventListener('click', () => {
    alert("Halo! Senang berkenalan denganmu 👋");
});

// Tombol toggle dark mode
const toggleDark = document.getElementById('toggleDark');

// Cek mode terakhir dari localStorage
if (localStorage.getItem("darkMode") === "enabled") {
    document.body.classList.add("dark-mode");
    toggleDark.textContent = "☀️ Light Mode";
}

toggleDark.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');

    if (document.body.classList.contains('dark-mode')) {
        toggleDark.textContent = "☀️ Light Mode";
        localStorage.setItem("darkMode", "enabled");
    } else {
        toggleDark.textContent = "🌙 Dark Mode";
        localStorage.setItem("darkMode", "disabled");
    }
});
