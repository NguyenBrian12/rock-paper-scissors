let userScore = 0;
let  computerScore= 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

const getComputerChoice = () => {
    const choices =["r", "p", "s"]
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

const convertToWord =(letter) => {
    if(letter === "r"){ return "Rock"}
    else if(letter === "p"){ return "Paper"}
    else if(letter === "s"){return "Scissors"}
}

const win = (userChoice, computerChoice) => {
    const smallUserWord = "user".fontsize(3).sup();
    const smallCompWord = "Comp".fontsize(3).sup();
    const userChoice_div = document.getElementById(userChoice);
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML= computerScore;
    result_div.innerHTML = `${convertToWord(userChoice)}${smallUserWord} beats ${convertToWord(computerChoice)}${smallCompWord}. You Win!`;
    userChoice_div.classList.add("green-glow");
    setTimeout( () => {userChoice_div.classList.remove("green-glow")}, 500)
}

const lose = (userChoice, computerChoice) => {
    const smallUserWord = "user".fontsize(3).sup();
    const smallCompWord = "Comp".fontsize(3).sup();
    const userChoice_div = document.getElementById(userChoice);
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML= computerScore;
    result_div.innerHTML = `${convertToWord(computerChoice)}${smallCompWord} beats ${convertToWord(userChoice)}${smallUserWord}. You Lost.`;
    userChoice_div.classList.add("red-glow");
    setTimeout( () => {userChoice_div.classList.remove("red-glow")}, 500)
}

const draw = (userChoice, computerChoice) => {
    const smallUserWord = "user".fontsize(3).sup();
    const smallCompWord = "Comp".fontsize(3).sup();
    const userChoice_div = document.getElementById(userChoice);
    result_div.innerHTML = `${convertToWord(userChoice)}${smallUserWord} equals ${convertToWord(computerChoice)}${smallCompWord}. It's a Draw.`;
    userChoice_div.classList.add("grey-glow");
    setTimeout( () => {userChoice_div.classList.remove("grey-glow")}, 500)
}

const game = (userChoice) => {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice){
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, computerChoice);
            break;
        case "pp":
        case "rr":
        case "ss":
            draw(userChoice, computerChoice);
            break;
    }
}
rock_div.addEventListener("click", () => game("r"))
paper_div.addEventListener("click",() => game("p"))
scissors_div.addEventListener("click", () => game("s"))