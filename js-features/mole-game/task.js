let holes = document.querySelectorAll('.hole')
let countDeads = 0;
let countLosts = 0;
function updateStatistic(){
  countDeads = 0;
  countLosts = 0;
  document.getElementById("dead").textContent = countDeads;
  document.getElementById("lost").textContent = countLosts;
}
for (let hole of holes) {
  hole.onclick = function catchMole () {
    if (hole.classList.contains( 'hole_has-mole' )) {
      countDeads++
      document.getElementById("dead").textContent = countDeads;
      } else {
      countLosts++
      document.getElementById("lost").textContent = countLosts;
    }
    if (countDeads === 10) {
      alert("Победа!")
      updateStatistic();
      return
    } else if (countLosts === 5) {
      alert("Поражение!")
      updateStatistic();
      return
    }
  }
}