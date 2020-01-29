// Business Logic For Dice Roll

function Player1() {
  this.turnScore = 0;
}

generateNumber = function() {
  var numberVal = Math.floor( Math.random() *6) + 1;
  return numberVal;
}

Player1.prototype.diceRoll = function() {
  var roll = generateNumber();
  if (roll !=1)  {
    return this.turnScore += roll;
  } else if (roll = 1)  {
    return this.turnScore *= 0;
    }
  }



// User Logic
var turn = new Player1();
$(document).ready(function() {
  $(".rollBtn").click(function(){

   var result = turn.diceRoll();
   $("#p1turn-total").text(result);

    

      
});

});