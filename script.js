function revealMessage() {
  const msg = document.getElementById("hiddenMessage");
  msg.style.display = msg.style.display === "block" ? "none" : "block";
}

function toggleContact() {
  const modal = document.getElementById("contactModal");
  modal.style.display = modal.style.display === "flex" ? "none" : "flex";
}

// Close modal if clicked outside
window.onclick = function(event) {
  const modal = document.getElementById("contactModal");
  if (event.target === modal) modal.style.display = "none";
};
