var quotelist =[
    {quote:`“Be yourself; everyone else is already taken.”`,
    person: `― Oscar Wilde`,},
    {quote:`“So many books, so little time.”`,
    person:`  ― Frank Zappa`,},
    {quote:`“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”`,
    person:`  ― Bernard M. Baruch`,},
    {quote:`“You only live once, but if you do it right, once is enough.”`,
    person:`― Mae West`,},
    {quote:`“Be the change that you wish to see in the world.”`,
    person:` ― Mahatma Gandhi`,},
    {quote:`“If you tell the truth, you don't have to remember anything.”`,
    person: `― Mark Twain`,},
];
var cartona = ``;
function quote() {
  for (var i = 0; i < quotelist.length; i++) {
    var random = Math.floor(Math.random() * 6) +0;
    cartona = `<div class=" ">
    <h2>${quotelist[random].quote}</h2>
    <p>${quotelist[random].person}</p>
</div>`;
    document.getElementById("demo").innerHTML = cartona;
  }
}