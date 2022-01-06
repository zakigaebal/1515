let n1 = Math.floor(Math.random() * 100, 10);
let n2 = Math.floor(Math.random() * 100, 10);

document.getElementById("intext").value = n1;
document.getElementById("intext1").value = n2;

let adds = n1 + n2;

function Game() {
  var user = document.getElementById("intext2").value;

  if (user == adds) {
    document.getElementById("ans").innerHTML =
      "Well Done! Your Answer is Correct";
  } else {
    document.getElementById("ans").innerHTML =
      "Correct Answer " + adds + " . Try Again";
  }

  if (user == adds) {
    var user = (document.getElementById("intext2").value = "");
    n1 = Math.floor(Math.random() * 100, 10);
    n2 = Math.floor(Math.random() * 100, 10);
    document.getElementById("intext").value = n1;
    document.getElementById("intext1").value = n2;

    adds = n1 + n2;
  }
}
