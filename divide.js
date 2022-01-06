let n1 = Math.floor(Math.random() * 100, 10);
let n2 = Math.floor(Math.random() * 100, 10);

document.getElementById("intext").value = n1;
document.getElementById("intext1").value = n2;

let divide = n1 / n2;

function Game() {
  var user = document.getElementById("intext2").value;

  if (user == divide) {
    document.getElementById("ans").innerHTML = "정답입니다!";
  } else {
    document.getElementById("ans").innerHTML =
      "정답은 " + divide + "  다시 적어주세요:)";
  }

  var user = (document.getElementById("intext2").value = "");

  n1 = Math.floor(Math.random() * 100, 10);
  n2 = Math.floor(Math.random() * 100, 10);

  document.getElementById("intext").value = n1;
  document.getElementById("intext1").value = n2;

  divide = n1 / n2;
}
