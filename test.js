const prompt = require('prompt-sync')();
let candidats = [
	{
		cin: "AB123456",
		nom: "Boushaba",
		prenom: "Soufiane",
		partiPolitique: "Indépendant",
		age: 40,
		electeurs: []
	},
	{
		cin: "CD234567",
		nom: "Alaoui",
		prenom: "Yassine",
		partiPolitique: "Parti du Progrès",
		age: 35,
		electeurs: []
	},
	{
		cin: "EF345678",
		nom: "Bennani",
		prenom: "Amine",
		partiPolitique: "Indépendant",
		age: 42,
		electeurs: []
	},
	{
		cin: "GH456789",
		nom: "El Mansouri",
		prenom: "Omar",
		partiPolitique: "Parti de la Justice",
		age: 38,
		electeurs: []
	},
	{
		cin: "IJ567890",
		nom: "Chakir",
		prenom: "Hamza",
		partiPolitique: "Parti du Renouveau",
		age: 45,
		electeurs: []
	},
	{
		cin: "KL678901",
		nom: "Tazi",
		prenom: "Mehdi",
		partiPolitique: "Indépendant",
		age: 33,
		electeurs: []
	},
	{
		cin: "MN789012",
		nom: "Amrani",
		prenom: "Anas",
		partiPolitique: "Parti Social",
		age: 41,
		electeurs: []
	}
];

function nouveaucandidat(){
	let obj={}
	let kain=false

     let cin = prompt("entres le cin :");
	 let nom = prompt("entres le nom :");
	 let prenom = prompt("entres le prenom :");
	 let partiPolitique =prompt("entres le artiPolitique :");
	 let age =+prompt("entres le age :")
	 for(let i=0 ;i<candidats.length ;i++){ 
		if(candidats[i].cin===cin){
			kain=true
		}
	}
	if(kain===false){ 	
	 obj.cin=cin;
	 obj.nom=nom;
	 obj.prenom=prenom;
	 obj.partiPolitique=partiPolitique;
	 obj.age=age;
	 obj.electeurs=[]
candidats.push(obj);
console.log(candidats)
}
else {
console.log("maimknch dkhl jouj mrat.");

}
	 }
	 nouveaucandidat();
	 
 function Ajouterplusieurs(){
	let number =prompt("entres les number des condidat :")
	for(let i=0 ;i<number;i++){
	nouveaucandidat();

	}
 }
Ajouterplusieurs()
















//const p=false
//while(!false){
//	console.log("1. Ajouter un nouveau candidat :","2. Ajouter plusieurs candidats à la fois.");
//	let n=+prompt("entres un number")
//	switch(n){
//		case 1:



//	}

//} 

