var dataset = require('./dataset.json');
var bankBalances = dataset.bankBalances;

/*
  create an array with accounts from bankBalances that are
  greater than 100000.00
  assign the resulting array to `hundredThousandairs`
*/
var hundredThousandairs = null;

hundredThousandairs = bankBalances.filter(function(element, index, array){
  return element.amount > 100000;
});

/*
  set a new key for each object in bankBalances named `rounded`
  the value of this key will be the `amount` rounded to the nearest dollar
  example 
    {
      "amount": "134758.44",
      "state": "HI",
      "rounded": 134758
    }
  assign the resulting array to `roundedDollar`
*/
var roundedDollar = null;

roundedDollar = bankBalances.map(function(elem, index, arr){
  elem.rounded = Math.round(elem.amount);
  return elem;
});

/*
  set a the `amount` value for each object in bankBalances
  to the value of `amount` rounded to the nearest 10 cents
  example 
    {
      "amount": 134758.4,
      "state": "HI"
    }
  assign the resulting array to `roundedDime`
*/
var roundedDime = null;

roundedDime = bankBalances.map(function (elem, index, arr) {
  let result = {};
  result.amount = (Math.round(elem.amount*10))/10;
  result.state = elem.state;
  return result;
});

// set sumOfBankBalances to the sum of all amounts in bankBalances
var sumOfBankBalances = null;

function sum(a, b){
  return a + b;
}

sumOfBankBalances = bankBalances.map(function(elem,index,arr){
  return parseFloat(elem.amount);
})
.reduce(sum);

sumOfBankBalances = parseInt(sumOfBankBalances*100)/100;

/*
  set sumOfInterests to the sum of the 18.9% interest
  for all amounts in bankBalances
  in each of the following states
    Wisconsin
    Illinois
    Wyoming
    Ohio
    Georgia
    Delaware
  the result should be rounded to the nearest cent
 */
var sumOfInterests = null;

sumOfInterests = bankBalances.filter(function (elem, index, arr) {
  return elem.state === 'WI'|| elem.state === 'IL'|| elem.state === 'WY'|| elem.state === 'OH'|| elem.state === 'GA'|| elem.state === 'DE';
})
.map(function (elem, index, arr){
  return Math.round(parseFloat(elem.amount)*.189*100);
})
.reduce(sum)/100;


/*
  set sumOfHighInterests to the sum of the 18.9% interest
  for all amounts in bankBalances
  where the amount of the sum of interests in that state is
    greater than 50,000
  in every state except
    Wisconsin
    Illinois
    Wyoming
    Ohio
    Georgia
    Delaware
  the result should be rounded to the nearest cent
 */
var sumOfHighInterests = null;

sumOfHighInterests = bankBalances.filter(function (elem, index, arr) {
  return elem.state !== 'WI'&& elem.state !== 'IL'&& elem.state !== 'WY'&& elem.state !== 'OH'&& elem.state !== 'GA'&& elem.state !== 'DE'
})
.filter( function (elem, index, arr) {
  return elem.amount > 50000;
})
.map(function (elem, index , arr) {
  return parseFloat(elem.amount)*100*.189;
})
.reduce(sum)/100;

/*
  aggregate the sum of bankBalance amounts
  grouped by state
  set stateSums to be a hash table
    where the key is the two letter state abbreviation
    and the value is the sum of all amounts from that state
      the value must be rounded to the nearest cent
 */
var stateSums = null;

/*
  set lowerSumStates to an array containing
  only the two letter state abbreviation of each state 
  where the sum of amounts in the state is
    less than 1,000,000
 */
var lowerSumStates = null;

/*
  set higherStateSums to be the sum of 
    all amounts of every state
    where the sum of amounts in the state is
      greater than 1,000,000
 */
var higherStateSums = null;

/*
  set areStatesInHigherStateSum to be true if
    all of these states have a sum of account values
      greater than 2,550,000
    Wisconsin
    Illinois
    Wyoming
    Ohio
    Georgia
    Delaware
  false otherwise
 */
var areStatesInHigherStateSum = null;

/*
  Stretch Goal && Final Boss
  
  set anyStatesInHigherStateSum to be true if
    any of these states have a sum of account values
      greater than 2,550,000
    Wisconsin
    Illinois
    Wyoming
    Ohio
    Georgia
    Delaware
  false otherwise
 */
var anyStatesInHigherStateSum = null;


module.exports = {
  hundredThousandairs : hundredThousandairs,
  roundedDollar : roundedDollar,
  roundedDime : roundedDime,
  sumOfBankBalances : sumOfBankBalances,
  sumOfInterests : sumOfInterests,
  sumOfHighInterests : sumOfHighInterests,
  stateSums : stateSums,
  lowerSumStates : lowerSumStates,
  higherStateSums : higherStateSums,
  areStatesInHigherStateSum : areStatesInHigherStateSum,
  anyStatesInHigherStateSum : anyStatesInHigherStateSum
};
