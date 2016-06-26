
$(document).ready(function(){


var game = {
	
defender: "empty" ,
character: "empty" ,
remaining: 3 ,


obiwan:{position:"#start-area",
		healthStart: 120 ,
		attackStart: 8 ,
		health: 120,
		attack: 8,
		number:obiwannumber ,
},

luke:{position:"#start-area",
	  healthStart: 100 ,
	  attackStart: 5 ,
	  health: 100 ,
	  attack : 5 ,
	  number: lukenumber ,
},

darthmaul:{position:"#start-area",
	  healthStart: 180 ,
	  attackStart: 25 ,
	  health: 180 ,
	  attack : 25 ,
	  number:darthmaulnumber ,
},

darthsidius:{position:"#start-area",
	  healthStart: 150 ,
	  attackStart: 12 ,
	  health: 150 ,
	  attack : 12 ,
	  number: darthsidiusnumber ,
},

}; 

function updateHealth(){
	$("#obiwannumber").empty();
	$("#lukenumber").empty();
	$("#darthmaulnumber").empty();
	$("#darthsidiusnumber").empty();
	$("#obiwannumber").append(game.obiwan.health);
	$("#lukenumber").append(game.luke.health);
	$("#darthmaulnumber").append(game.darthmaul.health);
	$("#darthsidiusnumber").append(game.darthsidius.health);
};

function checkForWin(){
	if(game.remaining == 0){
		$("#message-area").empty();
		$("#message-area").append("You Win");
	}
	else{;}
};

function message(def, youAttack, defAttack){
	$("#message-area").empty();
	$("#message-area").html("<h3>You attacked " + def + " for " + youAttack + " damage,and " + def + " attacked you for " + defAttack + " damage.</h3>");
};

function enemyCSS(a){
	$(a).css({"background-color": "#ff0000", "border-color": "#000000"})
	$(a + 'number').css("color", "#000000");
	$(a + 'name').css("color","#000000");
};

function defenderCSS(a){
	$(a).css({"background": "#000000" , "border-color": "#ffffff" , "font-color": "#ffffff" })
	$(a + 'number').css("color", "#ffffff");
	$(a + 'name').css("color","#ffffff");
};

function initialCSS(a){
	$(a).css({"background": "#ffffff" , "border-color": "#009900" , "font-color": "#000000" })
	$(a + 'number').css("color", "#000000");
	$(a + 'name').css("color","#000000");
};

$("#obiwan").click(function(){

if(game.character == "empty"){
	moveFrom("#obiwan","#start-area","#your-character");
		game.obiwan.position= "#your-character" ;
		game.character = "obiwan";
	moveFrom("#luke","#start-area","#enemy-area");
		game.luke.position = "#enemy-area" ;
		enemyCSS("#luke");
	moveFrom("#darthmaul","#start-area","#enemy-area");
		game.darthmaul.position = "#enemy-area";
		enemyCSS("#darthmaul");
	moveFrom("#darthsidius","#start-area","#enemy-area");
		game.darthsidius.position = "#enemy-area"; 
		enemyCSS("#darthsidius");
}
else if(game.character=="obiwan"){;}
else if(game.defender == "empty"){
	moveFrom("#obiwan","#enemy-area","#defender-area");
	game.defender = "obiwan" ;
	game.obiwan.position = "#defender-area"
	defenderCSS("#obiwan");
}
else if(game.defender =="obiwan"){
	moveFrom("#obiwan","#defender-area","#enemy-area");
	game.defender = "empty";
	game.obiwan.position = "#enemy-area";
	enemyCSS("#obiwan");
	$("#message-area").empty();
}
else {  ; }
});


$("#luke").click(function(){

if(game.character == "empty"){
	moveFrom("#luke","#start-area","#your-character");
		game.luke.position= "#your-character" ;
		game.character = "luke";
	moveFrom("#obiwan","#start-area","#enemy-area");
		game.obiwan.position = "#enemy-area" ;
		enemyCSS("#obiwan");
	moveFrom("#darthmaul","#start-area","#enemy-area");
		game.darthmaul.position = "#enemy-area";
		enemyCSS("#darthmaul");
	moveFrom("#darthsidius","#start-area","#enemy-area");
		game.darthsidius.position = "#enemy-area"; 
		enemyCSS("#darthsidius");
}
else if(game.character=="luke"){;}
else if(game.defender == "empty"){
	moveFrom("#luke","#enemy-area","#defender-area");
	game.defender = "luke" ;
	game.luke.position = "#defender-area" ;
	defenderCSS("#luke");
}
else if(game.defender =="luke"){
	moveFrom("#luke","#defender-area","#enemy-area");
	game.defender = "empty";
	game.luke.position = "#enemy-area";
	enemyCSS("#luke");
	$("#message-area").empty();
}
else {  ; } 
});

$("#darthmaul").click(function(){

if(game.character == "empty"){
	moveFrom("#darthmaul","#start-area","#your-character");
		game.darthmaul.position= "#your-character" ;
		game.character = "darthmaul";
	moveFrom("#obiwan","#start-area","#enemy-area");
		game.obiwan.position = "#enemy-area" ;
		enemyCSS("#obiwan");
	moveFrom("#luke","#start-area","#enemy-area");
		game.luke.position = "#enemy-area";
		enemyCSS("#luke");
	moveFrom("#darthsidius","#start-area","#enemy-area");
		game.darthsidius.position = "#enemy-area"; 
		enemyCSS("#darthsidius");
}
else if(game.character=="darthmaul"){;}
else if(game.defender == "empty"){
	moveFrom("#darthmaul","#enemy-area","#defender-area");
	game.defender = "darthmaul" ;
	game.darthmaul.position = "#defender-area"
	defenderCSS("#darthmaul");
}
else if(game.defender =="darthmaul"){
	moveFrom("#darthmaul","#defender-area","#enemy-area");
	game.defender = "empty";
	game.darthmaul.position = "#enemy-area";
	enemyCSS("#darthmaul");
	$("#message-area").empty();
}
else {  ; } 
});

$("#darthsidius").click(function(){

if(game.character == "empty"){
	moveFrom("#darthsidius","#start-area","#your-character");
		game.darthsidius.position= "#your-character" ;
		game.character = "darthsidius";
	moveFrom("#obiwan","#start-area","#enemy-area");
		game.obiwan.position = "#enemy-area" ;
		enemyCSS("#obiwan");
	moveFrom("#darthmaul","#start-area","#enemy-area");
		game.darthmaul.position = "#enemy-area";
		enemyCSS("#darthmaul");
	moveFrom("#luke","#start-area","#enemy-area");
		game.luke.position = "#enemy-area"; 
		enemyCSS("#luke");
}
else if(game.character=="darthsidius"){;}
else if(game.defender == "empty"){
	moveFrom("#darthsidius","#enemy-area","#defender-area");
	game.defender = "darthsidius" ;
	game.darthsidius.position = "#defender-area" ;
	defenderCSS("#darthsidius");
}
else if(game.defender =="darthsidius"){
	moveFrom("#darthsidius","#defender-area","#enemy-area");
	game.defender = "empty";
	game.darthsidius.position = "#enemy-area";
	enemyCSS("#darthsidius");
	$("#message-area").empty();
}
else {  ; } 
});

function moveFrom(toMove,start,destination){

	$(start +'>'+ toMove ).appendTo( destination);
};

$("#reset").click(function(){
	$(game.obiwan.position + '>#obiwan').appendTo( $('#start-area') );
	$(game.luke.position + '>#luke').appendTo( $('#start-area') );
	$(game.darthmaul.position + '>#darthmaul').appendTo( $('#start-area') );
	$(game.darthsidius.position + '>#darthsidius').appendTo( $('#start-area') );
	$("#message-area").empty();
	$("#obiwan").css("display","initial");
	$("#luke").css("display","initial");
	$("#darthmaul").css("display","initial");
	$("#darthsidius").css("display","initial");
	initialCSS("#obiwan");
	initialCSS("#luke");
	initialCSS("#darthsidius");
	initialCSS("#darthmaul");
	game.defender= "empty";
	game.character = "empty";
	game.remaining = 3 ;
	game.obiwan.health = game.obiwan.healthStart ;
	game.obiwan.attack = game.obiwan.attackStart ;
	game.luke.health = game.luke.healthStart ;
	game.luke.attack = game.luke.attackStart ;
	game.darthmaul.health = game.darthmaul.healthStart ;
	game.darthmaul.attack = game.darthmaul.attackStart ;
	game.darthsidius.health = game.darthsidius.healthStart ;
	game.darthsidius.attack = game.darthsidius.attackStart ;
	updateHealth()
});

$("#attack").click(function(){

	if(game.character=="obiwan"){
		if(game.defender=="luke"){
			game.obiwan.health -= game.luke.attack ;
			game.luke.health -= game.obiwan.attack ;
			message("Luke",game.obiwan.attack , game.luke.attack);
			game.obiwan.attack += game.obiwan.attackStart;
			updateHealth();
			if(game.obiwan.health <= 0){
				$("#message-area").empty();
				$("#message-area").append( "You Lose");}
			if(game.luke.health <= 0){
				game.defender = "empty";
				$("#message-area").empty();
				moveFrom("#luke","#defender-area","#enemy-area");
				$("#luke").css("display", "none");
				game.luke.position = "#enemy-area";
				game.remaining -= 1 ;}
			checkForWin();
		}
		else if(game.defender=="darthmaul"){
			game.obiwan.health -= game.darthmaul.attack ;
			game.darthmaul.health-= game.obiwan.attack ;
			message("Darth Maul",game.obiwan.attack , game.darthmaul.attack);
			game.obiwan.attack += game.obiwan.attackStart;
			updateHealth();
			if(game.obiwan.health <= 0){
				$("#message-area").empty();
				$("#message-area").append( "You Lose");}
			if(game.darthmaul.health <= 0){
				game.defender = "empty";
				$("#message-area").empty();
				moveFrom("#darthmaul","#defender-area","#enemy-area");
				$("#darthmaul").css("display", "none");
				game.darthmaul.position = "#enemy-area";
				game.remaining -= 1 ;}			
			checkForWin();
		}
		else if(game.defender=="darthsidius"){
			game.obiwan.health -= game.darthsidius.attack ;
			game.darthsidius.health-= game.obiwan.attack ;
			message("Darth Sidius",game.obiwan.attack , game.darthsidius.attack);
			game.obiwan.attack += game.obiwan.attackStart;
			updateHealth();
			if(game.obiwan.health <= 0){
				$("#message-area").empty();
				$("#message-area").append( "You Lose");}
			if(game.darthsidius.health <= 0){
				game.defender = "empty";
				$("#message-area").empty();
				moveFrom("#darthsidius","#defender-area","#enemy-area");
				$("#darthsidius").css("display", "none");
				game.darthsidius.position = "#enemy-area";
				game.remaining -= 1 ;}
			checkForWin();
		}
		else{;}
	}
	
	else if(game.character=="luke"){

		if(game.defender=="obiwan"){
			game.luke.health -= game.obiwan.attack ;
			game.obiwan.health -= game.luke.attack ;
			message("Obi Wan",game.luke.attack , game.obiwan.attack);
			game.luke.attack += game.luke.attackStart;
			updateHealth();
			if(game.luke.health <= 0){
				$("#message-area").empty();
				$("#message-area").append( "You Lose");}
			if(game.obiwan.health <= 0){
				game.defender = "empty";
				$("#message-area").empty();
				moveFrom("#obiwan","#defender-area","#enemy-area");
				$("#obiwan").css("display", "none");
				game.obiwan.position = "#enemy-area";
				game.remaining -= 1 ;}
			checkForWin();
		}
		else if(game.defender=="darthmaul"){
			game.luke.health -= game.darthmaul.attack ;
			game.darthmaul.health-= game.luke.attack ;
			message("Darth Maul",game.luke.attack , game.darthmaul.attack);
			game.luke.attack += game.luke.attackStart;
			updateHealth();
			if(game.luke.health <= 0){
				$("#message-area").empty();
				$("#message-area").append( "You Lose");}
			if(game.darthmaul.health <= 0){
				game.defender = "empty";
				$("#message-area").empty();
				moveFrom("#darthmaul","#defender-area","#enemy-area");
				$("#darthmaul").css("display", "none");
				game.darthmaul.position = "#enemy-area";
				game.remaining -= 1 ;}
			checkForWin();
		}
		else if(game.defender=="darthsidius"){
			game.luke.health -= game.darthsidius.attack ;
			game.darthsidius.health-= game.luke.attack ;
			message("Darth Sidius",game.luke.attack , game.darthsidius.attack);
			game.luke.attack += game.luke.attackStart;
			updateHealth();
			if(game.luke.health <= 0){
				$("#message-area").empty();
				$("#message-area").append( "You Lose");}
			if(game.darthsidius.health <= 0){
				game.defender = "empty";
				$("#message-area").empty();
				moveFrom("#darthsidius","#defender-area","#enemy-area");
				$("#darthsidius").css("display", "none");
				game.darthsidius.position = "#enemy-area";
				game.remaining -= 1 ;}
			checkForWin();
		}
		else{;}
	}

	else if(game.character=="darthmaul"){

		if(game.defender=="obiwan"){
			game.darthmaul.health -= game.obiwan.attack ;
			game.obiwan.health -= game.darthmaul.attack ;
			message("Obi Wan",game.darthmaul.attack , game.obiwan.attack);
			game.darthmaul.attack += game.darthmaul.attackStart;
			updateHealth();
			if(game.darthmaul.health <= 0){
				$("#message-area").empty();
				$("#message-area").append( "You Lose");}
			if(game.obiwan.health <= 0){
				game.defender = "empty";
				$("#message-area").empty();
				moveFrom("#obiwan","#defender-area","#enemy-area");
				$("#obiwan").css("display", "none");
				game.obiwan.position = "#enemy-area";
				game.remaining -= 1 ;}
			checkForWin();
		}
		else if(game.defender=="luke"){
			game.darthmaul.health -= game.luke.attack ;
			game.luke.health-= game.darthmaul.attack ;
			message("Luke",game.darthmaul.attack , game.luke.attack);
			game.darthmaul.attack += game.darthmaul.attackStart;
			updateHealth();
			if(game.darthmaul.health <= 0){
				$("#message-area").empty();
				$("#message-area").append( "You Lose");}
			if(game.luke.health <= 0){
				game.defender = "empty";
				$("#message-area").empty();
				moveFrom("#luke","#defender-area","#enemy-area");
				$("#luke").css("display", "none");
				game.luke.position = "#enemy-area";
				game.remaining -= 1 ;}
			checkForWin();
		}
		else if(game.defender=="darthsidius"){
			game.darthmaul.health -= game.darthsidius.attack ;
			game.darthsidius.health-= game.darthmaul.attack ;
			message("Darth Sidius",game.darthmaul.attack , game.darthsidius.attack);
			game.darthmaul.attack += game.darthmaul.attackStart;
			updateHealth();
			if(game.darthmaul.health <= 0){
				$("#message-area").empty();
				$("#message-area").append( "You Lose");}
			if(game.darthsidius.health <= 0){
				game.defender = "empty";
				$("#message-area").empty();
				moveFrom("#darthsidius","#defender-area","#enemy-area");
				$("#darthsidius").css("display", "none");
				game.darthsidius.position = "#enemy-area";
				game.remaining -= 1 ;}
			checkForWin();
		}
		else{;}
	}

		else if(game.character=="darthsidius"){

		if(game.defender=="obiwan"){
			game.darthsidius.health -= game.obiwan.attack ;
			game.obiwan.health -= game.darthsidius.attack ;
			message("Obi Wan",game.darthsidius.attack , game.obiwan.attack);
			game.darthsidius.attack += game.darthsidius.attackStart;
			updateHealth();
			if(game.darthsidius.health <= 0){
				$("#message-area").empty();
				$("#message-area").append( "You Lose");}
			if(game.obiwan.health <= 0){
				game.defender = "empty";
				$("#message-area").empty();
				moveFrom("#obiwan","#defender-area","#enemy-area");
				$("#obiwan").css("display", "none");
				game.obiwan.position = "#enemy-area";
				game.remaining -= 1 ;}
			checkForWin();
		}
		else if(game.defender=="luke"){
			game.darthsidius.health -= game.luke.attack ;
			game.luke.health -= game.darthsidius.attack ;
			message("Luke",game.darthsidius.attack , game.luke.attack);
			game.darthsidius.attack += game.darthsidius.attackStart;
			updateHealth();
			if(game.darthsidius.health <= 0){
				$("#message-area").empty();
				$("#message-area").append( "You Lose");}
			if(game.luke.health <= 0){
				game.defender = "empty";
				$("#message-area").empty();
				moveFrom("#luke","#defender-area","#enemy-area");
				$("#luke").css("display", "none");
				game.luke.position = "#enemy-area";
				game.remaining -= 1 ;}
			checkForWin();
		}
		else if(game.defender=="darthmaul"){
			game.darthsidius.health -= game.darthmaul.attack ;
			game.darthmaul.health-= game.darthsidius.attack ;
			message("Darth Maul",game.darthsidius.attack , game.darthmaul.attack);
			game.darthsidius.attack += game.darthsidius.attackStart;
			updateHealth();
			if(game.darthsidius.health <= 0){
				$("#message-area").empty();
				$("#message-area").append( "You Lose");}
			if(game.darthmaul.health <= 0){
				game.defender = "empty";
				$("#message-area").empty();
				moveFrom("#darthmaul","#defender-area","#enemy-area");
				$("#darthmaul").css("display", "none");
				game.darthmaul.position = "#enemy-area";
				game.remaining -= 1 ;}
			checkForWin();
		}
		else{;}
	}
}); 

updateHealth();

/*----------------------------------*/
});