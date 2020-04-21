	var readline = require('readline');

	rl = readline.createInterface({     
		input: process.stdin,     
		output: process.stdout 
	});

	var service = require('./service.js');

function start(){

	console.log('\n1. Lister les clients \n2. Ajouter un client\n99. Sortir\n');
	rl.question('Quelle option choisissez-vous ? : ', function(saisie) {
		if (saisie == 1){
			
			console.log(">> Lister clients\n ");
			service.listerClients(0,10, function(listeClients){
				console.log(listeClients);
				start();
			}, function (err) {
				console.log('Erreur : ',err);
			});
		}
		else if (saisie == 2){
			console.log(">> Ajouter un client\n");
			rl.question('Entrer le nom : ', function (saisieNom) {

                rl.question('Entrer le prenom du client : ', function (saisiePrenom) {
					service.ajouterClient(saisieNom, saisiePrenom, function (clientAjoute){
						console.log("client ajouté, uuid = " + clientAjoute.uuid);
						start();
						//on a juste ajoute la function (err) pour ne plus avoir de console.log dans service
					}, function (err) {
						console.log('Erreur : ', err);
					});
				})
			})
		}
		else if (saisie == 99) {
			console.log('Au revoir')
			rl.close();
		}
	})

}

exports.start = start;

