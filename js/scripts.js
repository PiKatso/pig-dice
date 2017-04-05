//Back End//

//random die number generator
var dieRoll = function() {
  return Math.floor(Math.random() * 6) + 1;
}

//Front End//
$(document).ready(function() {

  $("#user-roll").click(function(){
    $("#turn-score").append(dieRoll());
  });

  $("#user-hold").click(function(){
    $("#player-total").append("Hold pressed");
  });

});
