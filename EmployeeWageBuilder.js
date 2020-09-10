const IS_PRESENT = 1;
var empAttendance = Math.floor(Math.random() * 10) % 2;
if (empAttendance == IS_PRESENT)
    console.log("Employee is Present.");
else
    console.log("Employee is Absent.");