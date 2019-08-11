const cardbord = document.getElementById('cardboard');

function embaralhar(array) {
    var indice_atual = array.length, valor_temporario, indice_aleatorio;

    while (0 !== indice_atual) {

        indice_aleatorio = Math.floor(Math.random() * indice_atual);
        indice_atual -= 1;

        valor_temporario = array[indice_atual];
        array[indice_atual] = array[indice_aleatorio];
        array[indice_aleatorio] = valor_temporario;
    }

    return array;
}

const imgs = [
  "redin.jpeg",
  "joao.jpeg",
  "lukas.jpeg",
  "thiaguinho.jpeg",
  "thales.jpeg",
  "filipin.jpeg"
];

embaralhar(imgs);

let cardHTML = "";

imgs.forEach(img => {
  cardHTML += `
    <div class="memory-card" data-card="${img}">
    <img class="front-face" src="img/${img}"/>
    <img class="back-face" src="img/ygo-card-back.jpg">
  </div>`;
});


cardbord.innerHTML = cardHTML + cardHTML;

let cardF, cardS;
const cards = document.querySelectorAll(".memory-card");

console.log(cards);
function flipCard() {
   this.classList.add("flip");
   if(!cardF){
     cardF = this;
     return false;
   }
   cardS = this;
};

cards.forEach(card => card.addEventListener("click", flipCard));
