let n1 = Math.floor(Math.random() * 100, 10);
let n2 = Math.floor(Math.random() * 100, 10);

document.getElementById("intext").value = n1;
document.getElementById("intext1").value = n2;

let subtract = n1 - n2;

function Game() {
  var user = document.getElementById("intext2").value;

  if (user == subtract) {
    document.getElementById("ans").innerHTML =
      "Well Done! Your Answer is Correct";
  } else {
    document.getElementById("ans").innerHTML =
      "Correct Answer " + subtract + " . Try Again";
  }

  if (user == subtract) {
    var user = (document.getElementById("intext2").value = "");
    n1 = Math.floor(Math.random() * 100, 10);
    n2 = Math.floor(Math.random() * 100, 10);

    document.getElementById("intext").value = n1;
    document.getElementById("intext1").value = n2;

    subtract = n1 - n2;
  }
}
