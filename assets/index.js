// I) JE DECLARE CE DONT JE VAIS AVOIR BESOIN: 
let questions = ["Qui est la femme de Mickey ? : ",
"Qu'est-ce qui a tué Blanche neige ?: ",
"Pourquoi Cendrillon doit rentrer avant minuit ? : ",
"Comment fini l'histoire de la belle au bois dormant ? : ",
"Quel personnage n'est pas un Disney ? : "];


let answers = [
["Pluto", "Daisy", "Minnie", "Joe Bidden"],
["Une pomme empoisonée", "Le vaccin du covid", "Un coup de fusil du chasseur", "L'odeur de grincheux"],
["Car après minuit elle redevient Cendrillon", "Parce qu'il y'a écrit Virgin Mojito au lieu de Mojito sur la carte", "Parce qu'elle a bu beauuuucoup trop de Mojito", "Parce qu'elle a un deuxième date" ],
["Elle fini cocu et noie son chagrin dans l'alcool", "Elle et le prince participent aux Anges de la téléréalité et finissent leur vie à Dubai pour ne pas payer d'impôts", "Ils vécurent heureux et eurent beaucoup d'enfants", "Elle supplia la mauvaise fée de la réendormir quand elle senti l'haleine du Prince" ],
["Poccahontas", "Moufassa", "La reine des neiges", "Le professeur Raoult parce qu'il nous vend plus de rêve que tous les Disneys réunis"],
];

let goodAnswers = ["Minnie","Une pomme empoisonée","Car après minuit elle redevient Cendrillon","Ils vécurent heureux et eurent beaucoup d'enfants","Le professeur Raoult parce qu'il nous vend plus de rêve que tous les Disneys réunis"];
let score = 0;
let globalCount = 0;     //j'ai ajouter une variable compteur global  que je vais attribuer à mes tableaux  questions et answers pour que le cpu  relie la question en position [i] dans mon tableau questions, au tableau qui a la même position [i] dans le tableau answers] //




function diplayQuestion() { 
    document.querySelector('#Q').innerHTML = questions[globalCount]; //(***)
    displayReponses(); 
}
if (globalCount < questions.length) {
    diplayQuestion();
}


function displayReponses() {         
    let reponseContainer = document.querySelectorAll(".choicereponse"); //tableau d'element HTML (mes boutons)
    for (let i = 0; i < reponseContainer.length; i++) { //boucle parcourant mes boutons un a un
        reponseContainer[i].innerHTML = answers [globalCount][i]; //insertion de la reponse a chaque boutons
    }
}


function solution() { /*je créé une fonction pour afficher la bonne réponse */  
    document.querySelector("#theGoodanswerIs").innerHTML = "La bonne réponse est : " + goodAnswers[globalCount];
    setTimeout(() => document.querySelector("#theGoodanswerIs").innerHTML = " ",3000);// pr effacer la bonne rep au bout de 3s
    }

  /*ci-dessous,je créer une fonction pour que lorsque le joueur clique sur ça réponse le cpu affiche ce qui va se passer selon les condition que je vais définir dans ma fonction reply  */                    
 function reply (element) {
    // condition si tu as bien répondu
    if (element.innerHTML == goodAnswers[globalCount] && globalCount < 5){
        score++; /*<=> score=score+1 */
        document.querySelector("#score").innerHTML = "Bravo! score: " +score;
        globalCount++; /* (%%%)*/
        diplayQuestion();
        displayReponses();

    // condition quand tu as répondu à tout je rappelle les questions,reponses, et solution avec une valeur de zero pour redemarrer://
    }else if ( globalCount == 4) {
        solution();
        
    //condition si reponse fausse:
    } else {
        document.querySelector("#score").innerHTML = "score: " +score;
        solution();
        globalCount++;
        diplayQuestion();
        displayReponses(); 
    }
}

function reset(){
    document.getElementById("btn-rejouer");
    diplayQuestion();
    displayReponses(); 
    score = 0;
    document.querySelector("#score").innerHTML = "score: " +score;
    globalCount = 0; 
    };














