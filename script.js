//variables
const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
const playermove = document.getElementById('playermove');
const computermove = document.getElementById('computermove');
const pCounter = document.getElementById('pCounter')
const cCounter = document.getElementById('cCounter')
let pscore=0;
let cscore=0;

//button clicks
rock.addEventListener('click', () => handleclick('rock'))
paper.addEventListener('click', () => handleclick('paper'))
scissors.addEventListener('click', () => handleclick('scissors'))

// Random computer selection
function computerMove(){
    let options = ['rock','paper','scissor'];
    return options[Math.floor(Math.random()*options.length)]
}

// Game execution
function playRound(computerSelection,playerSelection){
    let result = 'asasd';
    
    if (computerSelection === playerSelection) {
        result = 'Draw';
    }
    if ((computerSelection === 'rock' && playerSelection === 'scissor') || 
    (computerSelection === 'scissor' && playerSelection === 'paper') ||
    (computerSelection === 'paper' && playerSelection === 'rock')) {
        result = 'ComputerWins'
        cscore++
    }
    if ((playerSelection === 'rock' && computerSelection === 'scissor') || 
    (playerSelection === 'scissor' && computerSelection === 'paper') ||
    (playerSelection === 'paper' && computerSelection === 'rock')) {
        result = 'PlayerWins'
        pscore++
    }
    
    updateScore(result)

}

//Score update
function updateScore(winner){
    if (winner === 'ComputerWins'){
        cCounter.textContent = cscore
    }
    if (winner === 'PlayerWins'){
        pCounter.textContent = pscore
    }
}


function handleclick(playerSelection){
    let computerSelection = computerMove();
    playRound(computerSelection,playerSelection);

    playermove.textContent = playerSelection;
    computermove.textContent = computerSelection;
}
