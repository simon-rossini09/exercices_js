var fruits=['Banane','Raisin', 'Pommes']
document.write(fruits); 
console.log(fruits.join());
console.log(fruits);

/* je demande à l'utilisateur de saisir un fruit avec propmpt */
var saisie_utilisateur = prompt('Saisir un fruit');
for(var index=0; index < fruits.length; index++)
{
	if(saisie_utilisateur == fruits[index]){
		console.log("vous avez mangé " + saisie_utilisateur);
		fruits.splice(index,1);
	}
}
console.log(fruits);