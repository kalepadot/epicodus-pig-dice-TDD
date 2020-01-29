// Business Logic For Dice Roll

// DiceValue.prototype.generateNumber = function(){
//   return Math.floor(Math.random() * 6) + 1;
function Player1() {
  this.roll = 0
}

Player1.prototype.diceRoll = function() {
  var numberVal =  Math.floor( Math.random() *6) + 1;
  return this.roll + numberVal
}

  



// User Logic
var turn = new Player1();
$(document).ready(function() {
  $(".rollBtn").click(function(){
    // var player1score = diceRoll();

   var result = turn.diceRoll();
   $("#p1turn-total").text(result);

    

      
});

});