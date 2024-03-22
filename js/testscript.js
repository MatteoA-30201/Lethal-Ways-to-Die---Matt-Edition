	words = ["Died on Ship", "Mask", "Turret", "Suffocated", "Knight", "Eyeless dogs", "Left Behind", "Gave up", "Jester", "Doesn't heed warning", "Gravity", "Giant", "Bracken", "Harp Ghost", "Zeus Got em", "Land Mine", "Rolling Giant", "Snare Bug", "Bunker Spider", "Hoarding Bug", "Ghost Girl", "Nut Cracker", "Dawsome gamer", "Vatic", "Coil Head", "Shrimp", "Immortal Snail", "The Fiend", "Mimic", "Demo gorgon", "Shy Guy", "Slime", "Pressed the red button"];

  let log = console.log;
  
  for(let i=0; i<33; i++){
      let rnd = Math.floor(Math.random()*words.length);
      //gives duplicates
      //log( words[rnd] ); 
  }
  
  for(let i=0, tempwords=words, len=words.length; i<len; i++){
      let rnd = Math.floor(Math.random() * tempwords.length);
      //0.23423423423 -> 0
  //    2.45345345345 -> 2
  //    3.99999999999 -> 3
      log( tempwords[rnd] ); 
      tempwords.splice(rnd, 1);
  }
