// Description:
// Scenario
// You're saying good-bye your best friend , See you next happy year .

// Happy Year is the year with only distinct digits , (e.g) 2018

// Task
// Given a year, Find The next happy year or The closest year You'll see your best friend !alt !alt

// Notes
// Year Of Course always Positive .
// Have no fear , It is guaranteed that the answer exists .
// It's not necessary that the year passed to the function is Happy one .
// Input Year with in range (1000  ≤  y  ≤  9000)
// Input >> Output Examples:
// nextHappyYear (7712) ==> return (7801)
// Explanation:
// As the Next closest year with only distinct digits is 7801 .

// nextHappyYear (8989) ==> return (9012)
// Explanation:
// As the Next closest year with only distinct digits is 9012 .

// nextHappyYear (1001) ==> return (1023)
// Explanation:
// As the Next closest year with only distinct digits is 1023 .

// My solutions:

// v1
// function hasDistinctDigits(number) {
//     let distinctValues = [];
//     let temp = number.toString().split('');

//     for(let j = 0; j < number.toString().length; j++) {
//        if(distinctValues.indexOf(number.toString()[j]) >= 0){
//          break;
//        };

//        distinctValues.push(number.toString()[j]);
//     }

//      if(number.toString().split('').length === distinctValues.length){
//        return true;
//      } else {
//        return false;
//      }
// }

// function nextHappyYear(year){
//   let happyYear = 0;
//   while(happyYear==0){
//     year = year+1;
//     if(hasDistinctDigits(year)){
//       happyYear = year;
//       break;
//     };
//   }
//   return happyYear;
// }

// v2
// function nextHappyYear(year){
//     let happyYear=0;
//     for (let i=year+1;;i++){
//     if ([...new Set((''+i).split(''))].length===4){ happyYear=i;break;}
//     }
//     return happyYear
//   }

// v3
function nextHappyYear(year) {
    while (new Set([...++year + '']).size < 4);
    return year;
}