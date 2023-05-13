var cardLeonardo = window.document.getElementById("cardLeonardo")
var cardSamantha = window.document.getElementById("cardSamantha")
var cardBruna = window.document.getElementById("cardBruna")
var setaEsquerda = window.document.getElementById("setaEsquerda")
var setaDireita = window.document.getElementById("setaDireita")


function RolarParaDireita() {
    cardLeonardo.style ="display:none"
    cardBruna.style ="display:flex"
    setaEsquerda.style ="display:flex"
    setaDireita.style ="display:none"
}

function RolarParaEsquerda(){
    cardLeonardo.style ="display:flex"
    cardBruna.style ="display:none"
    setaEsquerda.style ="display:none"
    setaDireita.style ="display:flex"   
}


