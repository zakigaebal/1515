let n1 = Math.floor(Math.random() * 100, 10);
let n2 = Math.floor(Math.random() * 100, 10);
const audio = document.getElementById("myAudio");

document.getElementById("intext").value = n1;
document.getElementById("intext1").value = n2;

let subtract = n1 * n2;

function Game() {
  var user = document.getElementById("intext2").value;

  if (user == subtract) {
    document.getElementById("ans").innerHTML =
      "Well Done! Your Answer is Correct";
  } else {
    document.getElementById("ans").innerHTML =
      "Correct Answer " + subtract + " . Try Again";
    audio.play();
  }

  var user = (document.getElementById("intext2").value = "");

  n1 = Math.floor(Math.random() * 100, 10);
  n2 = Math.floor(Math.random() * 100, 10);

  document.getElementById("intext").value = n1;
  document.getElementById("intext1").value = n2;

  subtract = n1 * n2;
}

function generate_equation() {
  var num1 = Math.floor(Math.random() * 13),
    num2 = Math.floor(Math.random() * 13),
    dummyAnswer1 = Math.floor(Math.random() * 50),
    dummyAnswer2 = Math.floor(Math.random() * 50),
    allAnswers = [],
    switchAnswers = [];

  answer = eval(num1 * num2);

  document.getElementById("num1").innerHTML = num1;
  document.getElementById("num2").innerHTML = num2;

  allAnswers = [answer, dummyAnswer1, dummyAnswer2];

  for (i = allAnswers.length; i--; ) {
    switchAnswers.push(
      allAnswers.splice(Math.floor(Math.random() * (i + 1)), 1)[0]
    );
  }

  option1.innerHTML = switchAnswers[0];
  option2.innerHTML = switchAnswers[1];
  option3.innerHTML = switchAnswers[2];
}

const option1 = document.getElementById("option1");

option1.addEventListener("click", function () {
  generate_equation();
});
