$(document).ready(function(){
    //random computer generated number between 19-120

    var randomNumber=Math.floor(Math.random()*102+19)

    $("#random-number").text(randomNumber);

    //each crystal generates a random number between 1-12

    var blueCrystal = Math.floor(Math.random()*12+1);
    var greenCrystal = Math.floor(Math.random()*12+1);
    var orangeCrystal = Math.floor(Math.random()*12+1);
    var purpleCrystal = Math.floor(Math.random()*12+1);

    console.log(blueCrystal, greenCrystal, orangeCrystal, purpleCrystal);

    var userTotal = 0;
    var wins = 0;
    var losses = 0;


    //reset function after win or loss

    function reset(){
        randomNumber = Math.floor(Math.random()*102+19);
        $("#random-number").text(randomNumber);
        blueCrystal = Math.floor(Math.random()*12+1);
        greenCrystal = Math.floor(Math.random()*12+1);
        orangeCrystal = Math.floor(Math.random()*12+1);
        purpleCrystal = Math.floor(Math.random()*12+1);
        userTotal = 0;
        $("#final-total").text(userTotal);
    }

    //set up on click for crystals

    //blue crystal clicks

    $("#blue").on("click", function (){
        userTotal = userTotal + blueCrystal;
        console.log("blue total " + userTotal);
        $("#final-total").text(userTotal);

        //if user total is equal to the computer random number, increase win count
        //if user total exceeds computer random number, increase losses count

        if(userTotal == randomNumber){
            wins++
            $("#wins").text(wins);
            reset();
        }

        else if(userTotal > randomNumber){
            losses++
            $("#losses").text(losses);
            reset();
        }
    });

    //green crystal clicks

    $("#green").on("click", function(){
        userTotal = userTotal + greenCrystal;
        console.log("green total " + userTotal);
        $("#final-total").text(userTotal);

        if(userTotal == randomNumber){
            wins++;
            $("#wins").text(wins);
            reset();
        }

        else if(userTotal > randomNumber){
            losses++;
            $("#losses").text(losses);
            reset();
        }

    });

    //orange crystal clicks

    $("#orange").on("click", function(){
        userTotal = userTotal + orangeCrystal;
        console.log("orange total " + userTotal);
        $("#final-total").text(userTotal);

        if(userTotal == randomNumber){
            wins++;
            $("#wins").text(wins);
            reset();
        }

        else if(userTotal > randomNumber){
            losses++;
            $("#losses").text(losses);
            reset();
        }
    });

    //purple crystal clicks

    $("#purple").on("click", function(){
        userTotal = userTotal + purpleCrystal;
        console.log("purple total " + userTotal);
        $("#final-total").text(userTotal);

        if(userTotal == randomNumber){
            wins++;
            $("#wins").text(wins);
            reset();
        }

        else if(userTotal > randomNumber){
            losses++;
            $("#losses").text(losses);
            reset();
        }
    });


    



})