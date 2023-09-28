// Code your solution in this file!


function distanceFromHqInBlocks(block) {
  //returns the number of blocks given a value
  if(block > 42){
    return block - 42
  }
  else if( block < 42){
    return 42 - block
  }
}



function distanceFromHqInFeet(someValue) {
// call the distanceFromHqInBlocks function from inside the distanceFromHqInFeet function,
// passing the argument from distanceFromHqInFeet into distanceFromHqInBlocks1
// the return value of distanceFromHqInBlocks can then be used to calculate feet
 
const distance = distanceFromHqInBlocks(someValue);
  return distance * 264
}


function distanceTravelledInFeet(start, destination) {
  //returns the number of feet traveled
  if(start > destination)
  {
    return (start - destination)*264
  }
  else if (start < destination)
  {
    return (destination - start)*264
  } 
}



function calculatesFarePrice(start, destination) {
  //returns the fare for the customer
  const distance = distanceTravelledInFeet(start,destination)
  if (distance < 400)
  {
    return 0
  }
  else if (distance > 400 && distance < 2000)
  {
    return (distance - 400)* 0.02
  }
  else if (distance > 2500)
  {
    return 'cannot travel that far'
  }
  else if (distance > 2000)
  {
    return 25
  }
}

console.log (calculatesFarePrice(0,2550))



