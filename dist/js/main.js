var btnPlayer1 = document.getElementById("player1");
var btnPlayer2 = document.getElementById("player2");
var reset = document.getElementById("reset");
var dataPlayer1 = document.getElementById("data-player1");
var dataPlayer2 = document.getElementById("data-player2");
var scoreNumber = document.getElementById("score-number");
var stopNumber = document.getElementById("stop-number");
var scoreNumPlayer1 = 0;
var scoreNumPlayer2 = 0;

btnPlayer1.addEventListener("click", changeScore1);
btnPlayer2.addEventListener("click", changeScore2);

function changeScore1() {
    dataPlayer1.textContent = parseInt(++scoreNumPlayer1);
    if (parseInt(dataPlayer1.textContent) === parseInt(scoreNumber.value)) {
        dataPlayer1.style.color = "green";
        btnPlayer1.disabled = true;
        btnPlayer2.disabled = true;
    }
}

function changeScore2() {
    dataPlayer2.textContent = parseInt(++scoreNumPlayer2);
    if (parseInt(dataPlayer2.textContent) === parseInt(scoreNumber.value)) {
            dataPlayer2.style.color = "green";
            btnPlayer1.disabled = true;
            btnPlayer2.disabled = true;
    }
}

scoreNumber.addEventListener("change", function () {
    stopNumber.textContent = this.value;
});

reset.addEventListener("click", function () {
    scoreNumPlayer1 = scoreNumPlayer2 = dataPlayer1.textContent = dataPlayer2.textContent = 0;
    dataPlayer1.style.color = "";
    dataPlayer2.style.color = "";
    btnPlayer1.disabled = false;
    btnPlayer2.disabled = false;
});