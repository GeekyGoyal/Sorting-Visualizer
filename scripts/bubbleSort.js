function Bubble() {
  for (var i = 0; i < arraySize - 1; i++) {
    for (var j = 0; j < arraySize - i - 1; j++) {
      divUpdate(arr[j], barHeight[j], "yellow"); 

      if (barHeight[j] > barHeight[j + 1]) {
        divUpdate(arr[j], barHeight[j], "red"); 
        divUpdate(arr[j + 1], barHeight[j + 1], "red"); 

        var temp = barHeight[j];
        barHeight[j] = barHeight[j + 1];
        barHeight[j + 1] = temp;

        divUpdate(arr[j], barHeight[j], "red"); 
        divUpdate(arr[j + 1], barHeight[j + 1], "red"); 
      }
      divUpdate(arr[j], barHeight[j], "blue");
    }
    divUpdate(arr[j], barHeight[j], "green"); 
  }
  divUpdate(arr[0], barHeight[0], "green"); 

  enableButton();
}