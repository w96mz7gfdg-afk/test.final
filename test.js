const prompt = require('prompt-sync')();
const candidats = [
	{
		cin: "AB123456",
		nom: "afensou",
		prenom: "housine",
		partiPolitique: "waw",
		age: 40,
		electeurs: ["CD234567", "GH456789", "MN789012", "GI012456"]
	},
	{
		cin: "CD234567",
		nom: "Alaoui",
		prenom: "Yassine",
		partiPolitique: "Indépendant",
		age: 45,
		electeurs: []
	},
	{
		cin: "EF345678",
		nom: "Bennani",
		prenom: "Salma",
		partiPolitique: "law",
		age: 32,
		electeurs: ["FH901345", "QR901234", "UV123567"]
	},
	{
		cin: "GH456789",
		nom: "Chraibi",
		prenom: "Hamza",
		partiPolitique: "Indépendant",
		age: 38,
		electeurs: []
	},
	{
		cin: "IJ567890",
		nom: "El Amrani",
		prenom: "Mehdi",
		partiPolitique: "jaw",
		age: 51,
		electeurs: []
	},
	{
		cin: "KL678901",
		nom: "Berrada",
		prenom: "Nadia",
		partiPolitique: "jaw",
		age: 43,
		electeurs: ["ST012345", "YZ345789"]
	},
	{
		cin: "MN789012",
		nom: "Fassi",
		prenom: "Omar",
		partiPolitique: "Indépendant",
		age: 36,
		electeurs: []
	},
	{
		cin: "OP890123",
		nom: "Tazi",
		prenom: "Imane",
		partiPolitique: "waw",
		age: 29,
		electeurs: []
	},
	{
		cin: "QR901234",
		nom: "Mansouri",
		prenom: "Karim",
		partiPolitique: "Indépendant",
		age: 47,
		electeurs: []
	},
	{
		cin: "ST012345",
		nom: "Naciri",
		prenom: "Aya",
		partiPolitique: "Indépendant",
		age: 35,
		electeurs: []
	},
	{
		cin: "UV123567",
		nom: "Tahiri",
		prenom: "Reda",
		partiPolitique: "Indépendant",
		age: 41,
		electeurs: []
	},
	{
		cin: "WX234678",
		nom: "Zeroual",
		prenom: "Meryem",
		partiPolitique: "jaw",
		age: 39,
		electeurs: []
	},
	{
		cin: "YZ345789",
		nom: "Idrissi",
		prenom: "Ayoub",
		partiPolitique: "waw",
		age: 44,
		electeurs: []
	},
	{
		cin: "AC456890",
		nom: "Rami",
		prenom: "Hiba",
		partiPolitique: "law",
		age: 31,
		electeurs: []
	},
	{
		cin: "BD567901",
		nom: "Kabbaj",
		prenom: "Anas",
		partiPolitique: "waw",
		age: 48,
		electeurs: ["CE678012"]
	},
	{
		cin: "CE678012",
		nom: "Mekki",
		prenom: "Lina",
		partiPolitique: "Indépendant",
		age: 28,
		electeurs: []
	},
	{
		cin: "DF789123",
		nom: "El Fassi",
		prenom: "Rachid",
		partiPolitique: "jaw",
		age: 53,
		electeurs: []
	},
	{
		cin: "EG890234",
		nom: "Ouazzani",
		prenom: "Sara",
		partiPolitique: "law",
		age: 37,
		electeurs: []
	},
	{
		cin: "FH901345",
		nom: "Kettani",
		prenom: "Ilyas",
		partiPolitique: "Indépendant",
		age: 34,
		electeurs: []
	},
	{
		cin: "GI012456",
		nom: "Mouline",
		prenom: "Nour",
		partiPolitique: "Indépendant",
		age: 42,
		electeurs: []
	}
];
function nouveaucandidat() {
	let obj = {}
	let kain = false

	let cin = prompt("entres le cin :");
	let nom = prompt("entres le nom :");
	let prenom = prompt("entres le prenom :");
	let partiPolitique = prompt("entres le artiPolitique :");
	let age = +prompt("entres le age :")
	for (let i = 0; i < candidats.length; i++) {
		if (candidats[i].cin === cin) {
			kain = true
		}
	}
	if (kain === false) {
		obj.cin = cin;
		obj.nom = nom;
		obj.prenom = prenom;
		obj.partiPolitique = partiPolitique;
		obj.age = age;
		obj.electeurs = []
		candidats.push(obj);
		console.log(candidats)
	}
	else {
		console.log("maimknch dkhl jouj mrat.");

	}
}
nouveaucandidat();

function Ajouterplusieurs() {
	let number = prompt("entres les number des condidat :")
	for (let i = 0; i < number; i++) {
		nouveaucandidat();

	}
}
Ajouterplusieurs()

function listedescandidats(candidats) {
	console.log("1-Trier les candidats par nombre de votes");
	console.log("2-afficher uniquement les candidats d'un parti politique spécifique.");
	let n = prompt("entre un nombre :")
	if (n == 1) {
		let amr;
		for (let i = 0; i < candidats.length-1; i++) {
			for (let j = i + 1; j < candidats.length; j++) {
				if (candidats[i].electeurs.length < candidats[j].electeurs.length) {
					amr = candidats[i];
					candidats[i] = candidats[j];
					candidats[j] = amr
				}	
			}
		}
		for (let i = 0; i < candidats.length; i++) {
			console.log("cin :", candidats[i].cin);
			console.log("nom :", candidats[i].nom);
			console.log("prenom : ", candidats[i].prenom);
			console.log("partiPolitique : ", candidats[i].partiPolitique);
			console.log("age:", candidats[i].age);
			console.log("electeurs: ", candidats[i].electeurs.length);

		}


	}

	else if (n ==2) {
		console.log("kain waw ou kaina law ou jaw");
		let partiPolitique=prompt("3tini smya ta3 lhizb li baghi :" )
		for (let i = 0; i < candidats.length; i++) {
			if (candidats[i].partiPolitique ===partiPolitique) {
				console.log("cin :", candidats[i].cin);
				console.log("nom :", candidats[i].nom);
				console.log("prenom : ", candidats[i].prenom);
				console.log("partiPolitique : ", candidats[i].partiPolitique);
				console.log("age:", candidats[i].age);
				console.log("electeurs: ", candidats[i].electeurs);
			}
		}
	}
	else {
		console.log("choisi 1 ou 2")
	}

}
listedescandidats(candidats)

function Voterpouruncandidat(){
let n=prompt("entre ton CIN :")
let lka=false
for(let i=0;i<candidats.length;i++){
    for (let b=0;b<candidats.length;b++)
    if(candidats[i].electeurs[b]==n){
        lka=true;
    }
    }
    if(lka===false){
        let w =prompt("entre le nom ou cin de candidats que tu vote a vous :");
        let jda;
        for(let j=0;j<candidats.length;j++){
            if(candidats[j].cin===w ||candidats[j].nom===w){
                candidats[j].electeurs.push(n);
            }
            else{
              jda="hada ma3ndnach "
            }
        }
        console.log(jda)
    }
    else{
        console.log("Vous avez déjà voté et vous navez pas le droit de modifier votre vote ni de voter à nouveau");  
    }
}
Voterpouruncandidat()

function  lesinformationsduncandidat(){
let n=prompt("3tini condida li biti tbdl fih :");
let a=prompt("3tini ach bit tbdl fih flprati plitique :");
let b=prompt("3tini ach biti tbdl flparti age :");
for(let i=0 ;i<candidats.length;i++){
    if(candidats[i].name===n){


    }
    else{
        let s ="il na pas un candidat bhad smya"
    }
}
console.log 
}













//const p=false
//while(!false){
//	console.log("1. Ajouter un nouveau candidat :","2. Ajouter plusieurs candidats à la fois.");
//	let n=+prompt("entres un number")
//	switch(n){
//		case 1:



//	}

//} 

