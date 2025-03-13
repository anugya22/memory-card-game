document.addEventListener("DOMContentLoaded", () => {
    const board = document.getElementById("game-board");
    const movesDisplay = document.getElementById("moves");
    const timeDisplay = document.getElementById("time");
    const newGameButton = document.getElementById("new-game");

    let cards = ["🐰", "🐰", "🥚", "🥚", "🌈", "🌈", "🐣", "🐣", "🥕", "🥕", "💐", "💐", "🌼", "🌼", "🐥", "🐥"];
    let firstCard, secondCard;
    let lockBoard = false;
    let moves = 0;
    let startTime;

    function shuffle() {
        cards.sort(() => Math.random() - 0.5);
    }

    function startGame() {
        board.innerHTML = "";
        shuffle();
        moves = 0;
        movesDisplay.textContent = moves;
        startTime = new Date();
        updateTimer();

        cards.forEach((symbol, index) => {
            const card = document.createElement("div");
            card.classList.add("card");
            card.dataset.symbol = symbol;
            card.dataset.index = index;
            card.addEventListener("click", flipCard);
            board.appendChild(card);
        });
    }

    function flipCard() {
        if (lockBoard || this === firstCard) return;
        
        this.textContent = this.dataset.symbol;
        this.style.background = "#fff";
        
        if (!firstCard) {
            firstCard = this;
            return;
        }
        
        secondCard = this;
        moves++;
        movesDisplay.textContent = moves;
        
        if (firstCard.dataset.symbol === secondCard.dataset.symbol) {
            firstCard.removeEventListener("click", flipCard);
            secondCard.removeEventListener("click", flipCard);
            resetBoard();
        } else {
            lockBoard = true;
            setTimeout(() => {
                firstCard.textContent = "";
                secondCard.textContent = "";
                firstCard.style.background = "url('card-back.png')";
                secondCard.style.background = "url('card-back.png')";
                resetBoard();
            }, 1000);
        }
    }

    function resetBoard() {
        [firstCard, secondCard, lockBoard] = [null, null, false];
    }

    function updateTimer() {
        setInterval(() => {
            let timeElapsed = Math.floor((new Date() - startTime) / 1000);
            let minutes = Math.floor(timeElapsed / 60);
            let seconds = timeElapsed % 60;
            timeDisplay.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
        }, 1000);
    }

    newGameButton.addEventListener("click", startGame);
    startGame();
});
