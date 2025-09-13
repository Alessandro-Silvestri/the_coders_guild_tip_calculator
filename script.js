let preTipTotal = 130;
let tipPercentage = 12;
let tip = preTipTotal / 100 * tipPercentage;
tip = Number(tip.toFixed(2))
let total = preTipTotal + tip; 

// show results
console.log("TIP CALCULATOR:");
console.log(`Cost of the meal:\t ${preTipTotal.toFixed(2)}£`);
console.log(`${tipPercentage}%`);
console.log(`Tip amount:\t\t ${tip.toFixed(2)}£`);
console.log(`Total amount:\t\t ${total.toFixed(2)}£`);

