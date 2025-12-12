/**
 * @author Brayden Thistle
 * @version 1.0.0
 * @date 2025-12-12
 * @fileoverview this program will count every integer between your selected range
 */

//values
let StartValue: number;
let EndValue: number;

// prompts with if statement
StartValue = Number(prompt("Enter your start value."));
EndValue = Number (prompt("Enter your end value"));
if (EndValue < StartValue ) {
  console.log("Sorry, your ending value has to be larger than your starting value, please enter another value.");
}

//loop
for (
  let currentvalue: number = StartValue; 
  currentvalue < EndValue;
  currentvalue++
) {
  console.log(currentvalue);
}

console.log("\nDone");