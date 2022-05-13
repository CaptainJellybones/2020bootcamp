let player1Dice = document.querySelector("body > div > div:nth-child(2) > img");
let player2Dice = document.querySelector("body > div > div:nth-child(3) > img");

const dice = ["./IMG/dice1.png", "./IMG/dice2.png", "./IMG/dice3.png", "./IMG/dice4.png", "./IMG/dice5.png", "./IMG/dice6.png"]

function getRandomDice() {
    let p1Dice = Math.floor(Math.random() * dice.length);
    let p2Dice = Math.floor(Math.random() * dice.length);

    player1Dice.setAttribute("src", dice[p1Dice]);
    player2Dice.setAttribute("src", dice[p2Dice]);

    if (p1Dice == p2Dice) {
        document.querySelector("body > div > h1").textContent = "Draw!"
    } else if (p1Dice > p2Dice) {
        document.querySelector("body > div > h1").textContent = "🚩 Player 1 Wins!"
    } else {
        document.querySelector("body > div > h1").textContent = "Player 2 Wins! 🚩"
    }
}

getRandomDice();