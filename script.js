const input = document.getElementById("nameInput");
const nameDisplay = document.getElementById("nameDisplay");

input.addEventListener("input", () => {
  nameDisplay.textContent = input.value;
});

const whatsappBtn = document.getElementById("whatsappBtn");
const card = document.querySelector(".card");

whatsappBtn.addEventListener("click", async () => {
  // إخفاء العناصر الإضافية فقط (ليس الـ input)
  const container = document.querySelector(".container");
  const inputBox = document.querySelector(".input-box");
  
  // حفظ الـ display الأصلي
  const originalInputDisplay = inputBox.style.display;
  const originalButtonDisplay = whatsappBtn.style.display;
  
  // إخفاء العناصر
  inputBox.style.display = "none";
  whatsappBtn.style.display = "none";
  
  // تحويل البطاقة فقط
  html2canvas(card, {
    backgroundColor: null,
    scale: 2,
    allowTaint: true,
    useCORS: true
  }).then(canvas => {
    // إعادة إظهار العناصر
    inputBox.style.display = originalInputDisplay;
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