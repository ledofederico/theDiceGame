var xVar1 = Math.trunc(Math.random() * 6) + 1;
var xVar2 = Math.trunc(Math.random() * 6) + 1;

checkIMG(xVar1);
checkIMG2(xVar2);

if(xVar1 > xVar2)
{
  document.body.firstElementChild.innerHTML = "Player 1 Wins! "// + xVar1 + " vs " + xVar2
}
else if (xVar1 < xVar2) {
  document.body.firstElementChild.innerHTML = "Player 2 Wins! "// + xVar1 + " vs " + xVar2
}
else {
  document.body.firstElementChild.innerHTML = "Draw "// + xVar1 + " vs " + xVar2
}

function checkIMG(xvar)
{
  switch (xvar) {
    case 1:
      document.getElementById("img-01").src = "images/dice1.png";
      break;
    case 2:
      document.getElementById("img-01").src = "images/dice2.png";
      break;
    case 3:
      document.getElementById("img-01").src = "images/dice3.png";
      break;
    case 4:
      document.getElementById("img-01").src = "images/dice4.png";
      break;
    case 5:
      document.getElementById("img-01").src = "images/dice5.png";
      break;
    case 6:
      document.getElementById("img-01").src = "images/dice6.png";
      break;
  }
}

function checkIMG2(xvar)
{
  switch (xvar) {
    case 1:
      document.getElementById("img-02").src = "images/dice1.png";
      break;
    case 2:
      document.getElementById("img-02").src = "images/dice2.png";
      break;
    case 3:
      document.getElementById("img-02").src = "images/dice3.png";
      break;
    case 4:
      document.getElementById("img-02").src = "images/dice4.png";
      break;
    case 5:
      document.getElementById("img-02").src = "images/dice5.png";
      break;
    case 6:
      document.getElementById("img-02").src = "images/dice6.png";
      break;
  }
}
