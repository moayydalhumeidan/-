const input = document.getElementById("nameInput");
const nameDisplay = document.getElementById("nameDisplay");
const whatsappBtn = document.getElementById("whatsappBtn");

whatsappBtn.addEventListener("click", () => {
    const name = input.value.trim();

    const message = `عيدكم مبارك 🌙
الاسم: ${name}
هذه بطاقة العيد الخاصة بكم:
https://moayydalhumeidan.github.io/eid-card/
كل عام وأنتم بخير 🌟`;

    const url = `https://wa.me/?text=${encodeURIComponent(message)}`;
    window.location.href = url; // الأفضل للجوال
});
