let player = {
    name: "Name",
    chips: 200
}



let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let nameTag = document.getElementById("name-tag")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let playerName = document.getElementById("player-name")
let playerEl = document.querySelector('#player-el')
    // playerName.addEventListener('input', function() {
    //     playerEl.textContent = this.value + ": $" + player.chips
    // });
let saveName = document.querySelector("#save-name")
saveName.addEventListener('click', function() {
    player.name = playerName.value;
    console.log("Something happen here");
    playerEl.textContent = player.name + ": $" + player.chips;
    //nameTag.innerHTML = `<p>${player.name} now playing BlackJack Game</p>`
})


//let playerEl = document.getElementById("player-el")
//player.innerHTML = "<input id='input-name' placeholder='Enter Name'> <p></p> <button onclick='function() {inputName = document.getElementById('input-name').value};'>Save</button>"



function getRandomCard() {
    let randomNumber = Math.floor(Math.random() * 13) + 1
    if (randomNumber > 10) {
        return 10
    } else if (randomNumber === 1) {
        return 11
    } else {
        return randomNumber
    }
}

function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function renderGame() {
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }

    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
        player.chips += 100
        playerEl.textContent = player.name + ": $" + player.chips;

    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
}


function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()
    }
}