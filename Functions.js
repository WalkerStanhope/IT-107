function sayHelloWorld(){
    console.log("Hello, world!");
} sayHelloWorld();

function ilovejs(){
    console.log("I Love JavaScript")
} ilovejs();

function greetAFriend(friendName, timeOfDay){
    var greeting;
    if(timeOfDay === "morning"){
      greeting = "Good morning";
    } else if (timeOfDay === "afternoon"){
      greeting = "Good afternoon";
    } else if (timeOfDay === "evening"){
      greeting = "Good evening";
    } else {
      greeting = "Hello";
    }
    var personalGreeting = `${greeting}, ${friendName}!`;
    console.log(personalGreeting);
} greetAFriend("Todd", "evening");

function add(num1, num2){
    var myValue = num1 + num2;
    return myValue;
}
function sub(num1, num2){
    var myValue = num1 - num2;
    return myValue;
}
function multiply(num1, num2){
    var myValue = num1 * num2;
    return myValue;
}
function divide(num1, num2){
    var myValue = num1 / num2;
    return myValue;
}
console.log("72 + 28 = " + add(72, 28));
console.log("19 - 3 = " + sub(19, 3));
console.log("20 / by 4 = " + divide(20, 4));
console.log("30 X 5 = " + multiply(30, 5));

multiply(32, 2);

function SandWich(breadType, sandwichType, isToasted){
    if(isToasted){
        var mySandwich = `You got a toasted ${sandwichType} sub on ${breadType}.`;
        return mySandwich;
    }else{
        var mySandwich = `You got a regular ${sandwichType} sub on ${breadType}.`;
        return mySandwich;
    }
}
console.log(SandWich("White Bread", "Roasted Garlic", true));
console.log(SandWich("Wheat Bread", "Grilled Chicken", false));