var message = "Welcome to Employee Wage Computation Program!";
console.log(message);

const IS_FULL_TIME = 1;
const IS_PART_TIME = 2;
const EMP_RATE_PER_HOUR = 20;
const MIN_NUM_WORKING_DAYS = 20;
const MAX_HOURS_IN_MONTH = 100;
var workingHours, empWage = 0, monthlyWage = 0, totalEmpHour = 0, totalWorkingDays = 0;

function randomNumber() {
    return Math.floor(Math.random() * 10) % 3;
}

function getWorkingHours() {
    let empAttendance = randomNumber();
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
return workingHours;
}
console.log("Employee working hours: " + getWorkingHours());

function getEmpWage() {
    let empHour = getWorkingHours();
    return empHour * EMP_RATE_PER_HOUR;
}

function getMonthlyWages() {
    let dailyWage = getEmpWage();
    return monthlyWage += dailyWage;
}

function calculateWage() {
    while (totalEmpHour <= MAX_HOURS_IN_MONTH && totalWorkingDays < MIN_NUM_WORKING_DAYS) {
        let empDailyWage = getEmpWage();
        let empTotalWage = getMonthlyWages();
        totalWorkingDays++;
    console.log("Employee total working days: " + totalWorkingDays);
    console.log("Employee daily wage: " + empDailyWage);
    console.log("Employee total wage: " + empTotalWage);    
    }
}
calculateWage();