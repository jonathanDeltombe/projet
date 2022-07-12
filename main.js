//  let age = 18
// let prenom = "jonathan"

// console.log(`je m'appel ${prenom} et j'ai ${age} ans, mon prenom contient ${prenom.length} caractères`);
// console.log(prenom.split(''))

// let lettre = ['a','b','c','d','e']
// lettre.shift();
// console.log(lettre);
// lettre.push("z");
// console.log(lettre);

// console.log(lettre[lettre.length - 1]);
// lettre.splice(4, 0, "f","g");
// console.log(lettre);


// const personne = {
//     prenom: "Jonathan",
//     nom: "Deltombe",
//     age: 36,
//     passions: ["musique", "informatique", "skateboard"],
//     adresse : {
//     rue : "rue Nationale",
//     ville : "Millonfosse",
//     pays : "France"
//     }
//     };

//     console.log(personne);
//     personne.passions.push('boxe');
//     personne.adresse.rue= "george five";
//     console.log(personne);

//     personne.adresse = {
//         rue: 'Rue du 8 mai 1945',
//         ville: 'Millonfosse',
//         pays: 'France'
//       }
//       console.log(personne);


    //   let todos = [
    //     {
    //         id: 1,
    //         text: "Faire les courses",
    //         isCompleted: false,
    //     },
    //     {
    //         id: 2,
    //         text: "Balade au vieux Lille",
    //         isCompleted: false,
    //     },
    //     {
    //         id: 3,
    //         text: "Préparer le diner",
    //         isCompleted: true,
    //     },
    //     {
    //         id: 4,
    //         text: "Regarder la TV",
    //         isCompleted: true,
    //     },
    // ];


    // todos.forEach(function(todo){
    // document.write(`${todo.isCompleted? 'completée' : 'non completée'}` + "<br>")
    //  });


    //  let tab = [1,2,3,4,5,6]

    //  const listeTab = tab.map (function (tab) {
    //     return tab*tab
    //  })

    //  console.log(listeTab)

    //   let cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];

      
    //    console.log(cars.split("").join(""))
    //    function ReverseStr(str) {  return str.split('').reverse().join('');};


    //   cars.reverse();
    //   console.log(cars);


    //  const listeCar = cars.map (function(car){
    //     return car.length })
    //  console.log(listeCar);


//  console.log(cars.map((car) => car.length));

    // let i = 0
    // var length = todos.length;
    // let text = ""

    // while (i < length) {
    //     document.write(todos[i].text + '<br>');
    //      i++;    
    // }
    //    document.getElementById("demo").innerHTML = text;





    // let i = 0;

    // for (let i = 0; i < todos.length; i++) {
    //     document.write(`la tâche   ${todos[i].text}   est   ${todos[i].isCompleted? 'complétée' : 'non complétée'}` + "<br>");
    //     }

    // let tab = [1,2,3,4,5,6];
    // let len = tab.length;
    // let somme = 0;

    // for (let i= 0 ; i < tab/length; i++ ) {
    //     somme += tab[i] + "<br>"; 
    // }
    // document.getElementById("demo").innerHTML = i;


    // let length = todos.text[1,2,3,4].length;
    // let text = ""


    //   for (let i = 0 ; i < 3;) {
    //     text += todos.text[1,2,3,4] + "<br>";
    //      i++;
    //    }
    //  document.getElementById("demo").innerHTML = text;
     

    // console.log(todos[1].text);

    // result = `la tache faire les courses est ${todos.isCompleted == true ?'non complétée':'complété'}`;
    // console.log(result);

    // var result = todos[1].isCompleted? "complétée" : "non complétée";
    // console.log(result);

//     console.log(todos);
//     todos.push({'id':5, text: "Faire le ménage", isCompleted: true,});
//     console.log(todos);

//     // console.log(todos.length);
//     // console.log(todos);

    
//     console.log(todos[todos.length-1].id+1)
//     console.log(todos);

//     var rand = Math.floor(Math.random()*todos.length);
//     var resultat = todos[rand];
//     console.log(resultat);

//     if (age >= 18) {
//   console.log("Majeur");
//     } else if(age < 18) {
//         console.log("Mineur");
//     }

    // let txt1 = "how're you todae?";
    // let txt2 = "welcome to HTMLr";


// if (txt1.length > txt2.length) {
//     console.log("phrase 1 plus longue")
//   } else if (txt1.length< txt2.length) {
//     console.log("phrase 2 plus longue")}
//     else {
//         console.log("les 2 phrases sont de meme longueur")};
  
// let performance = 70; // nb compris entre 0-100
// let prime = 0;
  
// if (performance >= 90){
//     prime = 200
// } else if (performance >= 80){
//     prime = 150
// } else if (performance >= 70){
//     prime = 100
// } else (performance < 70)
// {
// }
// console.log(`avec une performance de '${performance}' vous gagnez une prime de '${prime}'`)

// let ages = 17;

// let message = ages >= 18 ? "majeur" : "mineur";
//   console.log(`tu es ${message}`);

// let voiture = "v"
// let camion = "c"

// let vehicule = {
//     id: 11456,
//     matricule: "GH 114654 - 59",
//     type: "v",
//     age: 5,
// };

// // var result = vehicule.type != "v" ? "un camion" : "une voiture";
// // console.log(`le vehicule est ${result}`);
// result = `le vehicule est ${vehicule.type != "c" ?'une voiture':'un camion'}`;
// console.log(result);

// let toto = prompt('quel est votre nom?')
// console.log(toto)

// let level = prompt('quel est votre level?')

// switch (level) {
//     case 'junior':
//      console.log(`avec votre grade de '${level}' vous gagnez 1800`);
// break;
//     case 'confirmee':
//      console.log(`avec votre grade de '${level}' vous gagnez 2500`);
// break;
//     case 'senior':
//      console.log(`avec votre grade de '${level}' vous gagnez 3500`);
// break;
//     default:
//     console.log("erreur");
// };


// console.log(level)
// console.log(`Avec votre grade de "${level}" vous gagnez un salaire de "${consol.log}"`);

// let performance = prompt('indiquez votre performance (entre 0-100)');

// switch (true) {
//     case performance >=80 && 90<= 200:
//         console.log("200");
//         break;
//     case performance >=70 && 80<= 150:
//         console.log("150");
//         break;
//     case performance >= 70 && 70<= 100:
//         console.log("100");
//         break;
//     default:
//         prime = 0
// }

// let nbreDeRoues = prompt('nombre de roue');
// nbreDeRoues = parseInt(nbreDeRoues);

// switch (nbreDeRoues) {
//    case 2:
//      console.log("moto");
//       break;
//    case 4:
//      console.log("voiture");
//    break;
//    case 6:
//      console.log("camion");
//    break;
//    default:
//      console.log("erreur");
// }
// let i = 0;
// let length = fruits.length;
// let text = ""

//  var fruits = ["mangue", "poire", "ananas", "noisette", "papaye", "chataigne", "cerise"]
//  var copie = []


 


// for (; i < length;) {
//     text += "le fruit est une " + fruits[i] + "<br>";
//     i++;
// }
// document.getElementById("demo").innerHTML = text;




// function somme(a, b, c) {

//     var a = 10
//     var b = 1000
//     var c = 10000

//     return a * b * c;
//     }

//     // console.log(somme());

//     let sommes = ( a, b ) => {
//         return a - b 
//     }

//     console.log(sommes());

// var enSeconde = (minute * 60);

// function convertir (a, enSeconde) {

//     return a * enSeconde
// }

// console.log(convertir(10,enSeconde));


// function multiplication (num1){
//     return num1 * 60;
//   };

//   console.log(multiplication(5));
  


// function retour (arr) {
// return (tab[0])
// }
// console.log(retour())

// function aléatoire (array) {
//     var rand = Math.random()*array.length | 0;
//     var valeur = array[rand];
//     return valeur;
// }

// var tab = ["voiture","camion","velo"]
// var valeur = aléatoire(tab)

// console.log(aléatoire);

// var monTableau = ['peugeot', 'bmw', 'ford', 'opel', 'nissan', 'mercedes'];
// var valeur = RandArray(monTableau);

// function RandArray(array){

//     var rand = Math.random()*array.length | 0;
//     var valeur = array[rand];
//     return valeur;
// }

// // for (; i < length;) {
// //         text += "la voiture est une " + monTableau[i] + "<br>";
// //         i++;
// //     }
// // document.getElementById("demo").innerHTML = text;


// document.write(`${valeur.toUpperCase()}`);

// var arr = [10,20,30];
// var max = Math.max(arr);

// function maxEntier(arr) {
//     return Math.max.apply(null, arr);
// }

// console.log(maxEntier());


// var tableau = [10, 20, 30, 4, 8, 222];
// var max = tableau.reduce(function(a,b) {
//     console.log(a,b)
//     return Math.min(a, b);
//   });

// console.log("max",max);



// function Calculatrice(a, b, op) {

//     var op = prompt('Choisissez votre opérateur [ + - / * ] :');
//     var a = 0
//     var b = 0

//     switch (op) {
  
//       case '+' :
//         return a + b;
//       case '-':
//         return a - b;
//       case '*':
//         return a * b;
//       case '/':
//         return a / b;
//     }
//   }
//   console.log(Calculatrice())

function calc(){
  return eval(prompt('calcul'))
}

console.log(calc())