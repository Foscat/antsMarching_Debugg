console.log("\n" + "/////////////////////// Start Baa Baa Blacksheep ///////////////////////");


var woolOwners = [
    {
        "master": 1
    },
    {
        "dame": 1
    },
    {
      "little boy": 1,
      "location": "down the lane"
    }
  ];
  
  var haveYouAnyWool = function() {
      for (var i = 0; i < woolOwners.length; i++) {
     totalBags = bags - i;
      }
      return (i);
  };

  var bags = haveYouAnyWool();
  var totalBags = bags
  
  function baabaaBlackSheep() {
      console.log("BaaBaa BlackSheep have you any wool?");
      if (bags > 0) {
          console.log("yes sir, yes sir " + totalBags + " bags full");
    }
  }
  
  function oneForMy() {
      for (var i = 0; i < 2; i++) {
          people = woolOwners[i];
        //   console.log(people);
          var name = Object.keys(people);
        //   console.log(name);
          var person = name[0];
          console.log("one for my " + person);
      }
  }
  
  baabaaBlackSheep();
  oneForMy();
  
  var boy = Object(woolOwners[2]);
  var littleBoy = Object.keys(boy);
//   console.log("Boy: ", boy);
//   console.log("littleBoy: ", littleBoy)
  var whereHeLives = boy.location;
  console.log("one for the " + littleBoy[0] + " that lives " + whereHeLives);