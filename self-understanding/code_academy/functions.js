// let's just dig in default parameters
function powerMove(item1 = 'Interesting', twice = 900, power = 'Less Interesting'){
    console.log(`Nice way to be ${item1}`);
    console.log(`Nice way to be ${twice}`);
    console.log(`Nice way to be ${power}`);
}

// powerMove();

// understanding return as well
function monitors(row, col) {
    return row * col;    // basic return etc
}
function costOfMonitors(rows, columns){
    return monitors(rows, columns) * 200;
  }
  const  totalCost = costOfMonitors(5, 4);
  
  console.log(totalCost);
  

const nicole = monitors(13, 10);
console.log(nicole); 