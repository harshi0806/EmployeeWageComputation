const IS_FULL_TIME = 1;
const IS_PART_TIME = 2;
const EMP_RATE_PER_HOUR = 20;
const MIN_NUM_WORKING_DAYS = 20;
const MAX_HOURS_IN_MONTH = 100;
var workingHours, empWage = 0, monthlyWage = 0, totalEmpHour = 0, totalWorkingDays = 0;
var empAttendance = Math.floor(Math.random() * 10) % 3;
function calculateDailyWage() {
    while (totalEmpHour <= MAX_HOURS_IN_MONTH && totalWorkingDays <= MIN_NUM_WORKING_DAYS) {
        switch (empAttendance) {
            case IS_FULL_TIME :
                workingHours = 8;
                break;
            case IS_PART_TIME :
                workingHours = 4;
                break;
            default :
                workingHours = 0;
        }
    totalWorkingDays++;
    }
console.log("Total working days: " + totalWorkingDays);
empWage = workingHours * EMP_RATE_PER_HOUR;
console.log("Employee daily wage: " + empWage);
monthlyWage += empWage;  
return monthlyWage;
}
console.log("Employee monthly wage: " + calculateDailyWage());