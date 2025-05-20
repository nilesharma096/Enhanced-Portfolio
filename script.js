
document.addEventListener("DOMContentLoaded", () => {
    const quoteBox = document.getElementById("quote-box");
    const quotes = [
        "Code is like humor. When you have to explain it, it’s bad.",
        "First, solve the problem. Then, write the code.",
        "Experience is the name everyone gives to their mistakes.",
        "In order to be irreplaceable, one must always be different."
    ];
    const quote = quotes[Math.floor(Math.random() * quotes.length)];
    quoteBox.textContent = quote;
});
fetch('https://api.quotable.io/random')
  .then(response => response.json())
  .then(data => {
    document.getElementById('quote-box').innerText = `"${data.content}" — ${data.author}`;
  })
  .catch(error => {
    document.getElementById('quote-box').innerText = "Could not load quote.";
    console.error('Error fetching quote:', error);
  });
function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
}

