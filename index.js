function distanceFromHqInBlocks(someValue) {
switch (someValue) 
{
    case 50: 
        return 8;
    case 49:
        return 7;
    case 48:
        return 6;
    case 47:
        return 5;
    case 46: 
        return 4;
    case 45:
        return 3;
    case 44:
        return 2;
    case 43:
        return 1;
    default:
        return 8;

}
  }

function distanceFromHqInFeet(someValue) {
   return distanceFromHqInBlocks(someValue) * 264;

    // call the distanceFromHqInBlocks function from inside the distanceFromHqInFeet function,
    // passing the argument from distanceFromHqInFeet into distanceFromHqInBlocks
  
    // the return value of distanceFromHqInBlocks can then be used to calculate feet
  }

  function distanceTravelledInFeet(start, destination) {
      if (destination > start) {
return (destination - start) * 264;
      }
      else
  {
      return (start - destination) * 264;
  }
  }

  function calculatesFarePrice(start, destination) {
    if (distanceTravelledInFeet(start, destination) <= 400)
    {
        return 0
              }
    else if (distanceTravelledInFeet(start, destination) < 2000 && distanceTravelledInFeet(start, destination) > 400)
    {
        return (distanceTravelledInFeet(start, destination) - 400) * 0.02;
    }
    else if (distanceTravelledInFeet(start, destination) > 2500)
              {
                  return 'cannot travel that far';
              }
     else if (distanceTravelledInFeet(start, destination) > 2000)
          {
              return 25;
          }

                
          }