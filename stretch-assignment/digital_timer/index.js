let secondTens = document.getElementById("secondTens");
let secondOnes = document.getElementById("secondOnes");
let msHundreds = document.getElementById("msHundreds");
let msTens = document.getElementById("msTens");

let st = 0;
let so = 0;
let mh = 0;
let mt = 0;

let x;

let timer = () => {
  x = window.setInterval("view()", 10);
}

view = () => {
  if (st == 1) {
    document.querySelectorAll(".digit").forEach(x => (x.classList.add("redDigit")));
    return clearTimeout(x);
  } else if (so === 9) {
    st++;
    so = 0;
    secondTens.textContent = st;
    secondOnes.textContent = so;
  } else if (mh >= 9) {
    so++;
    mh = 0;
    secondOnes.textContent = so;
    msHundreds.textContent = mh;
  } else if (mt >= 9) {
    mh++;
    mt = 0;
    msHundreds.textContent = mh;
    msTens.textContent = mt;
  } else {
    mt++;
    msTens.textContent = mt;
  }
}
