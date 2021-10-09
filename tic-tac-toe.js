window.onload = function()
{
var status = true;

let board = document.getElementById("board");
console.log(board);

let button = document.getElementsByClassName("button");

let childrenDiv = board.querySelectorAll("div")

childrenDiv.forEach((element) => {
    console.log(element);
    element.setAttribute("class", "square");
});

childrenDiv.forEach((element) => {
    element.onclick = () => {
        if (status == true)  {
            element.classList.remove("O");
            element.classList.add("X");
            element.innerHTML = "X";
            status = false;
            console.log(status);
        }

        else if (status == false) {
            element.classList.remove("X");
            element.classList.add("O");
            element.innerHTML = 'O';
            status = true;
            console.log(status);
        }
    }

})







};
    

