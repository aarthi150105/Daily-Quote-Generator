const quotes = [
    "Believe you can and you're halfway there. – Theodore Roosevelt",
    "You miss 100% of the shots you don’t take. – Wayne Gretzky",
    "The only way to do great work is to love what you do. – Steve Jobs",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. – Winston Churchill",
    "Don’t watch the clock; do what it does. Keep going. – Sam Levenson"
  ];
  
  function generateQuote() {
    const quoteElement = document.getElementById("quote");
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quoteElement.textContent = quotes[randomIndex];
  }