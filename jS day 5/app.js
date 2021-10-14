
for (var numberOfBottles = 99; numberOfBottles >= 0; numberOfBottles--) {
    var bottleWord = "bottle";
   if (numberOfBottles <= 0) {
      bottleWord = "bottles";
      console.log("No more " + bottleWord + " of beer on the wall.");
      console.log("No more " + bottleWord + " of beer,");
      console.log("Go to the store and buy some more, 99 bottles of beer on the wall");
   }
   else if (numberOfBottles == 1 ) {
       bottleWord = "bottle";
       console.log(numberOfBottles + " " + bottleWord + " of beer on the wall");
       console.log(numberOfBottles + " " + bottleWord + " of beer,");
       console.log("Take one down, pass it around,");
   }
   else if (numberOfBottles >= 2) {
       bottleWord = "bottles";
       console.log(numberOfBottles + " " + bottleWord + " of beer on the wall");
       console.log(numberOfBottles + " " + bottleWord + " of beer,");
       console.log("Take one down, pass it around,");

   }

}
