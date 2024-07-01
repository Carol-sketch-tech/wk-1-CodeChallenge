// Code Challenge 3

const  grossIncomeAnnual= 4000000
// PAYE
function PAYE(){
    
    if (grossIncomeAnnual <= 24000){
        let x = grossIncomeAnnual * 0.1;
        return x
    }
    else if ( grossIncomeAnnual >= 288001  && grossIncomeAnnual <= 388000 ){
       
        let x =  grossIncomeAnnual * 0.25;
        return x;
    }
    else if (grossIncomeAnnual >= 388001 && grossIncomeAnnual <= 6000000){
        
        let x= grossIncomeAnnual * 0.30;
        return x;
       
    } else if (grossIncomeAnnual >=6000001  && grossIncomeAnnual <= 9600000){

        let x=  grossIncomeAnnual * 0.325;
        return x;
    }
    else { let x= grossIncomeAnnual * 0.35
        return x;
    }
}
    console.log(grossIncomeAnnual)


    
   // NSSF
const NSSF = grossIncomeAnnual * 0.06;


// NET SALARY
const  calculateNetSalary =NetSalary;
     const NetSalary =   PAYE + NSSF - grossIncomeAnnual;
 console.log(NetSalary);
 return NetSalary;



