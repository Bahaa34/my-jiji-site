function surprise() {
  const messages = [
    "Nhabek ya rohi❤️",
    "Nmout 3lik 😍",
    "I love you more than coffee ☕ (meme manhbch coffe)",
    "Ntnak 3lik 💖"
  ];

  const random = Math.floor(Math.random() * messages.length);
  document.getElementById("message").innerText = messages[random];
}
