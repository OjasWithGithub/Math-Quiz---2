	player1_name = localStorage.getItem("Plr_1_name"); // Get Player Names
	player2_name = localStorage.getItem("Plr_2_name");
	console.log("Got Names")

	player1_score = 0; // Set Scores
	player2_score = 0;
	console.log("Got Scores")

document.getElementById("player1_name").innerHTML = player1_name + " : "; // Set Names
document.getElementById("player2_name").innerHTML = player2_name + " : ";
console.log("Set Names")

document.getElementById("player1_score").innerHTML = player1_score ; // Set Scores in Spans
document.getElementById("player2_score").innerHTML = player2_score ;
console.log("Set Scores")

document.getElementById("player_question").innerHTML = "Question Turn - " + player1_name ; // Naming Q/A Turns
document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2_name ;
console.log("Named Turns")

function send() {                                              // Send Function
	number1 = document.getElementById("number1").value;          // Number 1 = 10 Number 2 = 5
	number2 = document.getElementById("number2").value;          // Set variables and do math, actual ans = ans
	actual_answer = parseInt(number1) * parseInt(number2);
	console.log(actual_answer);


    question_number = "<h4>" + number1 + " X "+ number2 +"</h4>";                     // Set Label To 10 x 5 
    input_box = "<br>Answer : <input type='text' id='input_check_box'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";   // Make Check Button
    row =  question_number + input_box + check_button ; 
    document.getElementById("output").innerHTML = row;
	document.getElementById("number1").value = "";        // Make Div Tag and Reset Inputs
	document.getElementById("number2").value = "";

    console.log("Question given")
}


question_turn = "player1";
answer_turn = "player2";         // Set Turns 

function check()
{
	console.log("Answer given")
	get_answer = document.getElementById("input_check_box").value;
	if(get_answer == actual_answer)	                                    // If User's ans = Ans *Meaning Correct*
	{
		if(answer_turn == "player1")                 // If Player 1 wrote right ans, Reward and change in span
		{
			player1_score = player1_score +1;
		    document.getElementById("player1_score").innerHTML = player1_score;
			console.log(player1_name + "'s score is" + player1_score)
		}
		else  // If Player 2 wrote right ans, Reward and change in span
		{
			player2_score = player2_score +1;
		    document.getElementById("player2_score").innerHTML = player2_score;
			console.log(player2_name + "'s score is " + player2_score)
		}
	}
	
	if(question_turn == "player1") // If Player 1 has question turn, switch
	{
		question_turn = "player2"
		document.getElementById("player_question").innerHTML = "Question Turn - " + player2_name ;
		console.log("Question turn = " + player2_name + "; Answer turn = " + player1_name)
	}
	else       // If Player 2 has question turn, switch
	{
		question_turn = "player1"
		document.getElementById("player_question").innerHTML = "Question Turn - " + player1_name ;
		console.log("Question turn = " + player1_name + "; Answer turn = " + player2_name)
	}

	if(answer_turn == "player1") // If Player 1 has ans turn, switch
	{
		answer_turn = "player2"
		document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2_name ;
	}
	else  // If Player 2 has ans turn, switch
	{
		answer_turn = "player1"
		document.getElementById("player_answer").innerHTML = "Answer Turn - " + player1_name ;
	}

    document.getElementById("output").innerHTML = "";
	console.log("Next Question")
}
