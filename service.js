request = require('request');

//Version moins bonne car console.log dans le service

/*function listerClients(start, size, fonctionClients){

	request('http://localhost:8080/clients?start='+start+'&size='+size, { json:true}, function(err,res,body) {
		if (err) { return console.log('Erreur',err); }
		//console.log('Ok',body); ancienne façon
		fonctionClients(body);
	});
}
exports.listerClients = listerClients;


function ajouterClient(saisieNom, saisiePrenom, fonctionClients) {
	request('http://localhost:8080/clients', { json: true, method: 'POST',
    body: {
        nom : saisieNom,
        prenoms : saisiePrenom
    }}, function(err,res,body) {
    	if (err) {return console.log('Erreur',err); }
    	fonctionClients(body);
    });
}

exports.ajouterClient = ajouterClient;

*/

//correction de ça

function listerClients(start, size, callbackSuccess, callbackError){

	request('http://localhost:8080/clients?start='+start+'&size='+size, { json:true}, function(err,res,body) {
		if (err) { 
			callbackError(err); 
		} else {
			callbackSuccess(body);
		}
	});
}
exports.listerClients = listerClients;


function ajouterClient(saisieNom, saisiePrenom, callbackSuccess, callbackError) {
	request('http://localhost:8080/clients', { json: true, method: 'POST',
    body: {
        nom : saisieNom,
        prenoms : saisiePrenom
    }}, function(err,res,body) {
    	if (err) {
    		callbackError(err); 
    	} else {
    		callbackSuccess(body);
    	}
    });
}

exports.ajouterClient = ajouterClient;