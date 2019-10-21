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
    "I placed 3rd in Disease Detective for Science Olympiad for all 4 yeears of high school.",
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
}
