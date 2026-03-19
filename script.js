const input = document.getElementById("nameInput");
const nameDisplay = document.getElementById("nameDisplay");
input.addEventListener("input", () => {
    nameDisplay.textContent = input.value;
});

const input = document.getElementById("nameInput");
const whatsappBtn = document.getElementById("whatsappBtn");
whatsappBtn.addEventListener("click", () => {
    const name = input.value.trim();
    const message = `عيدكم مبارك 🌙
    ${name}
هذه بطاقة العيد الخاصة بكم:
https://moayydalhumeidan.github.io/-/
كل عام وأنتم بخير 🌟`;
    const url = `https://wa.me/?text=${encodeURIComponent(message)}`;
    window.location.href = url; ا});
