/**
 * @author Brayden Thistle
 * @version 1.0.0
 * @date 2025-12-12
 * @fileoverview this program will count every integer between your selected range
 */

//values
const Startnumber = Number(prompt("Enter your start value."));
const Endnumber = Number(prompt("Enter your end value"));

// if statement
if (Endnumber < Startnumber ) {
  console.log("Sorry, your ending value has to be larger than your starting value, please enter another value.");
}


for (let currentvalue: number = Startnumber; currentvalue < Endnumber; currentvalue++) {
  console.log(currentvalue);
}

console.log("\nDone");