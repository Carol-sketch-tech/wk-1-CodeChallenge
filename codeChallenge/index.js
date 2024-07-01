// Code challenge 1

// created a function with a if .. else if loop 
// the when teh code is running, given the value that tis given the looop runs until the 
// the it returns true then the loop is terminated and an output given.
function calculateGrade (mark){
    
    if (mark <= 100 && mark > 79){return "You get an A. Excellent work!"}

  else if (mark <= 79 && mark >= 60){ return "B. Good work"}
  else if (mark <= 59 && mark >= 49) {return "C . This was average."} 
  else if (mark < 49 && mark >= 40){return "D. You can do better."}
  else if (mark < 40 && mark >=0 ) {return " E .Oh No! You have failed."}
  else { return "Input invalid.Please enter a value that is reasonable."}
}console.log(calculateGrade( -56))



