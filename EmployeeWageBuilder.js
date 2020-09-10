const IS_FULL_TIME = 1;
const IS_PART_TIME = 2;
const EMP_RATE_PER_HOUR = 20;
const MIN_NUM_WORKING_DAYS = 20;
var empAttendance = Math.floor(Math.random() * 10) % 3;
var workingHours, empWage = 0, day, monthlyWage = 0;
function calculateDailyWage() {
    for (day = 1; day <= MIN_NUM_WORKING_DAYS; day++) {
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
    }
empWage = workingHours * EMP_RATE_PER_HOUR;
monthlyWage += empWage;  
return monthlyWage;
}
console.log(calculateDailyWage());