const input = document.getElementById("nameInput");
const nameDisplay = document.getElementById("nameDisplay");

input.addEventListener("input", () => {
  nameDisplay.textContent = input.value;
});

const whatsappBtn = document.getElementById("whatsappBtn");
const card = document.querySelector(".card");

whatsappBtn.addEventListener("click", async () => {
  // تحويل البطاقة لصورة
  html2canvas(card).then(canvas => {
    canvas.toBlob(blob => {
      // مشاركة أو تحميل الصورة بناءً على دعم المتصفح
      if (navigator.canShare && navigator.canShare({ files: [new File([blob], "card.png", {type: "image/png"})] })) {
        const file = new File([blob], "card.png", {type: "image/png"});
        navigator.share({
          files: [file],
          title: 'بطاقة تهنئة',
          text: 'أرسل لك بطاقة تهنئة!'
        });
      } else {
        // في حال لم يتوفر Web Share API، حمل الصورة
        const link = document.createElement('a');
        link.download = "card.png";
        link.href = canvas.toDataURL();
        link.click();
        alert("تم حفظ الصورة. يمكنك الآن مشاركتها عبر واتساب.");
      }
    }, 'image/png');
  });
});