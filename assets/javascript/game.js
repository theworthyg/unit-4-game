$(document).ready(function() {

	//Random number at beginning between 19 and 120
    var Random = Math.floor(Math.random()*101+19)
    
	$('#randomNumber').text(Random);

	//create the 4 stones random numbers between 1-12 - these link to stones
	var num1 = Math.floor(Math.random()*11+1)
	var num2 = Math.floor(Math.random()*11+1)
	var num3 = Math.floor(Math.random()*11+1)
	var num4 = Math.floor(Math.random()*11+1)

	//wins,losses,score variables
	var userScore=0;
	var wins=0;
	var losses=0;

	$('#numberOfWins').text(wins);
    $('#numberOfLosses').text(losses);
    


    //create stone clicks/if user wins or loses (had help with this - functions/jquery)
    
	$('#red').on('click', function(){
		userScore = userScore + num1;
		console.log("New userScore=" + userScore);
		$('#totalScore').text(userScore);
			if(userScore === Random){
				winner();
			}
			else if(userScore > Random){
				loser();
			}
	})

	$('#purple').on('click', function(){
		userScore = userScore + num2;
		console.log("New userScore=" + userScore);
		$('#totalScore').text(userScore);
			if(userScore === Random){
				winner();
			}
			else if(userScore > Random){
				loser();
			}
	})

	$('#yellow').on('click', function(){
		userScore = userScore + num3;
		console.log("New userScore=" + userScore);
		$('#totalScore').text(userScore);
			if(userScore === Random){
				winner();
			}
			else if(userScore > Random){
				loser();
			}
	})

	$('#green').on('click', function(){
		userScore = userScore + num4;
		console.log("New userScore=" + userScore);
		$('#totalScore').text(userScore);
			if(userScore === Random){
				winner();
			}
			else if(userScore > Random){
				loser();
			}
	})

    //Window alert for wins and losses
    
	function winner(){
		alert("You have defeated Thanos! You now control the fate of the Galaxy!");
	 	wins++; 
	  	$('#numberOfWins').text(wins);
	  	reset();
	}

    
    
	function loser(){
		alert("Thanos has crushed you! Half the Galxay has now vanished!");
		losses++;
		$('#numberOfLosses').text(losses);
		reset();
	}

    //game reset function, repeat 
    
	function reset(){
		Random = Math.floor(Math.random()*101+19);
		console.log(Random)
		$('#randomNumber').text(Random);
		num1 = Math.floor(Math.random()*11+1);
		num2 = Math.floor(Math.random()*11+1);
		num3 = Math.floor(Math.random()*11+1);
		num4 = Math.floor(Math.random()*11+1);
        userScore=0;
        
		$('#totalScore').text(userScore);
	}

});