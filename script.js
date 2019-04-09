function myFunction() {
  var plus = document.getElementById("plus");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("+");

  if (plus.style.display === "none") {
    plus.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    plus.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}
$(document).ready(function() {
  $("button").click(function() {
    $("p").toggle();
  });
});
