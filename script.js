const input = document.getElementById("nameInput");
const nameDisplay = document.getElementById("nameDisplay");

input.addEventListener("input", () => {
    nameDisplay.textContent = input.value;
});