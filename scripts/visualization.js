var speed = 1000;

inp_aspeed.addEventListener("input", barSpeed);

function barSpeed() {
  var arraySpeed = inp_aspeed.value;
  switch (parseInt(arraySpeed)) {
    case 1:
      speed = 1;
      break;
    case 2:
      speed = 10;
      break;
    case 3:
      speed = 100;
      break;
    case 4:
      speed = 1000;
      break;
    case 5:
      speed = 10000;
      break;
  }
  // Decrease numerator to increase speed.  
  delayTime = 10000 / (Math.floor(arraySize / 10) * speed); //Decrease numerator to increase speed.
}

// Decrease numerator to increase speed.
var delayTime = 10000 / (Math.floor(arraySize / 10) * speed);

// This is updated on every div change so that visualization is visible.
var c_delay = 0;

function divUpdate(bar, height, color) {
  window.setTimeout(function () {
    bar.style =
      " margin:0% " +
      marginSize +
      "%; width:" +
      (100 / arraySize - 2 * marginSize) +
      "%; height:" +
      height +
      "%; background-color:" +
      color +
      ";";
  }, (c_delay += delayTime));
}

function enableButton() {
  window.setTimeout(function () {
    for (var i = 0; i < algorthms.length; i++) {
      algorthms[i].classList = [];
      algorthms[i].classList.add("btn", "btn-outline-dark");

      algorthms[i].disabled = false;
      inp_as.disabled = false;
      newArrBtn.disabled = false;
      inp_aspeed.disabled = false;
    }
  }, (c_delay += delayTime));
}
