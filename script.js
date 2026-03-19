const input = document.getElementById("nameInput");
const nameDisplay = document.getElementById("nameDisplay");
input.addEventListener("input", () => {
    nameDisplay.textContent = input.value;});
const whatsappBtn = document.getElementById("whatsappBtn");
whatsappBtn.addEventListener("click", () => {
    const name = input.value.trim();
