// document.getElementById('count-result').innerText='5'
let myAge = 27
console.log(myAge);
let humanDogRatio = 7;
let myDogAge = myAge * humanDogRatio;
console.log(myDogAge);
let bonusPoints = 50;
bonusPoints = bonusPoints * 2
console.log(bonusPoints);
bonusPoints = bonusPoints / 4
console.log(bonusPoints);
bonusPoints = bonusPoints + 45
console.log(bonusPoints)

function myLogger() {
  console.log(42);
}

myLogger()

let lap1 = 34;
let lap2 = 33;
let lap3 = 36;

function lapSum() {
  let lap = lap1 + lap2 + lap3;
  console.log(lap);
}

lapSum()


let lapsCompleted = 0;

function incrementLaps() {
  lapsCompleted = lapsCompleted +1;
  console.log(lapsCompleted)
}

incrementLaps()
incrementLaps()
incrementLaps()

console.log(lapsCompleted)

// intialize the count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked (log it out)
// change the count-el in the HTML to reflect the new count

let countEl = document.getElementById('count-result');

let count = 0;

function increment() {
  count += 1;
  countEl.textContent = count;
}

increment();

let saveEl = document.getElementById("save-el");

function save() {
  let countStr = count + " - ";
  saveEl.textContent += countStr;
  count = 0;
  countEl.textContent = count;
  console.log(countEl)
}

save()



// 1. Grab the save-el paragrah and store it in a variable called saveEl
 // 2. Create a variable that contains both the count and the dash separator, i.e. "12 - "
    // 3. Render the variable in the saveEl using innerText
    // NB: Make sure to not delete the existing content of the paragraph