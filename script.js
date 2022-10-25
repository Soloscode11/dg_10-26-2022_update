function myFunction() {
    alert("The form was submitted");
    document.getElementById("text").innerHTML = "text from Function ";
    
        
    var random = (Math.random() *100);
    // console.log(random);

    var name = prompt("What is your name?");
    var play = confirm("Hello, " + name + " Would you like to play?");
    if(play) {
        var battle = confirm("Would you like to battle the demons and save the kingdom?");
        if(battle) {
            // Battle
            var result = random > 50 ? "You'v Defeated the Demons, Thanks For Saving The Kingdom!!" : "You'v Lost The Battle!";
            alert(result);
        } else {
            // Not Battling
            alert("Come Back When Your Brave Enough!");
        }
    } else{
        alert("Maybe Next Time...")
        
    }



  }


    