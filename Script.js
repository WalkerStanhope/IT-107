alert("hello, world")
var myName = "Dwayne The Rock Johnson";
myName = "The Rock";
console.log(myName);

var age = 46;
var totalCost;
var totalWithTax;

var costPerItem = 3.50;
var numberOfItems = 4;
var taxRate = 0.06;
 
totalCost = costPerItem * numberOfItems;
totalWithTax = totalCost + (taxRate * totalCost);

console.log(totalWithTax);

var likesDogs = true;
var allergicToDogs = false;

var firstName = "Dwayne";
var lastName = "Johnson";
var fullName = firstName + " " + lastName;
console.log(fullName);

var x = "2";
var y = "4";
var total = x + y;
console.log(total);

var firstName = "Walker";
var lastName = "Stanhope";
var age = 18;
var likesTravel = true;
console.log(firstName, lastName, age, likesTravel);

var gradesArray = [97, 55, 62, 82, 79, 91, 74, 86];
var firstItem = gradesArray[0]
var secondItem = gradesArray[1]
var thirdItem = gradesArray[2]
gradesArray.push(92);
console.log(gradesArray)

var movieArray = [`World War Z`, `End Game`, `Warm Bodies`];
console.log(movieArray);

var walkersObject = {
    firstName: "Walker",
    middleName: "Reese",
    lastName: "Stanhope",
    age: 18,
    likesTravel: true
}
console.log(walkersObject)

var tempterature = "48 degrees.";
var conditions = "sunny";
var sunriseTime = "7:32am"
var sunsetTime = "5:53pm."
console.log("it's currently", conditions,"and", tempterature,"The sun rose this morning at", sunriseTime,"and will set at", sunsetTime)

var highTemperatures = [55, 57, 53, 47, 56, 50];
var lowTemperatures = [33, 30, 29, 35, 31, 32];
highTemperaturesAdd = 55+57+53+47+56+50
highTemperaturesAverage = highTemperaturesAdd/6
lowTemperaturesAdd = 33+30+29+35+31+32
lowTemperaturesAverage = lowTemperaturesAdd/6
console.log(highTemperatures[0]);
console.log(lowTemperatures[5]);
console.log("Average of high tempt is =", highTemperaturesAverage);
console.log("Average of low tempt is =", lowTemperaturesAverage);


