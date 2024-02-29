function countBy(x, n) {
    let z = [];
    let a = 0;

    for ( let i = 1; i <= n; i++) {
        a = i
        z.push(x*a)
        
    }
    

  
    return z;
  }


console.log(countBy(2,10))