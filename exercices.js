function perimetreRectangle(longueur, largeur) {
	let perimetre = longueur*2 + largeur*2;
	return perimetre;
}

function aireRectangle(longueur, largeur) {
	let aire = longueur*largeur;
	return aire;
}

function conversionEnSecondes(heures, minutes, secondes) {
	let tempsEnSecondes = heures*3600 + minutes*60 + secondes;
	return tempsEnSecondes;
}