const buttons = document.querySelectorAll("button");
const result1 = document.getElementById("result");
const playerscore1 = document.getElementById("user")
const computerscore1 = document.getElementById("comp");
let playerscore = 0;
let computerscore = 0;
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const result = playRound(button.id, computerplay());
    result1.textContent = result;

  });
});
function computerplay() {
  const choices = ["rock","paper","scissors"];
  const randomchoice = Math.floor(Math.random()* choices.length);
  return choices[randomchoice];
}
function playRound(playerSelection,computerSelection){
  if (playerSelection === computerSelection){
    return "it's a tie!";
  }
  else if(
    (playerSelection ==="rock" && computerSelection ==="scissors") ||
    (playerSelection ==="paper" && computerSelection ==="rock") ||
    (playerSelection ==="scissors" && computerSelection ==="paper")
  ){
    playerscore++;

    playerscore1.textContent = playerscore;
    return "You win! " +playerSelection + " beats " + computerSelection;
  }
  else{
    computerscore++;

    computerscore1.textContent = computerscore;
    return "You lose! " + computerSelection + " beats " + playerSelection;
  }
}