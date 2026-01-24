var quotes-latin = [
{author:'',quote:'Carpe diem – Лови момент.'},
{author:'',quote:'Cogito ergo sum – Я мыслю, следовательно существую.'},
{author:'',quote:'Dictum – factum – Сказано сделано.'},
{author:'',quote:'Per aspera ad astra – Через тернии к звездам.'},
{author:'',quote:'A posteriori - Исходя из опыта.'},
{author:'',quote:'A potentia ad actum - От возможного к действительному.'},
{author:'',quote:'Abstractum pro concreto - Общее вместо частного.'},
{author:'',quote:'A prima facie - На первый взгляд.'},
{author:'',quote:'Ab initio nullum, semper nullum - Из ничего, ничего и не выйдет.'},
{author:'',quote:'Ad acta - К делу.'},
{author:'',quote:'Ad hoste maligno libera nos, Domine - Избави нас от лукавого, Боже.'},
{author:'',quote:'Aequam memento rebus in arduis servare mentem - Помни, старайся сохранять присутствие духа в трудных ситуациях.'},
{author:'',quote:'Aliena vitia in oculis habemus, a tergo nostra sunt - Чужие пороки у нас на глазах, а свои за спиной.'},
{author:'',quote:'Amicus certus in re incerta cernitur - Истинный друг познаётся в беде.'},
{author:'',quote:'Argumentum a posteriori - Доказательство на основании опыта.'},
{author:'',quote:'Ave, Caesar, morituri te salutant - Здравствуй, Цезарь, идущие на смерть приветствуют тебя.'},
{author:'',quote:'Avibus bonis - В добрый час.'},
{author:'',quote:'Barba crescit caput nescit - Борода растёт, голова мудрее не становится.'},
{author:'',quote:'Bono sensu - В хорошем смысле.'},
{author:'',quote:'Caetera activitati - В остальном действовать по усмотрению.'}
];

function randomQuoteTweet() {
var randomButton = document.querySelector("button.random-quote");
var quoteTextA = document.querySelector(".quote-text");
var authorA = document.querySelector(".quote-author");

newRandomQuote(quotes-latin, quoteTextA, authorA);

randomButton.addEventListener("click", function() {
newRandomQuote(quotes-latin, quoteTextA, authorA);
});

}

function newRandomQuote(quoteArray, quoteElement, authorElement) {
var newQuote = quoteArray[randomGen(0, quotes.length - 1)];
quoteElement.innerText = newQuote.quote;
authorElement.innerText = "-- " + newQuote.author;
}

function randomGen(min, max) {
return Math.floor(Math.random() * (max - min + 1) + min);
}
randomQuoteTweet();
