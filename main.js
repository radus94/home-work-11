var day = prompt("Please enter day:").toLowerCase();

console.log(day)

var work_day = ["monday", "tuesday", "wednesday", "thursday", "friday"]
var wekeend_day = ["saturday", "sunday"]


if (work_day.includes(day)) {
    alert("Working day");
}
else if ( wekeend_day.includes(day)) {
    alert("Weekend");
}
else {
    alert("Can not define, please try anonther value -> '" + day + "'");
}



// switch (day) {
//     case "monday":
//         alert("Working day");
//         break;
//     case "tuesday":
//         alert("Working day");
//         break;
//     case "wednesday":
//         alert("Working day");
//         break;
//     case "thursday":
//         alert("Working day");
//         break;
//     case "friday":
//         alert("Working day");
//         break;
//     case "saturday":
//         alert("Weekend");
//         break;
//     case "sunday":
//         alert("Weekend");
//         break;
//     default:
//         alert("Can not define, please try anonther value -> '" + day + "'");
//     }
