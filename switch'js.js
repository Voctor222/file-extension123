  const sunday=2
  const monday=4
  const tuesday=6
  const wednesday=8
  const thursday=10
  const friday=12
  const sartuday=14

const dayName=(days)=>{
  switch (days){
  case 2:
    return "Sunday";
    break;
  case 4:
    return "Monday";
    break;
  case 6:
    return "Tuesday";
    break;
  case 8:
    return "Wednesday";
    break;
  case 10:
    return "Thursday";
    break;
  case 12:
    return "Friday";
    break;
  case 14:
    return "Saturday";
    break;
  default:
    return "Invalid day"
  }
}
console.log("day1:",dayName(sunday))
console.log("day2:",dayName(monday))
console.log("day3:",dayName(tuesday))
console.log("day4:",dayName(wednesday))
console.log("day5:",dayName(thursday))
console.log("day6:",dayName(friday))
console.log("day7:",dayName(sartuday))