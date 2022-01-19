// Random computer selection
function computerMove(){
    let options = ['rock','paper','scissor'];
    return options[Math.floor(Math.random()*options.length)]
    //return 'scissor'
}
// Player selection
function playerMove(){
    //let pselect = 'Rock';
    let pselect = window.prompt("Enter your move: ")
    pselect = pselect.toLowerCase();

    return pselect;
}
// Game execution
function playRound(computerSelection,playerSelection){
    let result = 'asasd';
    console.log(playerSelection);
    console.log(computerSelection);
    
    if (computerSelection === playerSelection) {
        result = 'Draw';
    }
    if ((computerSelection === 'rock' && playerSelection === 'scissor') || 
    (computerSelection === 'scissor' && playerSelection === 'paper') ||
    (computerSelection === 'paper' && playerSelection === 'rock')) {
        result = 'ComputerWins'
    }
    if ((playerSelection === 'rock' && computerSelection === 'scissor') || 
    (playerSelection === 'scissor' && computerSelection === 'paper') ||
    (playerSelection === 'paper' && computerSelection === 'rock')) {
        result = 'PlayerWins'
    }
    
    return result;

}



// console.log(playerMove());
// console.log(computerMove());
console.log(playRound(computerMove(),playerMove()));
