let n1 = Math.floor(Math.random() * 100, 10);
let n2 = Math.floor(Math.random() * 100, 10);

document.getElementById("intext").value = n1;
document.getElementById("intext1").value = n2;

let divide = n1 / n2;

function Game() {
  var user = document.getElementById("intext2").value;

  if (user == divide) {
    document.getElementById("ans").innerHTML =
      "Well Done! Your Answer is Correct";
  } else {
    document.getElementById("ans").innerHTML =
      "Correct Answer " + divide + " . Try Again";
    audio.play();
  }

  var user = (document.getElementById("intext2").value = "");

  n1 = Math.floor(Math.random() * 100, 10);
  n2 = Math.floor(Math.random() * 100, 10);

  document.getElementById("intext").value = n1;
  document.getElementById("intext1").value = n2;

  divide = n1 / n2;
}
