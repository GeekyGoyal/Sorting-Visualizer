/*
    *****************
    MADE BY:- APARNA GOYAL
    
    *****************
*/

var inp_as = document.getElementById("arrSize"), arraySize = inp_as.value;
var newArrBtn = document.getElementById("newArr");
var inp_aspeed = document.getElementById("arrSpeed");

var algorthms = document.querySelectorAll(".algos button");

var barHeight = [];
var arr = [];
var marginSize;

var bar = document.getElementById("array_container");
bar.style = "flex-direction:row";

newArrBtn.addEventListener("click", createBars);
inp_as.addEventListener("input", updateArr);

function createBars() {

  bar.innerHTML = "";

  for (var i = 0; i < arraySize; i++) {
    barHeight[i] = Math.floor(Math.random() * 0.5 * (inp_as.max - inp_as.min)) + 10;
    arr[i] = document.createElement("div");
    bar.appendChild(arr[i]);
    marginSize = 0.1;
    arr[i].style =
      " margin:0% " +
      marginSize +
      "%; background-color:blue; width:" +
      (100 / arraySize - 2 * marginSize) +
      "%; height:" +
      barHeight[i] +
      "%;";
  }
}

function updateArr() {
  arraySize = inp_as.value;
  createBars();
}

window.onload = updateArr();

// Running the appropriate algorithm.
for (var i = 0; i < algorthms.length; i++) {
  algorthms[i].addEventListener("click", runalgo);
}

function disableButton() {
  for (var i = 0; i < algorthms.length; i++) {
    algorthms[i].classList = [];
    algorthms[i].classList.add("btn", "btn-outline-dark", "disabled");

    algorthms[i].disabled = true;
    inp_as.disabled = true;
    newArrBtn.disabled = true;
    inp_aspeed.disabled = true;
  }
}

function runalgo() {
  disableButton();

  this.classList.add("btnSelected");
  switch (this.innerHTML) {
    case "Bubble Sort":
      Bubble();
      break;
    case "Selection Sort":
      Selection_sort();
      break;
    case "Insertion Sort":
      Insertion();
      break;
    case "Merge Sort":
      Merge();
      break;
    case "Quick Sort":
      Quick();
      break;
    case "Heap Sort":
      Heap();
      break;
  }
}
