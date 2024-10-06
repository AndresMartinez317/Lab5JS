const getCelsius = (Temp) => ((Temp-32)*(5/9));

  console.log(getCelsius(32));

 function MinMax(Arr) {
  
    let max = Math.max(...Arr);
    let min =  Math.min(...Arr);
    const obj = {Min: min, Max: max};
    return obj;
  } 
  let Arr = [1,2,3,4,5];
  console.log(MinMax(Arr));

  (function (length = 10, width = 5) {
    const total = length*width;
    console.log("The area of a rectangle with a length of "+ length + " and a width of "+ width+ " is "+ total);
  })();
  