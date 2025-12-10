// 1. Select all buttons with the shared class "faq-btn"
const acc = document.getElementsByClassName("faq-btn");
let i;

// 2. Loop through them and add the click listener
for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    
    // Toggle the "active" class (for the icon rotation)
    this.classList.toggle("active");

    // Select the answer div (the next sibling element)
    const panel = this.nextElementSibling;

    // Logic: If it has a height, close it. If not, open it.
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}