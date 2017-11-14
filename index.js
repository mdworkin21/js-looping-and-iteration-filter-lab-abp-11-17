// Code your solution in this file


function findMatching(drivers, name){
  let matchingDriver = drivers.filter(function(driver){
      if (name.toLowerCase() === driver.toLowerCase()){
          return true
        } else {
          return false }
        })
   return matchingDriver
}

function fuzzyMatch(drivers, name){
  let someLetters = drivers.filter(function(driver){
    if (driver[0]  === name[0] ){
           return name

      } else {

            return false}

  })
  return someLetters

}



function matchName(drivers, name){
  let match = drivers.filter(function(driver){

    for (const driver in drivers){//now in the array, elements in array are objects, need to go into objects

       for(const i in driver){//this gets us into the objects, and should return the values//but current problem is returning empty[]

         if (drivers[driver]['i'] === name){

           return driver

      }  else {

          return false

        }}

      }

  })
  return match
}
