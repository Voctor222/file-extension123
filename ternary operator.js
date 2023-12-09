const monday =1
const tuesday =2
const wednesday=3
const thursday=4
const friday =5
const sarturday =6
const sunday =7

const daysOfTheWeek = (days)=> {    
 return days===1?('Sunday') : days===2? ('Monday') :days===3? ("Tuesday"):days===4?('Wednesday'):days===5? ('Thursday'): days===6? ('Friday'):days===7? ('Sartuday'):('invalid day')
}
console.log("firstday:",daysOfTheWeek(monday))
console.log("secondday:",daysOfTheWeek(tuesday))
console.log("thirdday:",daysOfTheWeek(wednesday))
console.log("fourthday:",daysOfTheWeek(thursday))
console.log("fifthday:",daysOfTheWeek(friday))
console.log("sixthday:",daysOfTheWeek(sarturday))
console.log("seventhday:",daysOfTheWeek(sunday))

