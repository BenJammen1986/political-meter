$(function(){
  $("#userInput").submit(function(){
    event.preventDefault();
    var score = 0;
  score += parseInt($("input:radio[name=trump]:checked").val());
  score += parseInt($("input:radio[name=gun]:checked").val());
  score += parseInt($("input:radio[name=america]:checked").val());
  score += parseInt($("input:radio[name=immigrants]:checked").val());
  score += parseInt($("input:radio[name=flat]:checked").val());
  score += parseInt($("input:radio[name=global]:checked").val());
  score += parseInt($("input:radio[name=wage]:checked").val());
  score += parseInt($("input:radio[name=Dogs]:checked").val());
  score += parseInt($("input:radio[name=clothes]:checked").val());
  score += parseInt($("input:radio[name=population]:checked").val());
  console.log(score);


  if (score>=25)
  {$("#answer1").show()
  $("#answer2").hide()
  $("#answer3").hide()}

  else if (score>=20 && score<25)
  {$("#answer2").show()
  $("#answer1").hide()
  $("#answer3").hide()}
  else if (score<19)
  {$("#answer3").show()
  $("#answer2").hide()
  $("#answer1").hide()}



});

});
