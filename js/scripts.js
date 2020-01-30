// Business Logic For Dice Roll

function Player() {
  this.turnScore = 0;
  this.scoreTotal = 0;
  this.scoreTotal2 = 0;
}



generateNumber = function() {
  var numberVal = Math.floor( Math.random() *6) + 1;
  return numberVal;
}

Player.prototype.diceRoll = function() {
  var roll = generateNumber();
  if (roll !=1)  {
    return this.turnScore += roll;
  } else if (roll = 1)  {
    return this.turnScore *= 0;
    }
  }
  Player.prototype.holdTransfer = function() {
   var holdNumber = this.turnScore;
   return this.scoreTotal += holdNumber;
  }
 
Player.prototype.clearTurnScore = function() {
  this.turnScore *=0;
  return this.turnScore;
}
// player2
Player.prototype.holdTransfer2 = function() {
  var holdNumber = this.turnScore;
  return this.scoreTotal2 += holdNumber;
 }

Player.prototype.clearTurnScore2 = function() {
 this.turnScore *=0;
 return this.turnScore;
}
// User Logic
var turn = new Player;
 

$(document).ready(function() {
  // player 1 
  $(".rollBtn").click(function(){
   var result = turn.diceRoll();
   $("#p1turn-total").text(result);
  });
  $(".hold").click(function()  {
    var result2 = turn.holdTransfer();
    var result3 = turn.clearTurnScore();


    $("#p1score-total").text(result2);

    $("#p1turn-total").text(result3);
  });
  // player2
  $(".rollBtn2").click(function() {
    var result = turn.diceRoll();
    $("#p2turn-total").text(result);
  });
  $(".hold2").click(function(){
    var result2 = turn.holdTransfer2();
    var result3 = turn.clearTurnScore2();
    $("#p2score-total").text(result2);
    $("#p2turn-total").text(result3);
  });
});