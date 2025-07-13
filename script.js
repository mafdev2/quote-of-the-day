const quoteElement = document.getElementById("quote");

async function getQuote() {
  quoteElement.textContent = "Loading...";
  try {
    const response = await fetch("https://api.quotable.io/random");
    const data = await response.json();
    quoteElement.textContent = `"${data.content}" — ${data.author}`;
  } catch (error) {
    quoteElement.textContent = "Could not fetch quote. Try again.";
  }
}

getQuote(); // Load one on page load

