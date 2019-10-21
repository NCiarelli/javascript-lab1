{
  // Javascript Lab 1 SCript file

  // Input Variable Declarations
  let name = "Nicholas Ciarelli";
  let age = 30;
  let birthday = "April 9";
  let detroitGC = true;
  let lifeEvents = [
    "I was born in Dearborn, Michigan.",
    "I went to Wayne State University.",
    "I placed 3rd in Disease Detective for Science Olympiad for all 4 years of high school.",
    'I "ran" in the Tough Mudder in 2013.'
  ];

  // GC location if/else statement
  if (detroitGC) {
    console.log(
      `My name is ${name} and I am a student at Grand Circus in Detroit, Michigan. I am currently ${age} years old and my birthday is on ${birthday}.`
    );
  } else {
    console.log(
      `My name is ${name} and I am a student at Grand Circus in Grand Rapids, Michigan. I am currently ${age} years old and my birthday is on ${birthday}.`
    );
  }

  // Print out life events for loop
  for (i = 0; i < lifeEvents.length; i++) {
    console.log(lifeEvents[i]);
  }

  // Random number while loop
  let counter = 0;
  while (true) {
    // Generate a random number from 1 to 10
    const randomNumber = Math.floor(Math.random() * 10) + 1;
    // Check if it is not equal to 5 and print out the corresponding statement
    if (randomNumber !== 5) {
      counter++;
      console.log(`${randomNumber} !== 5`);
    } else {
      counter++;
      console.log(
        `5 === 5. It took ${counter} iterations to randomly generate the number 5.`
      );
      break;
    }
  }
}
