window.onload = function()
{

let check = [[0,1,2],[3,4,5], [6,7,8], 
    [0,3,6], [1,4,7], [2,5,8], [0,4,8] , [2,4,6]];
let status = true;
let board = document.getElementById("board");
let button = document.getElementsByClassName("button");
let childrenDiv = board.querySelectorAll("div");
let xWins = 0;
let oWins = 0;

childrenDiv.forEach((element) => {
    console.log(element);
    element.setAttribute("class", "square");
});

result = 0;

childrenDiv.forEach((element) => {
    element.onclick = () => {

        if (result == 0) {

        if ((element.innerHTML == "X") || (element.innerHTML == "O")) {
            element.innerHTML = element.innerHTML;
        }
        else {
            if (status) {
                element.innerHTML = "X";
                element.classList.add("X"); 
                status  = false;
            }
            else if (status == false) {
                element.innerHTML = "O";
                element.classList.add("O");
                status  = true;
            }
            
        }
    }

        result = winCheck ();

        if (result == 1) {
            document.getElementById("status").classList.add("you-won");
            document.getElementById("status").innerHTML= "Congratulations! " + "X" + " is the Winner!"
        }

        else if (result == 2) {
            document.getElementById("status").classList.add("you-won");
            document.getElementById("status").innerHTML= "Congratulations! " + "O" + " is the Winner!"

        }
    }
    element.onmouseover = () => {
        element.classList.add("hover");
    }
    element.onmouseout = () => {
        element.classList.remove("hover");
    }
});
    let winCheck = () => {
        for (item = 0; check.length; item++){
    
            check[item].forEach(element => {
                if (childrenDiv[element].classList.contains("X")) {
                    xWins+=1;
                }
                else if (childrenDiv[element].classList.contains("O")) {
                    oWins+=1;
                }
            });
            if (xWins == 3){
                return 1;
            }
            else  if (oWins == 3){
                return 2;
            }
            xWins = 0;
            oWins = 0;
            if (item < check.length - 1){
                continue;
            }
            return 0;
        }
    }
     

    document.getElementsByClassName("btn")[0].addEventListener("click", function(){
        for (let x = 0; x< childrenDiv.length; x++){
            childrenDiv[x].innerHTML = " ";
            window.location.reload();
    }

});

};