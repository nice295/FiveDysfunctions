$(function () {
  $("#alert").hide();
  $("#result-panel").hide();

  $(".js-done").on("click", function(e) {
    e.preventDefault(); 

    var _input = $("input");

    for (var i=1; i<= 15; ++i) {
      if ($(':radio[name="question' + i + '"]:checked').val()) {
        //console.log("question"+i+" checked");
      }
      else {
        console.log("question"+i+" unchecked"); 
        $("#alert-text").text(i + "번 항목을 입력해 주세요.");
        $("#alert").show();   
        return false;
      }
    }
    $("#alert").hide(); 

    var group1Sum = parseInt($(':radio[name="question4"]:checked').val()) +
    parseInt($(':radio[name="question6"]:checked').val()) + 
    parseInt($(':radio[name="question12"]:checked').val());

    var group2Sum = parseInt($(':radio[name="question1"]:checked').val()) +
    parseInt($(':radio[name="question7"]:checked').val()) + 
    parseInt($(':radio[name="question10"]:checked').val());

    var group3Sum = parseInt($(':radio[name="question3"]:checked').val()) +
    parseInt($(':radio[name="question8"]:checked').val()) + 
    parseInt($(':radio[name="question13"]:checked').val());

    var group4Sum = parseInt($(':radio[name="question2"]:checked').val()) +
    parseInt($(':radio[name="question11"]:checked').val()) + 
    parseInt($(':radio[name="question14"]:checked').val());

    var group5Sum = parseInt($(':radio[name="question5"]:checked').val()) +
    parseInt($(':radio[name="question9"]:checked').val()) + 
    parseInt($(':radio[name="question15"]:checked').val());

    console.log("신뢰의 결핍: " + group1Sum);
    console.log("충돌의 두려움: " + group2Sum);
    console.log("헌신의 결핍: " + group3Sum);
    console.log("책임의 회피: " + group4Sum);
    console.log("결과에 대한 무관심: " + group5Sum);      

    $("#result").html(
      "<p><strong>신뢰의 결핍: </strong>" + group1Sum + "점</p>" +
      "<p><strong>충돌의 두려움: </strong>" + group2Sum + "점</p>" +
      "<p><strong>헌신의 결핍: </strong>" + group3Sum + "점</p>" +
      "<p><strong>책임의 회피: </strong>" + group4Sum + "점</p>" +
      "<p><strong>결과에 대한 무관심: </strong>" + group5Sum + "점</p>"
      );
    $("#result-panel").show();

    document.body.scrollTop = document.body.scrollHeight;
  });

$(".js-alert-close").on("click", function(e) {
  $("#alert").hide();       
}); 
});