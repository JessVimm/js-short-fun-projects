const quotesContainer = document.getElementById('quotes-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const nextQuoteBtn = document.getElementById('next-quote');
const loader = document.getElementById('loader');

let apiQuotes = [];

function loadingQuotes() {
    loader.hidden = false; // Show loader
    quotesContainer.hidden = true; // Hide quotes
}

function showingQuote() {
    loader.hidden = true; // Hide loader
    quotesContainer.hidden = false; // Show quotes
}

// Get random quote
function getQuote() {
    // Loading...
    loadingQuotes();
    // Get one random quote
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
    // Check if author exists
    if (quote.author) {
        // Set author
        authorText.textContent = quote.author;
    } else {
        // Set as 'Unknown'
        authorText.textContent = 'Unknown';
    }
    // If quote is long, apply smaller style
    if (quote.text.length > 90) {
        quoteText.classList.add('long-quote');
    } else {
        quoteText.classList.remove('long-quote');
    }
    // Set the quote text, show it
    quoteText.textContent = quote.text;
    showingQuote();
}

// Get quotes from API
async function getQuotes() {
    // loading
    loadingQuotes();
    // Fetching data
    const apiUrl = 'https://jacintodesign.github.io/quotes-api/data/quotes.json';
    try {
        const response = await fetch(apiUrl);
        apiQuotes = await response.json();
        getQuote();
    } catch (error) {
        // Catching an error
        alert(error)
    }
}

// Tweet the quote
function tweetQuote() {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
    window.open(twitterUrl, '_blank');
}

// Event listeners
nextQuoteBtn.addEventListener('click', getQuote);
twitterBtn.addEventListener('click', tweetQuote)

// On load
getQuotes();