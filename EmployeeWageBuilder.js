const IS_PRESENT = 1;
const WAGE_PER_HOUR = 20;
var empAttendance = Math.floor(Math.random() * 10) % 2;
var workingHours, empWage;
function calculateDailyWage() {
    if (empAttendance == IS_PRESENT) {
        console.log("Employee is Present.");
        workingHours = 8;
    }
    else {
        console.log("Employee is Absent.");
        workingHours = 0;
    }
empWage = workingHours * WAGE_PER_HOUR; 
return empWage;
}
console.log(calculateDailyWage());