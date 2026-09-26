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
		console.log("done")
	}
	else {
		console.log("maimknch dkhl jouj mrat.");

	}
}


function Ajouterplusieurs() {
	let number = prompt("entres les number des condidat :")
	for (let i = 0; i < number; i++) {
		nouveaucandidat();

	}
}


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


function Voterpouruncandidat(){
let n=prompt("entre ton CIN :")
let trouve = false
for(let i=0;i<candidats.length;i++){
    for (let j=0;j< candidats[i].electeurs.length;j++){ 
        if(candidats[i].electeurs[j]==n ){
            trouve=true;
		    break;
    }
    }
}
    if(trouve===false){
        let w =prompt("entre le nom ou cin de candidats que tu vote a vous :");
        let trouvecondidat = false
        for(let j=0;j<candidats.length;j++){
            if(candidats[j].cin===w ||candidats[j].nom===w){
                candidats[j].electeurs.push(n);
				trouvecondidat=true;
				break;
            }
		}	
            if (trouvecondidat===false){
              console.log("hada ma3ndnach ");
			  
            }
        }
		else{
			console.log("Vous avez déjà voté et vous navez pas le droit de modifier votre vote ni de voter à nouveau");  
		}
		
}


function  lesinformationsduncandidat(){
let n=prompt("3tini cin ta3 condidat li biti tbdl fih :");
  let s;
for(let i=0 ;i<candidats.length;i++){
	if(candidats[i].cin===n){
		console.log("1-tbdil lpdal lparti politique")		
		console.log("2-tbdl flparti age")
		let j=prompt("khtar ach bit tbdl :")
		let a ;
		let b ;
		let l ;
		if(j==1){  
		a=prompt("3tini ach bit tbdl fih flprati plitique :");
			candidats[i].partiPolitique=a ;
			}
		else if(j==2) {
			 b=+prompt("3tini ach biti tbdl flparti age :");
		        candidats[i].age=b	
		}
		else {
			 l="hada makainch ahbibi"
			 console.log(l)
	
		}
		break;
    }
    else{
         s ="il na pas un candidat bhad smya"
		}
	}
	console.log(s);
console.log(candidats)
}

function Supprimeruncandidat(){
	let a =prompt("entres cin de candidat:")
	let b=false
	for(let i=0;i<candidats.length;i++){
		if(candidats[i].cin===a){
			candidats.splice(i,1);
			b=true;
			break;
		}
		if (b==true){
			console.log("ce condidat a ete surpprime.")
		}
		else{
             console.log("je ne ai pas trouve ce condidat.");
		}
	}
}

function Rechercherdescandidats(){
	let n=prompt("entre le nom du candidat que tu veux approcher :");
	let b=false
	for(let i=0;i<candidats.length;i++){
		if(candidats[i].nom===n){
			console.log("cin :",candidats[i].cin);
			console.log("nom :",candidats[i].nom);
			console.log("prenom :",candidats[i].prenom);
			console.log("partiPolitique :",candidats[i].partiPolitique);
			console.log("age :",candidats[i].age);
			console.log("electurs :",candidats[i].electeurs.length);
			b=true
			break;
		}
	}
		    if (b===false){
				console.log("je ne ai pas trouve ce condidat.")
			}
}

function Statistiquesdelélection(){
	console.log("1-Afficher le nombre total de candidats.");
	console.log("2-Afficher le nombre total de votes exprimés dans toute l'élection.");
	console.log("3-Afficher le Top 3 des candidats ayant le plus de votes.");
	console.log("4-Afficher le nombre de candidats par parti politique.");
	let n=+prompt("entres un numbres :");
	if (n==1){   
		let total=0
		for(let i=0;i<candidats.length;i++){
			total+=1
		}
		console.log("total :",total);
	}
	else if(n==2){
		let total=0
		for(let j=0;j<candidats.length;j++){
			total +=candidats[j].electeurs.length
		}
		console.log("nombres de vote :",total);
	}
	else if(n==3){
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
		for (let i = 0; i < 3; i++) {
			console.log("cin :", candidats[i].cin);
			console.log("nom :", candidats[i].nom);
			console.log("prenom : ", candidats[i].prenom);
			console.log("partiPolitique : ", candidats[i].partiPolitique);
			console.log("age:", candidats[i].age);
			console.log("electeurs: ", candidats[i].electeurs);
			
		}
	}
	else if(n==4){
		let a=0;
	    let b=0;
	    let c=0;
        for(let i=0;i<candidats.length;i++){
			if(candidats[i].partiPolitique==="waw"){
				a+=1
			} 
			else if (candidats[i].partiPolitique==="law"){
				b+=1
			}
			else if (candidats[i].partiPolitique==="jaw"){
				c+=1
			}
		}
		console.log("waw :",a);
		console.log("law :",b);
		console.log("jaw :",c);
		
	}   
}

let p=true
while(p){
	console.log("1. Ajouter un nouveau candidat .");
	console.log("2. Ajouter plusieurs candidats à la fois.");
	console.log("3. Afficher la liste des candidats");
	console.log("4. Voter pour un candidat ");
	console.log("5. Modifier les informations d'un candidat");
	console.log("6. Supprimer un candidat");
	console.log("7. Rechercher des candidats");
	console.log("8. Statistiques de l'élection");
	console.log("9.bach tkhrj ");
	
		let n=+prompt("entres un number :")
		switch(n){
				case 1 :
		nouveaucandidat();
		break;
		        case 2 :
        Ajouterplusieurs();
		break;
		        case 3 :
		listedescandidats(candidats);
		break;
				case 4 :
        Voterpouruncandidat();
		break;
		        case 5 :
		lesinformationsduncandidat();
		break;
		        case 6 :
        Supprimeruncandidat();
		break;
		        case 7 :
        Rechercherdescandidats();
		break;
		        case 8 :
		Statistiquesdelélection();
		break;
		       case 9 :
		p=false
		break;	
		      default :
			  console.log("Entres un numero entre 1 et 9");	
	}
		}
