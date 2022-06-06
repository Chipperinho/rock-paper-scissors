const choice = ["rock","paper","scissors"]
let count = 0;
let playerScore = 0;
let computerScore = 0;
let computerSelection = " ";
let playerSelection = " ";
let playerSelLower = " ";

function game(){
    let rounds = prompt("How many rounds would you like to play?");
    rounds = +rounds
    for (let i = 0; i < rounds; i++){

        function computerPlay(){
            return choice[Math.floor(Math.random()*choice.length)]
        }

        function playRound(playerSelection,computerSelection){
            
            let selectionCheck = false;

            while(selectionCheck == false){

                playerSelection = prompt("Enter rock, paper, or scissors");
                playerSelection = playerSelection.toLowerCase();

                if (playerSelection === "rock"){
                    selectionCheck = true;
                }else if (playerSelection === "paper"){
                    selectionCheck = true;
                }else if (playerSelection === "scissors"){
                    selectionCheck = true;
                }
            }

            computerSelection = computerPlay();

            if (playerSelection == choice[0] && computerSelection == choice[1]){
                computerScore = computerScore + 1
                console.log(`You lose, ${computerSelection} beats ${playerSelection}.`);
            }else if (playerSelection == choice[1] && computerSelection == choice [2]){
                computerScore = computerScore + 1
                console.log(`You lose, ${computerSelection} beats ${playerSelection}.`);
            }else if (playerSelection == choice[2] && computerSelection == choice [0]){
                computerScore = computerScore + 1
                console.log(`You lose, ${computerSelection} beats ${playerSelection}.`)
            }else if (playerSelection == computerSelection){
                i = i - 1;
                count = count - 1;
                console.log(`Tie!, both of you picked ${playerSelection}.`)
            }
            else {
                playerScore = playerScore + 1
                console.log(`You win, ${playerSelection} beats ${computerSelection}.`)
            }
        }
        playRound();
        count = count + 1;
        console.log(`Round ${count} is over, current score is Player: ${playerScore} and Computer: ${computerScore}.`)
    }
    if (playerScore > computerScore){
        console.log("Congratulations!, you should go buy a lottery ticket.")
    }else{
        console.log("Congratulations!, an AI is luckier than you")
    }
}

game();
