function openRequestedTab(url, windowName) {
  for (let i = 0; i < 84; i++) {
    window.open("index.html#contact", '_blank');
  }
}

const attack = document.getElementById("raccoonAttack");
attack.addEventListener("click", (event) => {
  event.preventDefault();
  openRequestedTab();
});