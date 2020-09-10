const IS_FULL_TIME = 1;
const IS_PART_TIME = 2;
const WAGE_PER_HOUR = 20;
var empAttendance = Math.floor(Math.random() * 10) % 3;
var workingHours, empWage;
function calculateDailyWage() {
    switch (empAttendance) {
        case IS_FULL_TIME : {
            console.log("Employee is Present for Full time.");
            workingHours = 8;
            break;
        }
        case IS_PART_TIME : {
            console.log("Employee is Present for Part time.");
            workingHours = 4;
            break;
        }
        default : {
            console.log("Employee is Absent.");
            workingHours = 0;
        }
    }
empWage = workingHours * WAGE_PER_HOUR; 
return empWage;
}
console.log(calculateDailyWage());