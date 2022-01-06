let n1 = Math.floor(Math.random() * 100, 10);
let n2 = Math.floor(Math.random() * 100, 10);

document.getElementById("intext").value = n1;
document.getElementById("intext1").value = n2;

let adds = n1 + n2;

function Game() {
  var user = document.getElementById("intext2").value;
  var ans = document.getElementById("ans").value;

  if (user == adds) {
    document.getElementById("ans").innerHTML = "정답입니다!";
  } else {
    document.getElementById("ans").innerHTML =
      "정답은 " + adds + " 다시해보세요";
  }

  if (user == adds) {
    var user = (document.getElementById("intext2").value = "");
    n1 = Math.floor(Math.random() * 100, 10);
    n2 = Math.floor(Math.random() * 100, 10);
    document.getElementById("intext").value = n1;
    document.getElementById("intext1").value = n2;

    adds = n1 + n2;
  } else {
    var user = (document.getElementById("intext2").value = "");
  }
}
