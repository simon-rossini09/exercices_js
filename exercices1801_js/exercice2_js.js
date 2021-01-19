/**Faire un script demandant à l’utilisateur de saisir un nombre entre 0 et 100 ensuite
il doit vérifier si c’est un nombre premier.
NB : Un nombre premier est donc un nombre dont ses seuls diviseurs sont 1 et luimême.
Les vingt-cinq nombres premiers inférieurs
à 100 sont :2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73
, 79, 83, 89, et 97.**/

console.log("")
	var nombre = prompt ("Saisir un nombre entre 0 et 100")
	if (nombre>=0 && nombre<=100)
		alert("Bravo mon gars!")

	while ( nombre % nombre==0 )  && (nombre % nombre-1!=0)
		{nombre-1==nombre--}
		if (nombre % nombre--==0) {nombre--==-1}
			else if (nombre -1==1) {c est un nombre premier!}