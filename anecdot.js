let quotes = [
"Be yourself; everyone else is already taken.",
"So many books, so little time.",
"Be the change that you wish to see in the world.",
"A room without books is like a body without a soul.",
"In three words I can sum up everything I've learned about life: it goes on.",
"If you tell the truth, you don't have to remember anything.",
"A friend is someone who knows all about you and still loves you.",
];
let randomQuote = quotes[Math.floor(Math.random()*quotes.length)];
document.getElementById("quote").innerHTML = randomQuote;