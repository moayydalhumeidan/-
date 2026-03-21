const input = document.getElementById("nameInput");
const nameDisplay = document.getElementById("nameDisplay");

input.addEventListener("input", () => {
  nameDisplay.textContent = input.value;
});

const whatsappBtn = document.getElementById("whatsappBtn");
const card = document.querySelector(".card");

whatsappBtn.addEventListener("click", async () => {
  // إخفاء الزر فقط (ليس input-box)
  const originalButtonDisplay = whatsappBtn.style.display;
  whatsappBtn.style.display = "none";
  
  // تحويل البطاقة فقط
  html2canvas(card, {
    backgroundColor: null,
    scale: 2,
    allowTaint: true,
    useCORS: true
  }).then(canvas => {
    // إعادة إظهار الزر
    whatsappBtn.style.display = originalButtonDisplay;
    
    canvas.toBlob(blob => {
      if (navigator.canShare && navigator.canShare({ files: [new File([blob], "card.png", {type: "image/png"})] })) {
        const file = new File([blob], "card.png", {type: "image/png"});
        navigator.share({
          files: [file],
          title: 'بطاقة تهنئة',
          text: 'أرسل لك بطاقة تهنئة!'
        });
      } else {
        const link = document.createElement('a');
        link.download = "card.png";
        link.href = canvas.toDataURL();
        link.click();
        alert("تم حفظ الصورة. يمكنك الآن مشاركتها عبر واتساب.");
      }
    }, 'image/png');
  });
});