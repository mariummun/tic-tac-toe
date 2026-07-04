let boxes = document.querySelectorAll(".box");
let resetButton = document.querySelector(".reset-button");
let msgContainer = document.querySelector(".msg-container");
let newButton = document.querySelector("#new-button");
let msg = document.querySelector(".msg");

const winningStreak = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

let turnO = true;

const resetGame = () => {
    turnO = true;
    enableButtons();
    msgContainer.classList.add("hide");
}

boxes.forEach((box) => {
    box.addEventListener("click", (onClickTurn)=>{
        if(turnO){
            box.innerText = "O";
            turnO = false;
        } else{
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;

        checkWin();
    });
});

const disableButtons = () => {
    for(let box of boxes){
        box.disabled = true;
        msgContainer.classList.remove("hide");
    }
}

const enableButtons = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}

const showWinner = (winner) =>{
    msg.innerText = `Congratulations, you won ${winner}!`;
    msgContainer.classList.remove("hide");
    disableButtons();
}

const checkWin = ()=>{
    for(let pattern of winningStreak){
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if(pos1 != "" && pos2 != "" && pos3 != ""){
            if(pos1 == pos2 && pos2 == pos3){
                console.log("winner", pos1);
                showWinner(pos1);
            }
        }
    }
};

newButton.addEventListener("click", resetGame);
resetButton.addEventListener("click", resetGame);

