function Heap() {
    
    heapSort();
  
    enableButton();
  }
  
  function swap(i, j) {
    divUpdate(arr[i], barHeight[i], "red"); 
    divUpdate(arr[j], barHeight[j], "red"); 
  
    var temp = barHeight[i];
    barHeight[i] = barHeight[j];
    barHeight[j] = temp;
  
    divUpdate(arr[i], barHeight[i], "red"); //Height update
    divUpdate(arr[j], barHeight[j], "red"); //Height update
  
    divUpdate(arr[i], barHeight[i], "blue"); 
    divUpdate(arr[j], barHeight[j], "blue"); 
  }
  
  function maxHeapify(n, i) {
    var largest = i;
    var l = 2 * i + 1;
    var r = 2 * i + 2;
  
    if (l < n && barHeight[l] > barHeight[largest]) {
      if (largest != i) {
        divUpdate(arr[largest], barHeight[largest], "blue"); 
      }
  
      largest = l;
  
      divUpdate(arr[largest], barHeight[largest], "red"); 
    }
  
    if (r < n && barHeight[r] > barHeight[largest]) {
      if (largest != i) {
        divUpdate(arr[largest], barHeight[largest], "blue"); 
      }
  
      largest = r;
  
      divUpdate(arr[largest], barHeight[largest], "red"); 
    }
  
    if (largest != i) {
      swap(i, largest);
  
      maxHeapify(n, largest);
    }
  }
  
  function heapSort() {
    for (var i = Math.floor(arraySize / 2) - 1; i >= 0; i--) {
      maxHeapify(arraySize, i);
    }
  
    for (var i = arraySize - 1; i > 0; i--) {
      swap(0, i);
      divUpdate(arr[i], barHeight[i], "green"); 
      divUpdate(arr[i], barHeight[i], "yellow"); 
  
      maxHeapify(i, 0);
  
      divUpdate(arr[i], barHeight[i], "blue"); 
      divUpdate(arr[i], barHeight[i], "green"); 
    }
    divUpdate(arr[i], barHeight[i], "green"); 
  }
  
  