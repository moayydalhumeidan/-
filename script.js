const input = document.getElementById("nameInput");
const nameDisplay = document.getElementById("nameDisplay");
const whatsappBtn = document.getElementById("whatsappBtn");input.addEventListener("input", () => {
    nameDisplay.textContent = input.value;
});
