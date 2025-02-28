function appendValue(value) {
    playSound();
    document.getElementById("result").value += value;
}
function clearScreen() {
    playSound();
    document.getElementById("result").value = "";
}
function deleteLast() {
    playSound();
    let current = document.getElementById("result").value;
    document.getElementById("result").value = current.slice(0, -1);
}
function calculateResult() {
    playSound();
    try {
        document.getElementById("result").value = eval(document.getElementById("result").value);
    } catch (error) {
        document.getElementById("result").value = "Error";
    }
}
function playSound() {
    let sound = new Audio('click.mp3'); 
    sound.play();
}
const themeToggle = document.getElementById("theme-toggle");
themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    if (document.body.classList.contains("dark-mode")) {
        themeToggle.textContent = "☀";
    } else {
        themeToggle.textContent = "🌙";
    }
});
