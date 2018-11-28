/*Exercice1*/
let longueur = document.getElementById('longueur');
let largeur = document.getElementById('largeur');
let btnPerimetre = document.getElementById('btnPerimetre');
let btnAire = document.getElementById('btnAire');


btnPerimetre.onclick = function() {
	let perimetre = longueur.value *2 + largeur.value *2;
	document.getElementById('reponse1').innerHTML = perimetre + ' m';
}

btnAire.onclick = function() {
	let aire = longueur.value * largeur.value;
	document.getElementById('reponse1').innerHTML = aire + ' m²';
}

/*Exercice2*/

let jours = document.getElementById('jours');
let heures = document.getElementById('heures');
let minutes = document.getElementById('minutes');
let secondes = document.getElementById('secondes');
let tempsEnSec = document.getElementById('tempsEnSec');

tempsEnSec.onclick = function() {
	document.getElementById('reponse2').innerHTML = jours.value*24*3600 + heures.value*3600 + minutes.value*60 + secondes.value + ' secondes';
}

/*Exercice3*/

let date1 = document.getElementById('date1');
let date2 = document.getElementById('date2');
let btnEcart = document.getElementById('btnEcart');

btnEcart.onclick = function() {
	dateArr1 = date1.value.split('-');
	dateArr2 = date2.value.split('-');
	console.log(dateArr1+dateArr2);
	monthDiff = dateArr2[0] - dateArr1[0];
	dayDiff = dateArr2[1] - dateArr1[1];
	yearDiff = dateArr2[2] - dateArr1[2];
	document.getElementById('reponse3').innerHTML = yearDiff*365*24*3600 + dayDiff*24*3600 + monthDiff*30.5*24*3600 + ' secondes';
}


