function Insertion() {
    for (var j = 0; j < arraySize; j++) {
      divUpdate(arr[j], barHeight[j], "yellow"); 
  
      var key = barHeight[j];
      var i = j - 1;
      while (i >= 0 && barHeight[i] > key) {
        divUpdate(arr[i], barHeight[i], "red"); 
        divUpdate(arr[i + 1], barHeight[i + 1], "red"); 
  
        barHeight[i + 1] = barHeight[i];
  
        divUpdate(arr[i], barHeight[i], "red"); 
        divUpdate(arr[i + 1], barHeight[i + 1], "red"); 
  
        divUpdate(arr[i], barHeight[i], "blue"); 
        if (i == j - 1) {
          divUpdate(arr[i + 1], barHeight[i + 1], "yellow"); 
        } else {
          divUpdate(arr[i + 1], barHeight[i + 1], "blue"); 
        }
        i -= 1;
      }
      barHeight[i + 1] = key;
  
      for (var t = 0; t < j; t++) {
        divUpdate(arr[t], barHeight[t], "green"); 
      }
    }
    divUpdate(arr[j - 1], barHeight[j - 1], "green"); 
  
    enableButton();
  }
  