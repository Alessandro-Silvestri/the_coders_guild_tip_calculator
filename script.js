let preTipTotal = 150;
let tipPercentage = 7;
let tip = preTipTotal / 100 * tipPercentage;
tip = Number(tip.toFixed(2))
let total = preTipTotal + tip; 

console.log("TIP CALCULATOR:");
console.log(`Cost of the meal:\t ${preTipTotal.toFixed(2)}£`);
console.log(`${tipPercentage}%`);
console.log(`Tip amount:\t\t\t ${tip.toFixed(2)}£`);
console.log(`Total amount:\t\t ${total.toFixed(2)}£`);

