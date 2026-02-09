/**
 * 🅿️ City Central Parking
 *
 * City Central Parking garage is the busiest in downtown. They need an
 * automated system to calculate parking fees. Different vehicle types
 * have different rates, and there's a daily maximum so customers
 * aren't overcharged.
 *
 * Rates (first hour / each additional hour):
 *   - "car":        $5 first hour, then $3/hour
 *   - "motorcycle": $3 first hour, then $2/hour
 *   - "bus":        $10 first hour, then $7/hour
 *
 * Daily Maximum (fee can never exceed this):
 *   - "car":        $30
 *   - "motorcycle": $18
 *   - "bus":        $60
 *
 * Rules:
 *   - Partial hours are rounded UP (e.g., 1.5 hours → 2 hours)
 *   - The fee should never exceed the daily maximum
 *   - If hours is 0 or negative, return -1
 *   - If vehicleType is not "car", "motorcycle", or "bus", return -1
 *
 * Examples:
 *   - car, 1 hour     → $5
 *   - car, 3 hours    → $5 + $3 + $3 = $11
 *   - car, 0.5 hours  → rounds up to 1 hour → $5
 *   - car, 24 hours   → $5 + 23×$3 = $74 → capped at $30
 *
 * @param {number} hours - Number of hours parked
 * @param {string} vehicleType - "car", "motorcycle", or "bus"
 * @returns {number} Parking fee or -1 for invalid input
 */
export function calculateParkingFee(hours, vehicleType) {
  // Your code here

  let fees = 0;
  let roundedHours = Math.ceil(hours);
  let maxLimit = 0;
  if (roundedHours <= 0) {
    return -1;
  }

  if (vehicleType === "car") {
    maxLimit = 30;
    if (roundedHours === 1) {
      return 5;
    } else {
      fees = 5 + ((roundedHours - 1) * 3);
      if (fees > maxLimit) {
        fees = 30;
      }
      return fees;
    }    
    
  } else if (vehicleType === "motorcycle") {
    maxLimit = 18;
    if (roundedHours === 1) {
      return 3;
    } else {
      fees = 3 + ((roundedHours - 1) * 2);
      if (fees > maxLimit) {
        fees = 18;
      }
      return fees;
    }

  } else if (vehicleType === "bus") {
    maxLimit = 60;
    if (roundedHours === 1) {
      return 10;
    } else {
      fees = 10 + ((roundedHours - 1) * 7);
      if (fees > maxLimit) {
        fees = 60;
      }
      return fees;
    }
  } else {
    return -1
  }
  

}
