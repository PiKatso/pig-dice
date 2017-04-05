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
    let newRoll = dieRoll();

    if ( newRoll === 1 ) {
      turnTotal = 0;
      $("#turn-roll").text("0, ");
    } else if ( newRoll != 1) {
      turnTotal = newRoll + turnTotal;
      $("#turn-roll").append(newRoll + ", ");
    } else {
      console.log("what happened!?")
    }

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

    if (playerTotal >= 100) {       //game over, add class and show winner//
      $("body").addClass("winner");
      $("#winner").show();
    }
  });

  $("#resetBtn").click(function(){          //reset page//
    location.reload();
  });

});
