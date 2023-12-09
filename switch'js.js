const sunday=1
  const monday=2
  const tuesday=3
  const wednesday=4
  const thursday=5
  const friday=6 
  const sartuday=7
const dayName=(days)=>{
  
switch (days) {
  case 1:
    dayName = 'Sunday';
    break;
  case 2:
    dayName = 'Monday';
    break;
  case 3:
    dayName = 'Tuesday';
    break;
  case 4:
    dayName = 'Wednesday';
    break;
  case 5:
    dayName = 'Thursday';
    break;
  case 6:
    dayName = 'Friday';
    break;
  case 7:
    dayName = 'Saturday';
    break;
  default:
    dayName = 'Invalid day';
}
}
console.log('day1:',dayName(sunday))
console.log('day2:',dayName(monday))
console.log('day3:',dayName(tuesday))
console.log('day4:',dayName(wednesday))
console.log('day5:',dayName(thursday))
console.log('day6:',dayName(friday))
console.log('day7:',dayName(sartuday))