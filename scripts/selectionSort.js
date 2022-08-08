function Selection_sort() {
  for (var i = 0; i < arraySize - 1; i++) {
    divUpdate(arr[i], barHeight[i], "red"); 

    minIdx = i;

    for (var j = i + 1; j < arraySize; j++) {
      divUpdate(arr[j], barHeight[j], "yellow"); 

      if (barHeight[j] < barHeight[minIdx]) {
        if (minIdx != i) {
          divUpdate(arr[minIdx], barHeight[minIdx], "blue"); 
        }
        minIdx = j;
        divUpdate(arr[minIdx], barHeight[minIdx], "red"); 
      } 
      else {
        divUpdate(arr[j], barHeight[j], "blue"); 
      }
    }

    if (minIdx != i) {
      var temp = barHeight[minIdx];
      barHeight[minIdx] = barHeight[i];
      barHeight[i] = temp;

      divUpdate(arr[minIdx], barHeight[minIdx], "red"); 
      divUpdate(arr[i], barHeight[i], "red"); 
      divUpdate(arr[minIdx], barHeight[minIdx], "blue"); 
    }
    divUpdate(arr[i], barHeight[i], "green"); 
  }
  divUpdate(arr[i], barHeight[i], "green"); 

  enableButton();
}
