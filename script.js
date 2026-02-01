function surprise() {
  const messages = [
    "You are cuter than WiFi with full signal 📶❤️",
    "Warning ⚠️ Too beautiful to be real 😍",
    "I love you more than coffee ☕ (and that’s serious)",
    "Congrats 🎉 You unlocked my heart 💖"
  ];

  const random = Math.floor(Math.random() * messages.length);
  document.getElementById("message").innerText = messages[random];
}
