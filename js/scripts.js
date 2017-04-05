//Back End//

//random die number generator
var dieRoll = function() {
  return Math.floor(Math.random() * 6) + 1;
}


//Front End//
$(document).ready(function() {

  var holdTotal = 0;

  $("#rollBtn").click(function(){
    var newRoll = dieRoll();
    holdTotal = newRoll + holdTotal;
    $("#turn-roll").append(newRoll + ", ");
    $("#turn-score").append(holdTotal);
  });

  $("#holdBtn").click(function(){
    $("#player-total").append("hold pressed");
  });

});
