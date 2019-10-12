// JavaScript Document
x = new Date();
maand = new Array("Januari","Februari","Maart","April","Mei","Juni","Juli","Augustus","September","Oktober","November","December");
dag = new Array("zondag","maandag","dinsdag","woensdag","donderdag","vrijdag","zaterdag");

function writeDatum(){
	document.getElementById("datumVandaag").innerHTML = ( dag[x.getDay()] + " " + x.getDate() + " " + maand[x.getMonth()] + "  " + x.getFullYear());
}

function voetText(){
	document.getElementById("footer").innerHTML = ("Copyright &copy; " +  x.getFullYear() + " Personal &amp; Privat site belongs to JaVaS.");
}

function message(){
	alert("Er wordt aangewerkt om hier iets zinvols te laten zien");
}

function goBack(){
	window.location = document.referrer;
	return false;
}

function gotoCamper(){
	window.location = "camper";
	return false;
}

function addLoadEvent(func) {   
	var oldonload = window.onload;   
	if (typeof window.onload != 'function') {   
		window.onload = func;   
	} else {   
		window.onload = function() {   
			if (oldonload) {   
				oldonload();   
			}   
			func();   
		}   
	}   
}

addLoadEvent(writeDatum);
addLoadEvent(voetText); 
