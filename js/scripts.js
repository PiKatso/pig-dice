//Back End//

//random die number generator
var dieRoll = function() {
  return Math.floor(Math.random() * 6) + 1;
}


//Front End//
$(document).ready(function() {

  var playerTotal = 0;
  var turnTotal = 0;

  $("#rollBtn").click(function(){

    var newRoll = dieRoll();

    if ( newRoll === 1 ) {
      turnTotal = 0;
    } else if ( newRoll != 1) {
      turnTotal = newRoll + turnTotal;
    } else {
      console.log("what happened!?")
    }

    $("#turn-roll").append(newRoll + ", ");
    $("#turn-score").text("");
    $("#turn-score").append(turnTotal);
  });

  $("#holdBtn").click(function(){

    playerTotal += turnTotal;
    // reset turn-total for a new die roll
    turnTotal = 0;
    $("#turn-roll").text("");
    $("#turn-score").text("");
    $("#player-total").text("");
    $("#player-total").append(playerTotal);
  });

});
