const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
    // TODO

    let ditempuh = mpg*fuelLeft;
    if (ditempuh >= distanceToPump) {
        return true 
    } else {
        return false
    }

    
  };

  console.log(zeroFuel(100,50,1))