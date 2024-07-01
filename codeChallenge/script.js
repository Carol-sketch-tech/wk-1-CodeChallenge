// Code Challenge 2
// spped less than 70 return "ok"
// otherwise for every 5km/s above 70 onde demerit point and prin out the total numbe rof demerit points.


function speedDetector(speed){
    // defining the speedlimit 
   let minSpeed= 70;
  //  if...else if loop to execute the code.
  
    if (speed < 70 && speed >= 0){
        return "OK."
    }
    // loop to execute demerits value if the speed limit is exceeded
    else if (speed >= 70 && speed <= 100) {
        const excessSpeed = speed - minSpeed;
        const demerit=(excessSpeed / 5);
        return `demerit points: ${demerit}` 
       }
       else {
         return "License suspended."
       }
} console.log(speedDetector(600));

 

