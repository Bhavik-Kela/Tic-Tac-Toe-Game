let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".reset");
let winMssg = document.querySelector(".messenger");

let turnX = true;

const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("box was clicked")
        if (turnX) {
            box.innerText = "X";
            turnX = false;
        }
        else {
            box.innerText = "O";
            turnX = true;

        }
        box.disabled = true;
        checkWinner();


    })
});

const disableBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
}

const checkWinner = () => {
    for (let pattern of winPatterns) {
        let val1 = boxes[pattern[0]].innerText;
        let val2 = boxes[pattern[1]].innerText;
        let val3 = boxes[pattern[2]].innerText;

        if (val1 !== "" && val2 !== "" && val3 !== "") {
            if (val1 === val2 && val2 === val3) {
                disableBoxes();
                winMssg.innerText = "Congratulations!" + "The Winner is " + val1;
                winMssg.style.display = "block"


            }
            if (checkDraw()){
                winMssg.innerText = "Oops, Draw!"
                winMssg.style.display = "block"
            }
    }
}
}
        
const enableBoxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerHTML = "";
        turnX = true;
    }
    winMssg.style.display = "none"
}
resetBtn.addEventListener("click", enableBoxes);

const checkDraw = () => {
    for (let i = 0; i < boxes.length; i++) {
        if (boxes[i].innerText === "") {
            return false;
        }
    }


    return true;  
}
