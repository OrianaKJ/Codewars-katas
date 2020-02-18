// Description:
// Complete the function which returns the weekday according to the input number:

// 1 returns "Sunday"
// 2 returns "Monday"
// 3 returns "Tuesday"
// 4 returns "Wednesday"
// 5 returns "Thursday"
// 6 returns "Friday"
// 7 returns "Saturday"
// Otherwise returns "Wrong, please enter a number between 1 and 7"

// My solutions:

// v1
// function whatday(num) { 
//     switch(num) {
//       case 1: 
//         return "Sunday";
//         break;
//       case 2:
//        return "Monday";
//         break;
//       case 3:
//         return "Tuesday";
//         break;
//       case 4:
//         return "Wednesday";
//         break;
//       case 5:
//         return "Thursday";
//         break;
//       case 6:
//         return "Friday";
//         break;
//       case 7: 
//         return "Saturday";
//         break;
//       default: 
//         return "Wrong, please enter a number between 1 and 7"
//     }
//       }

// v2
// function whatday(num) { 
//  return num === 1 ? "Sunday" : 
//         num ===2 ? "Monday": 
//         num === 3 ? "Tuesday" : 
//         num === 4 ? "Wednesday" : 
//         num === 5 ? "Thursday" : 
//         num === 6 ? "Friday" : 
//         num === 7 ? "Saturday" : 
//         "Wrong, please enter a number between 1 and 7"
//         }

// v3
const whatday = num =>
    num === 1 ? "Sunday" :
        num === 2 ? "Monday" :
            num === 3 ? "Tuesday" :
                num === 4 ? "Wednesday" :
                    num === 5 ? "Thursday" :
                        num === 6 ? "Friday" :
                            num === 7 ? "Saturday" :
                                "Wrong, please enter a number between 1 and 7"