console.log("Working!");
let objectArray = [
  {
    number: "Question 1",
    link: "https://www.youtube.com/embed?v=CMyQqQbjknM&feature=youtu.be",
    comment: "Comment 1",
    grade: "0",
  },
  {
    number: "Question 2",
    link: "https://www.youtube.com/embed?v=i1D0uHRxiIY&t=598s",
    comment: "Comment 2",
    grade: "0",
  },
  {
    number: "Question 3",
    link: "https://www.youtube.com/embed?v=h2kBtivgV_I",
    comment: "Comment 3",
    grade: "0",
  },
  {
    number: "Question 4",
    link: "https://www.youtube.com/embed?v=hGpT3PN00oc",
    comment: "Comment 4",
    grade: "0",
  },
  {
    number: "Question 5",
    link: "https://www.youtube.com/embed?v=-oOlAGKBXnA",
    comment: "Comment 5",
    grade: "0",
  },
];
// Tracks the question number to change and store grade
var qnumber = 0;
function loadIframe(url) {
  var $iframe = $("#videobox");
  $iframe.html(
    '<iframe id="videobox" ' +
      'width="100%" height="100%" frameborder="0" ' +
      'marginheight="0" marginwidth="0" ' +
      'src="' +
      url +
      "></iframe>"
  );
}
function gradeClick(num, qnumber) {
  document.getElementById("score").innerText = num;
  objectArray[this.qnumber].grade = num;
}
$(document).ready(function () {
  $("#one").click(function () {
    qnumber = 0;
    $("#videobox1").css("display", "grid");
    $("#qno").text(objectArray[0].number);
    $("#comm").val(objectArray[0].comment);
    $("#score").text(objectArray[0].grade);
  });
  $("#two").click(function () {
    loadIframe(objectArray[1].link);
    qnumber = 1;
    $("#videobox").attr("src", objectArray[1].link);
    $("#qno").text(objectArray[1].number);
    $("#comm").val(objectArray[1].comment);
    $("#score").text(objectArray[1].grade);
  });
  $("#three").click(function () {
    loadIframe(objectArray[2].link);
    qnumber = 2;
    $("#videobox").attr("src", objectArray[2].link);
    $("#qno").text(objectArray[2].number);
    $("#comm").val(objectArray[2].comment);
    $("#score").text(objectArray[2].grade);
  });
  $("#four").click(function () {
    loadIframe(objectArray[3].link);
    qnumber = 3;
    $("#videobox").attr("src", objectArray[3].link);
    $("#qno").text(objectArray[3].number);
    $("#comm").val(objectArray[3].comment);
    $("#score").text(objectArray[3].grade);
  });
  $("#five").click(function () {
    qnumber = 4;
    loadIframe(objectArray[4].link);
    $("#videobox").attr("src", objectArray[4].link);
    $("#qno").text(objectArray[4].number);
    $("#comm").val(objectArray[4].comment);
    $("#score").text(objectArray[4].grade);
  });
});
