// ربط خانة الاسم
const input = document.getElementById("nameInput");

// ربط مكان عرض الاسم
const nameDisplay = document.getElementById("nameDisplay");

// تحديث الاسم على البطاقة مباشرة
input.addEventListener("input", () => {
    nameDisplay.textContent = input.value;
});

// زر واتساب
const whatsappBtn = document.getElementById("whatsappBtn");

whatsappBtn.addEventListener("click", () => {
    const name = input.value.trim();
