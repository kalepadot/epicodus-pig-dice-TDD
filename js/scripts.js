// Business Logic For Dice Roll

function Player1() {
  this.roll = 0
}

Player1.prototype.diceRoll = function() {
  var numberVal =  Math.floor( Math.random() *6) + 1;
  if (numberVal === 1){
    return numberVal * 0
  }
   return this.roll + numberVal
}

  



// User Logic
var turn = new Player1();
$(document).ready(function() {
  $(".rollBtn").click(function(){


   var result = turn.diceRoll();
   $("#p1turn-total").text(result);

    

      
});

});