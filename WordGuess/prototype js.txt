<!DOCTYPE html>
<html>
<head>
	<title>WordGuess - Lester</title>
	<!-- Font Family -->
	<link href="https://fonts.googleapis.com/css?family=Jua" rel="stylesheet"> 
	<link rel="stylesheet" type="text/css" href="WordGuess.css">
	<!-- Icons -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
</head>
<body>
	<script src="WordGuess.js"></script>
	<div id="background">
		<!-- Start of first page -->
		<div id="first-page">
			<h1>Picturify</h1>
			<div id="play-button">
				<img src="play-button.png" onclick="nextPage();">
			</div>
			<div>
				<p>Made by Lester De Guzman</p>
				<div class="icons">
		            <a href="https://www.facebook.com/achep.16" target="_blank"><i class="fa fa-facebook-square"></i></a>
		            <a href="https://www.linkedin.com/in/lester-de-guzman-29618315a/" target="_blank"><i class="fa fa-linkedin-square"></i></a>
		            <a href="https://github.com/Lester016" target="_blank"><i class="fa fa-github"></i></a>
		            <a href="https://twitter.com/xLesterD" target="_blank"><i class="fa fa-twitter"></i></a>
		            <a href="https://dribbble.com/lester016" target="_blank"><i class="fa fa-dribbble"></i></a>
		        </div>dlear
			</div>
		</div>
		<!-- End of first page -->
		
		<!-- Start of second page -->
		<div id="second-page">
			<h1>Choose mode</h1>
			<div id="game-mode-container">
				<div class="img-container">
				  	<img src="second-page/onepiece.jpg" alt="Avatar" class="image">
				  	<div class="middle">
				    	<div class="text" onclick="thirdPageReveal()">Start</div>
				  	</div>
				</div>
				<div class="img-container">
				  	<img src="second-page/dragonball.jpg" alt="Avatar" class="image" style="width: 400px; height: 300px;">
				  	<div class="middle">
				    	<div class="text">Start</div>
				  	</div>
				</div>
				<div class="img-container">
				  	<img src="second-page/tokyoghoul.jpg" alt="Avatar" class="image" style="width: 300px; height: 400px;">
				  	<div class="middle">
				    	<div class="text">Start</div>
				  	</div>
				</div>
			</div>
		</div>
		<!-- End of second page -->

		<!-- Start of third page -->
		<div id="third-page">
			<h1>Guess the anime character</h1>
			<div class="guess-pic">
				<div class="levels">
					<img src="third-page\onepiece\luffy1.jpg">
					<img src="third-page\onepiece\luffy2.jpg">
					<br>
					<img src="third-page\onepiece\luffy3.jpg">
					<img src="third-page\onepiece\luffy4.jpg">
				</div>
				<div class="levels">
					<img src="third-page\onepiece\zorro1.jpg">
					<img src="third-page\onepiece\zorro2.jpg">
					<br>
					<img src="third-page\onepiece\zorro3.jpg">
					<img src="third-page\onepiece\zorro4.jpg">
				</div>
				<div class="levels">
					<img src="third-page\onepiece\sanji1.jpg">
					<img src="third-page\onepiece\sanji2.jpg">
					<br>
					<img src="third-page\onepiece\sanji3.jpg">
					<img src="third-page\onepiece\sanji4.jpg">
				</div>
				<div class="levels">
					<img src="third-page\onepiece\usopp1.jpg">
					<img src="third-page\onepiece\usopp2.jpg">
					<br>
					<img src="third-page\onepiece\usopp3.jpg">
					<img src="third-page\onepiece\usopp4.jpg">
				</div>
				<div class="levels">
					<img src="third-page\onepiece\robin1.jpg">
					<img src="third-page\onepiece\robin2.jpg">
					<br>
					<img src="third-page\onepiece\robin3.jpg">
					<img src="third-page\onepiece\robin4.jpg">
				</div>
				
			</div>
			<div class="input">
				<p class="answer">_</p>
				<p class="answer">_</p>
				<p class="answer">_</p>
				<p class="answer">_</p>
				<p class="answer">_</p>
				<p onclick="clearer()">C</p>
			</div>
			<div id="meow">
				<h2>CORRECT!</h2>
			</div>
			
			<div class="choices">
				<p class="choice" onclick="myFunction(0)">.</p>
				<p class="choice" onclick="myFunction(1)">.</p>
				<p class="choice" onclick="myFunction(2)">.</p>
				<p class="choice" onclick="myFunction(3)">.</p>
				<p class="choice" onclick="myFunction(4)">.</p>
				<br>
				<p class="choice" onclick="myFunction(5)">.</p>
				<p class="choice" onclick="myFunction(6)">.</p>
				<p class="choice" onclick="myFunction(7)">.</p>
				<p class="choice" onclick="myFunction(8)">.</p>
				<p class="choice" onclick="myFunction(9)">.</p>
				<p id="wew"></p>
			</div>
			<script>
					var answer = ["LUFFY", "ZORRO", "ROBIN", "USOPP", "SANJI"]; 
					var txt = "";
					
					var arrcount = -1;
					var choices;

					function inc(){
						arrcount++;
					}
					var text = "";
					var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
					var arrandom = [];
					// Random letter generator
					var zero = 0;
					function randomizer() {
						for(var l = 0; l < 15; l++){
							randval = (Math.floor(Math.random() * 10));
							if (arrandom.indexOf(randval) == -1) {
								arrandom.push(randval);
							}
						}
						for(var z = 0; z <= 4; z++){
							document.getElementsByClassName('choice')[arrandom[z]].innerHTML = possible.charAt(Math.floor(Math.random() * possible.length));
						}
						MyAnswer(answer[zero]);
					}
					randomizer();
					function MyAnswer(AnsArr){
						var Aleft = AnsArr;
						for(var lol = 0; lol < 10; lol++){
							if (document.getElementsByClassName('choice')[lol].innerHTML == ".") {
								Astr = Aleft.substr((Math.floor(Math.random() * Aleft.length)),1);
								document.getElementsByClassName('choice')[lol].innerHTML = Astr;
								Aleft = Aleft.replace(Astr,"");
							}
						}
					}
					
					
					// Clear button
					function undos() {
						for (arrcount; 0 <= arrcount; arrcount--) {
							document.getElementsByClassName('answer')[arrcount].innerHTML = "_";
						}
						for(i=0; i<=9; i++) {
							document.getElementsByClassName('choice')[i].style.visibility = "visible";
						}
					}
					// onclick
					function myFunction(a) {
						var b = document.getElementsByClassName('choice')[a];
						function lester() {
							inc();
							document.getElementsByClassName('answer')[arrcount].innerHTML = b.innerHTML;
							b.style.visibility = "hidden";
							var a1 = document.getElementsByClassName('answer')[0].innerHTML;
							var a2 = document.getElementsByClassName('answer')[1].innerHTML;
							var a3 = document.getElementsByClassName('answer')[2].innerHTML;
							var a4 = document.getElementsByClassName('answer')[3].innerHTML;
							var a5 = document.getElementsByClassName('answer')[4].innerHTML;
							var sum = a1+a2+a3+a4+a5;
									
							switch(sum) {
								case answer[0]:
									document.getElementsByClassName('levels')[0].style.display = "none";
									document.getElementsByClassName('levels')[1].style.display = "block";
									undos();
									zero++;
									randomizer();
									break;
								case answer[1]:
									document.getElementsByClassName('levels')[1].style.display = "none";
									document.getElementsByClassName('levels')[2].style.display = "block";
									undos();
									break;
								case answer[2]:
									document.getElementsByClassName('levels')[2].style.display = "none";
									document.getElementsByClassName('levels')[3].style.display = "block";
									undos();
									break;
								default:
									
							} 
						}
						lester();
					}			
					function clearer(){
						for (arrcount; 0 <= arrcount; arrcount--) {
							document.getElementsByClassName('answer')[arrcount].innerHTML = "_";
						}
						for(i=0; i<=9; i++) {
							document.getElementsByClassName('choice')[i].style.visibility = "visible";
						}
					}
					
					// function  choice1(param) {
					// 	choices =  document.getElementsByClassName('choice')[param];
					// 	document.getElementsByClassName('answer')[arrcount].innerHTML = choices.innerHTML;
					// 	choices.style.visibility = "hidden";
					// 	document.getElementById("tae").innerHTML = arrcount;
					// 	inc();
					// }
					// function clearer() {
					// 	--arrcount;
					// 	document.getElementsByClassName('answer')[arrcount].innerHTML = "_";
					// 	choices.style.visibility = "visible";
					// }
					// document.getElementById("tae").innerHTML = arrcount;
					
					
				</script>
		</div>

		
	</div>
</body>
</html>