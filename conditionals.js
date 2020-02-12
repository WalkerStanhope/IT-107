if(2+2 === 4){
    console.log("Math works!");
  } else {
    console.log("Math is broken.")
  }

  myName = "Walker";

  if(myName === "Jacob"){
      console.log("Hi Two Stackzzz")
  }else if(myName === "Walker"){
      console.log("Hi Walker The Great!")
  }else if(myName === "Kim"){
      console.log("Your coffee is on the way")
  }
  else{
      console.log("Hi person with no face")
  }

  var likesToTravel = true
  if(likesToTravel === true){
      console.log("Bon Voyage!")
  }else if(likesToTravel === false){
      console.log("Enjoy your couch!")
  }

    if(1+1 === 5){
        console.log("True Facts!")
    }else{
        console.log("LIES!")
    }
    if(4+5 <= 20){
        console.log("True Facts!")
    }else{
        console.log("LIES!")
    }
    if(6-2 >= 0){
        console.log("True Facts!")
    }else{
        console.log("LIES!")
    }
    var likesDogs = true
    if(likesDogs === true){
        console.log("You're a dog person!")
    }else{
        console.log("You're a cat person!")
    }
    var birthYear = 2001
    if(birthYear >= 1995 && birthYear <= 2012){
        console.log("Generation Z")
    }else if(birthYear >= 1977 && birthYear <= 1994){
        console.log("Generation Y")
    }else if(birthYear >= 1966 && birthYear <= 1976){
        console.log("Generation X")
    }else if(birthYear >= 1955 && birthYear <= 1965){
        console.log("Boomers II")
    }else if(birthYear >= 1946 && birthYear <= 1954){
        console.log("Boomers I")
    }else if(birthYear >= 1928 && birthYear <= 1945){
        console.log("Post-War Cohort")
    }else if(birthYear >= 1922 && birthYear <= 1927){
        console.log("World War II")
    }else if(birthYear >= 1912 && birthYear <= 1921){
        console.log("The Depression Era")
    }
    var walkersObject = {
        fullName: "Walker Stanhope",
        preferredLanguage: "English"
    }
    if(walkersObject.preferredLanguage === "English"){
        console.log( "Hello, Walker!")
    }else if(walkersObject.preferredLanguage === "Spanish"){
        console.log( "Hola, Walker!")
    }
    var time = ("1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM", "6:00 PM", "7:00 PM", "8:00 PM", "12:00 PM", "7:30 AM")
    var isHungry = true
    if(time === "7:30 AM" && isHungry === true){
        console.log("Time for breakfast!")
    }else if(time === "12:00 PM" && isHungry === true){
        console.log("Time for Lunch!")
    }else if(time === "7:00 PM" || "8:00 PM"  && isHungry === true){
        console.log("Time for Dinner!")
    }else if(isHungry === true){
        console.log("Time for a snack")
    }else{
        console.log("Have a cookie anyway!")
    }
    var grade = 85
    if(grade >= 0 && grade <= 69){
        console.log("You got an F")
    }else if(grade >= 70 && grade <= 76){
        console.log("You got an D")
    }else if(grade >= 77 && grade <= 84){
        console.log("You got an C")
    }else if(grade >= 85 && grade <= 92){
        console.log("You got an B")
    }else if(grade >= 93 && grade <= 100){
        console.log("You got an A")
    }