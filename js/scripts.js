// Business Logic For Dice Roll

function Player1() {
  this.turnScore = 0;
  this.scoreTotal = 0;
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
  Player1.prototype.holdTransfer = function() {
   var holdNumber = this.turnScore;
   return this.scoreTotal + holdNumber;
    // return this.scoreTotal;
  }
Player1.prototype.clearTurnScore = function() {
  this.turnScore *=0;
  return this.turnScore;
}
  



// User Logic
var turn = new Player1();
$(document).ready(function() {
  $(".rollBtn").click(function(){
   var result = turn.diceRoll();
   $("#p1turn-total").text(result);
  });
  $(".hold").click(function()  {
    // event.preventDefault();
    var result2 = turn.holdTransfer();
    var result3 = turn.clearTurnScore();
    // clearTurnScore();
    $("#p1score-total").text(result2);
    $("#p1turn-total").text(result3);
   
  });
});