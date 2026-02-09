/**
 * 🎬 The Starlight Cinema
 *
 * You've just been hired at Starlight Cinema! Your first task is to build
 * the automated ticket pricing system. The manager hands you a sticky note
 * with the pricing rules scribbled on it:
 *
 * Age Groups:
 *   - Children (0–12): $8
 *   - Teens (13–17): $12
 *   - Adults (18–59): $15
 *   - Seniors (60+): $10
 *
 * Weekend Surcharge:
 *   - Add $3 on weekends (when isWeekend is true)
 *
 * Rules:
 *   - If age is negative or not a number, return -1
 *   - isWeekend is a boolean
 *
 * @param {number} age - The customer's age
 * @param {boolean} isWeekend - Whether it's a weekend
 * @returns {number} The ticket price, or -1 for invalid input
 */
export function getTicketPrice(age, isWeekend) {
  // Your code here

  var childCondition = age >=0 && age <= 12;
  var teensCondition = age >=13 && age <= 17;
  var adultsCondition = age >=18 && age <= 59;
  var seniorsCondition = age >=60;

  if(age < 0 || isNaN(age)) {
    return -1;
  }

  if(childCondition){
    if (isWeekend) {
      return 8 + 3;
    } else {
      return 8;
    }
  } else if (teensCondition) {
    if(isWeekend) {
      return 12 + 3;
    } else {
      return 12;
    }
  } else if (adultsCondition){
    if(isWeekend) {
      return 15 + 3;
    } else {
      return 15;
    }
  } else if (seniorsCondition) {
    if(isWeekend) {
      return 10 + 3; 
    } else {
      return 10
    }  
  } 

  return -1;
}
