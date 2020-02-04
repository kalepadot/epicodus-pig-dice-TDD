import { Player } from './pig-dice.js';
import $ from "jquery";
import "bootstrap";
import "./styles.css";




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

    $(".hold").toggle();
    $(".hold2").toggle();
    $(".rollBtn").toggle();
    $(".rollBtn2").toggle();

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
    $(".hold").toggle();
    $(".hold2").toggle();
    $(".rollBtn").toggle();
    $(".rollBtn2").toggle();
  });
  $("#coinBtn").click(function(){
    turn.coinFlip();
   
  });
});