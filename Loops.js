var i = 0;

while(i < 20){
  console.log("Hello, world");
  i++;
}

var moviesArray = ["Casablanca", "Star Wars", "Singing in the Rain", "The Wizard of Oz", "Die Hard"];

var i = 0; 

while(i < moviesArray.length){
  console.log(moviesArray[i]);
  i++;
}

for(var i = 0; i < 100; i++){
    console.log("TWEET TWEET");
}

var cohortOneStudents = ["Sable", "David", "Joey", "Nick", "Tommy", "Connor", "Charles", "Russ", "Bobby", "Josh", "Nikki", "Matt", "Dale", "Sydney"]

var interestsArray = ["Painting", "Reading", "Gaming", "Sports", "Sky Watching"]

for(var i = 0; i < interestsArray.length; i++){
    console.log(`One of my interests is: ${interestsArray[i]}`);
}
var interestsArray = ["Painting", "Reading", "Gaming", "Sports", "Sky Watching"]

for(var i = 0; i < interestsArray.length; i++){
  if(interestsArray[i] === "Gaming"){
    console.log("My absolute favorite intrest is: Gaming")
  }else if(interestsArray[i] === "Painting"){
    console.log("One of my intrests are: Painting")
  }else if(interestsArray[i] === "Reading"){
    console.log("One of my intrests are: Reading")
  }else if(interestsArray[i] === "Sports"){
    console.log("One of my intrests are: Sports")
  }else{
    console.log("One of my intrests are: Sky Watching")
}
}

var harryPotterTitles = ["and the Sorcerer's Stone", "and the Chamber of Secrets", "and the Prisoner of Azkaban", "and the Goblet of Fire", "and the Order of the Phoenix", "and the Half-Blood Prince", "and the Deathly Hallows"];
for(var i = 0; i < harryPotterTitles.length; i++){
  console.log(`${harryPotterTitles[i]}`)
}
var grades = [92, 91, 75, 66, 52, 90, 83, 85, 64, 90, 72, 88, 77, 98, 100, 73, 92]
