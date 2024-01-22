function increaseFirst(e) {
  console.log(e);
  var value = parseInt(e.innerHTML);
  e.innerHTML = (value + 1).toString().padStart(2, "0");
}

function increaseSecond(e) {
  var value = parseInt(e.innerHTML);
  e.innerHTML = (value + 1).toString().padStart(2, "0");
}

var secondsSinceStart = 0;
var started = false;

var timer = setInterval(tick, 1000);
function start() {
  if (started) {
    started = false;
    return;
  }
  secondsSinceStart = 0;
  started = true;
  tick();
  clearInterval(timer);
  timer = setInterval(tick, 1000);
}

function tick() {
  if (started) {
    secondsSinceStart++;
    if (started) {
      document.getElementById("timer").innerHTML = `${Math.floor(
        secondsSinceStart / 60
      )
        .toString()
        .padStart(2, "0")}:${(secondsSinceStart % 60)
        .toString()
        .padStart(2, "0")}`;
    }
  }
}
