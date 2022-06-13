let choice = ["rock","paper","scissors"];
let playerScore = 0;
let computerScore = 0;
let computerSelection = " ";
let playerSelection = " ";
let playerSelLower = " ";
let choices = " ";

function resetScore(){
    document.getElementById('scorePlyr').textContent = `Player: 0`
    document.getElementById('scoreComp').textContent = `Computer: 0`
    const playBtn = document.createElement('button')
    playBtn.className = 'button'
    playBtn.style.flex = 'none'
    playBtn.textContent = "Play Again?"
    playBtn.addEventListener("click", function(){
        location.reload()
    })
    const mainClass = document.getElementById('main')
    mainClass.insertBefore(playBtn,mainClass.children[2])
    document.getElementById('rock').disabled = true;
    document.getElementById('paper').disabled = true;
    document.getElementById('scissors').disabled = true;
}

function showChoice(){
    choices = document.getElementById('title')
    choices.textContent = `Computer chose: ${computerSelection}`
    choices.style.color = 'grey'
    choices.style.fontWeight = 'bold'
    choices.style.fontSize = '16px'
    choices.style.flex = 'none'
}

function playRound(playerSelection){
    if (computerScore < 5 && playerScore < 5){
        function computerPlay(){
            return choice[Math.floor(Math.random()*choice.length)]
        }
        computerSelection = computerPlay();
        if (playerSelection == "rock" && computerSelection == "paper"){
            computerScore = computerScore + 1
            document.getElementById('scoreComp').textContent = `Computer: ${computerScore}`
            showChoice()
        }else if (playerSelection == "paper" && computerSelection == "scissors"){
            computerScore = computerScore + 1
            document.getElementById('scoreComp').textContent = `Computer: ${computerScore}`
            showChoice()
        }else if (playerSelection == "scissors" && computerSelection == "rock"){
            computerScore = computerScore + 1
            document.getElementById('scoreComp').textContent = `Computer: ${computerScore}`
            showChoice()
        }else if (playerSelection == computerSelection){
            showChoice()
        }
        else {
            playerScore = playerScore + 1
            document.getElementById('scorePlyr').textContent = `Player: ${playerScore}`
            showChoice()
        }
    }else if (playerScore == 5){
        const playerWin = document.getElementById('scoreTitle')
        playerWin.textContent = `You win!`
        playerWin.style.color = 'green'
        playerWin.style.fontWeight = 'bold'
        resetScore()
    }else if (computerScore == 5){
        const compWin = document.getElementById('scoreTitle')
        compWin.textContent = `You lose!`
        compWin.style.color = 'red'
        compWin.style.fontWeight = 'bold'
        resetScore()
    }
}


document.getElementById("rock").onclick = function(){
    playRound("rock");
}
document.getElementById("paper").onclick = function(){
    playRound("paper");
}
document.getElementById("scissors").onclick = function(){
    playRound("scissors");
}




