const monday =1
const tuesday =2
const wednesday=3
const thursday=4
const friday =5
const sarturday =6
const sunday =7

const daysOfTheWeek = (days)=> {
    if (days ===1){
        return "Monday"
    }else if(days===2){
        return 'Tuesday'
    }else if(days ===3){
        return "Wednesday"
    }else if (days ===4){
        return "Thursday"
    }else if(days ===5){
        return "Friday"
    }else if(days ===6){
        return "Sartuday"
    }else if(days ===7){
        return "Sunday"
    }
}

console.log("firstday:",daysOfTheWeek(monday))
console.log("secondday:",daysOfTheWeek(tuesday))
console.log("thirdday:",daysOfTheWeek(wednesday))
console.log("fourthday:",daysOfTheWeek(thursday))
console.log("fifthday:",daysOfTheWeek(friday))
console.log("sixthday:",daysOfTheWeek(sarturday))
console.log("seventhday:",daysOfTheWeek(sunday))
