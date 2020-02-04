export function Player() {
  this.turnScore = 0;
  this.scoreTotal = 0;
  this.scoreTotal2 = 0;
}
Player.prototype.coinFlip = function() {
  var coinValue = (Math.floor(Math.random() * 2) == 0) ? 'Heads' : 'Tails';
  $("#coin-result").text(coinValue); 
};
  
var generateNumber = function() {
  var numberVal = Math.floor( Math.random() *6) + 1;
  return numberVal;
};
  
Player.prototype.diceRoll = function() {
  var roll = generateNumber();
  if (roll !=1)  {
    return this.turnScore += roll;
  } else if (roll === 1) {
    $(".rollBtn").toggle();
    $(".rollBtn2").toggle();
    $(".hold").toggle();
    $(".hold2").toggle();
    return this.turnScore *= 0;
  }
};

Player.prototype.holdTransfer = function() {
  if (this.scoreTotal + this.turnScore >= 100)  {
    alert("PLAYER 1 WINS!");
  } else {
    return this.scoreTotal += this.turnScore;
  }
};
   
Player.prototype.clearTurnScore = function() {
  this.turnScore *=0;
  return this.turnScore;
};
// player2
Player.prototype.holdTransfer2 = function() {
  if (this.scoreTotal2 + this.turnScore >= 100)  {
    alert("PLAYER 2 WINS!");
  }
  return this.scoreTotal2 += this.turnScore;
};
  
Player.prototype.clearTurnScore2 = function() {
  this.turnScore *=0;
  return this.turnScore;
};