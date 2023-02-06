var PO = document.querySelectorAll(".players div img")[0];
var PT = document.querySelectorAll(".players div img")[1];

var PlayerOneName = document.querySelectorAll(".players div h1")[0];
var PlayerTwoName = document.querySelectorAll(".players div h1")[1];

var p1_score = document.querySelector(".scores div #POscore");
var p2_score = document.querySelector(".scores div #PTscore");

var sound = document.querySelector("#myAudio");

var GameWinner = document.querySelector(".winner h2")

var ShuffleBtn = document.querySelector("#Shuffle")

var player_one_score = 0;
var player_two_score = 0;

var PlayerOneNameInput = window.prompt("Enter Player One Name")
var PlayerTwoNameInput = window.prompt("Enter Player Two Name")

if(PlayerOneNameInput.length === 0 || PlayerTwoNameInput.length === 0){
    PlayerOneNameInput = "Player One"
    PlayerTwoNameInput = "Player Two"
}

PlayerOneName.innerHTML = `${PlayerOneNameInput}`
PlayerTwoName.innerHTML = `${PlayerTwoNameInput}`

document.querySelector(".scores div #POname").innerHTML = `${PlayerOneNameInput} Score :`;
document.querySelector(".scores div #PTname").innerHTML = `${PlayerTwoNameInput} Score :`;

function RandomNumberGenrator(){
    PO.setAttribute("src", "./assets/dice.gif");
    PT.setAttribute("src", "./assets/dice.gif");
    setTimeout(()=>{
    var RandomNumberOne = Math.floor(Math.random() * 6) + 1;
    var RandomNumberTwo =  Math.floor(Math.random() * 6) + 1;
    Winner(RandomNumberOne, RandomNumberTwo);
    },1000)
}

function Winner(pOne, pTwo){
    PO.setAttribute("src", `./assets/Dicey-${pOne}.png`);
    PT.setAttribute("src", `./assets/Dicey-${pTwo}.png`);
    if(pOne > pTwo){
        GameWinner.innerHTML = `${PlayerOneNameInput} won the toss`
        player_one_score = 1 + player_one_score
        p1_score.innerHTML = `${player_one_score}`

    }else if(pOne < pTwo){
        GameWinner.innerHTML = `${PlayerTwoNameInput} won the toss`
        player_two_score = 1 + player_two_score;
        p2_score.innerHTML = `${player_two_score}`

    }else{
        GameWinner.innerHTML = "it's a draw"
    }

}

function playAudio(){
  
        sound.play();}
    

ShuffleBtn.addEventListener("click",RandomNumberGenrator)






