// create empty array of motivational quotes
let motivationalQuotes = []

// get random quote API and assign it to motivationalQuotes array
fetch("https://type.fit/api/quotes")
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    motivationalQuotes = data;
    for (let i = 0; i < motivationalQuotes.length; i++) {
        if (motivationalQuotes[i].author === null || motivationalQuotes[i].author === undefined) {
            motivationalQuotes[i].author = 'Unknown';
        }
    }
    //sets a random motivational quote
    randomMotivationalQuote();
  });


// function to add new quotes to motivationalQuotes array
const addMotivationalQuote = (text) => {
    let newQuote = {
        text: text,
        author: author
    }
    motivationalQuotes.push(newQuote)
}

// function that returns a random quote from the motivationalQuotes array
const randomMotivationalQuote = () => {
    const randomIndex = Math.floor(Math.random() * motivationalQuotes.length);
    const randomQuote = motivationalQuotes[randomIndex];
    document.getElementById('quote').innerText = randomQuote.text;
    document.getElementById('quoteAuthor').innerText = `- ${randomQuote.author}`;
}

document.getElementById('motivationalQuotesButton').addEventListener('click', randomMotivationalQuote);