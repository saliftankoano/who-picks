


alert("We'll help you decide who picks by playing Dice!");
var player1 = prompt("Enter Player 1's name: ");
var player2 = prompt("Enter Player 2's name: ");
var p1 = document.getElementById("player-1");
var p2 = document.getElementById("player-2");
p1.innerHTML= player1;
p2.innerHTML= player2;

function rollDice(){
    var randomNumber1 = Math.floor(Math.random()*6) +1;
    console.log(randomNumber1);
    var randomImage1 = "./dice"+randomNumber1+".png";
    var img1 = document.querySelectorAll("img")[0].src= randomImage1;

    var randomNumber2 = Math.floor(Math.random()*6) +1;
    console.log(randomNumber2);
    var randomImage2 = "./dice"+randomNumber2+".png";
    var img2 = document.querySelectorAll("img")[1].src= randomImage2;
    var h1 = document.querySelector("h1");

    //Display The Winner
    var name1 = document.getElementById("player-1").innerText;
    var name2 = document.getElementById("player-2").innerText;
    if (randomNumber1 > randomNumber2){
        h1.textContent= "🥳 "+name1+" Wins !";
    }
    else if (randomNumber2 > randomNumber1){
        h1.textContent= name2+" Wins! 🥳";
    }
    else{
        h1.textContent= "😲 Draw 😲";
    }
}
