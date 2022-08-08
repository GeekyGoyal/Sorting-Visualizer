function Merge() {
    divide(0, arraySize - 1);
  
    enableButton();
  }
  
  function mergeSort(start, mid, end) {
    var p = start,
      q = mid + 1;
  
    var Arr = [],
      k = 0;
  
    for (var i = start; i <= end; i++) {
      if (p > mid) {
        Arr[k++] = barHeight[q++];
        divUpdate(arr[q - 1], barHeight[q - 1], "red");
      } else if (q > end) {
        Arr[k++] = barHeight[p++];
        divUpdate(arr[p - 1], barHeight[p - 1], "red");
      } else if (barHeight[p] < barHeight[q]) {
        Arr[k++] = barHeight[p++];
        divUpdate(arr[p - 1], barHeight[p - 1], "red");
      } else {
        Arr[k++] = barHeight[q++];
        divUpdate(arr[q - 1], barHeight[q - 1], "red");
      }
    }
  
    for (var t = 0; t < k; t++) {
      barHeight[start++] = Arr[t];
      divUpdate(arr[start - 1], barHeight[start - 1], "green");
    }
  }
  
  function divide(start, end) {
    if (start < end) {
      var mid = Math.floor((start + end) / 2);
      divUpdate(arr[mid], barHeight[mid], "yellow");
  
      divide(start, mid);
      divide(mid + 1, end);
  
      mergeSort(start, mid, end);
    }
  }
  