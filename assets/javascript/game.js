$(document).ready(function() {

cards =["assets/images/koc.jpg", "assets/images/kos.jpg", "assets/images/kop.jpg", "assets/images/kow.jpg"]

	var counter = 0;
	var wins = 0;
	var losses = 0;
	$("#win").text(wins);
	$("#loss").text(losses);


	newCards();
	newGame();

	function newCards () {
		var numbers = []
			while(numbers.length < 4){
			  var randomnumber = Math.ceil(Math.random()*5)
			  var found = false;
			  for (var i=0; i< numbers.length; i++){
				if (numbers[i] == randomnumber){
					found = true; break
				}
			  }
			  if(!found)numbers[numbers.length]=randomnumber;
			}

		for (i = 0; i < numbers.length; i++) {
			var imageCard = $("<img>");
			imageCard.attr("data-num", numbers[i]);
			imageCard.attr("src", cards[i]);
			imageCard.attr("alt", "cards");
			imageCard.addClass("cardImage")
			$(".cards").append(imageCard);
		}
	}

	function newGame() {

		counter = 0;
		$("#yourScore").text(counter);

		function randomIntFromInterval(min,max){
		   	return Math.floor(Math.random()*(max-min+1)+min);
			}

		var numberToGuess = randomIntFromInterval(21,21);

		$(".value").text(numberToGuess);


		$(".cardImage").on('click', function(){
		    counter = counter + parseInt($(this).data('num'));

		    $("#yourScore").text(counter);

		    if (counter == numberToGuess){
		      $("#message").text("You won!");
		      wins ++;
		      $("#win").text(wins);
		      console.log(wins)
		      $(".cards").empty();
		      newCards();
		      newGame();

		    } else if ( counter > numberToGuess){
		        $("#message").text("House wins")
		        losses ++;
		        $("#loss").text(losses);
		        console.log(losses)
		        $(".cards").empty();
		        newCards();
		        newGame();
		    }
		});
	}

});
