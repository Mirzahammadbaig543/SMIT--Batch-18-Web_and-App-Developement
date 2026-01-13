var currentPlayer = 1;
var scores = [0, 0, 0, 0];

function startRoll() {
    var diceImg = document.getElementById("dice-img");
    var rollBtn = document.getElementById("roll-btn");

    rollBtn.disabled = true;
    
    diceImg.classList.add("rolling");

    setTimeout(function() {
        diceImg.classList.remove("rolling");
        finishRoll();
        rollBtn.disabled = false;
    }, 600);
}

function finishRoll() {
    var diceImg = document.getElementById("dice-img");
    var statusText = document.getElementById("status-text");
    var subText = document.getElementById("sub-text");

    var randomNumber = Math.floor(Math.random() * 6) + 1;

    diceImg.src = "images/dice0" + randomNumber + ".png";

    scores[currentPlayer - 1] = randomNumber;

    if (currentPlayer < 4) {
        currentPlayer = currentPlayer + 1;
        statusText.innerText = "Player " + currentPlayer + " Turn";
        subText.innerText = "Now Player " + currentPlayer + "'s turn";
        updateUI();
    } else {
        checkWinner();
    }
}

function updateUI() {
    document.getElementById("p1").classList.remove("active");
    document.getElementById("p2").classList.remove("active");
    document.getElementById("p3").classList.remove("active");
    document.getElementById("p4").classList.remove("active");

    document.getElementById("p" + currentPlayer).classList.add("active");
}

function checkWinner() {
    var maxScore = Math.max(scores[0], scores[1], scores[2], scores[3]);
    
    var winners = [];
    for(var i=0; i < scores.length; i++) {
        if(scores[i] === maxScore) {
            winners.push(i + 1);
        }
    }

    if(winners.length > 1) {
        document.getElementById("status-text").innerText = "🤝 It's a Tie!";
        document.getElementById("sub-text").innerText = "Players " + winners.join(" & ") + " scored " + maxScore;
    } else {
        document.getElementById("status-text").innerText = "🏆 Player " + winners[0] + " Wins!";
        document.getElementById("sub-text").innerText = "Highest Roll: " + maxScore;
    }
    
    document.getElementById("roll-btn").style.display = "none";
    document.getElementById("reset-btn").style.display = "inline-block";
}

function resetGame() {
    currentPlayer = 1;
    scores = [0, 0, 0, 0];
    document.getElementById("status-text").innerText = "Player 1 Turn";
    document.getElementById("sub-text").innerText = "Click Roll Dice";
    document.getElementById("dice-img").src = "images/dice01.png";
    document.getElementById("roll-btn").style.display = "inline-block";
    document.getElementById("reset-btn").style.display = "none";
    updateUI();
}