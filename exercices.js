/*Exercice 1 perimetre & aire*/
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

/*Exercice 2 conversion en secondes*/

let jours = document.getElementById('jours');
let heures = document.getElementById('heures');
let minutes = document.getElementById('minutes');
let secondes = document.getElementById('secondes');
let tempsEnSec = document.getElementById('tempsEnSec');

tempsEnSec.onclick = function() {
	document.getElementById('reponse2').innerHTML = jours.value*24*3600 + heures.value*3600 + minutes.value*60 + secondes.value + ' secondes';
}

/*Exercice 3 comparer deux dates résultat en secondes*/

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

/*Exercie 4 loto*/

let compteurLoto = 0;
let tirerNb1 = document.getElementById('tirerNb1');
let tirerNb2 = document.getElementById('tirerNb2');
let tirerNb3 = document.getElementById('tirerNb3');
let tirerNbChance = document.getElementById('tirerNbChance');
let tirerLoto = document.getElementById('tirerLoto');

function afficherResultat() {
	if (document.getElementById('nb1').innerHTML==document.getElementById('lotoNb1').innerHTML && document.getElementById('nb2').innerHTML==document.getElementById('lotoNb2').innerHTML && document.getElementById('nb3').innerHTML==document.getElementById('lotoNb3').innerHTML && document.getElementById('nbChance').innerHTML==document.getElementById('lotoNbChance').innerHTML) {
		document.getElementById('messageLoto').innerHTML = "WINNER!!!! - Nombre de clics : " + compteurLoto;
	}
	else {
		document.getElementById('messageLoto').innerHTML = "LOSER....-_-'''' - Nombre de clics : " + compteurLoto;
	}
}

tirerNb1.onclick = function() {
	document.getElementById('nb1').innerHTML = Math.floor(Math.random()*10)+1;
	compteurLoto++;
	afficherResultat();
}
tirerNb2.onclick = function() {
	document.getElementById('nb2').innerHTML = Math.floor(Math.random()*10)+1;
	compteurLoto++;
	afficherResultat();
}
tirerNb3.onclick = function() {
	document.getElementById('nb3').innerHTML = Math.floor(Math.random()*10)+1;
	compteurLoto++;
	afficherResultat();
}
tirerNbChance.onclick = function() {
	document.getElementById('nbChance').innerHTML = Math.floor(Math.random()*5)+1;
	compteurLoto++;
	afficherResultat();
}
tirerLoto.onclick = function() {
	document.getElementById('lotoNb1').innerHTML = Math.floor(Math.random()*10)+1;
	document.getElementById('lotoNb2').innerHTML = Math.floor(Math.random()*10)+1;
	document.getElementById('lotoNb3').innerHTML = Math.floor(Math.random()*10)+1;
	document.getElementById('lotoNbChance').innerHTML = Math.floor(Math.random()*5)+1;
	afficherResultat();
}

