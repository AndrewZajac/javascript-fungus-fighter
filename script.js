// State Variables can be declared outside of the onReady
// Feel free to make this to what you want!
// Example:
let fungusHP = 100;
let fighterAP = 100;
const min = 0;
let fungusMovement = document.getElementById('fungus-movement');
let attackButton = document.getElementsByClassName('attack-btn');

console.log('fungusmovement', fungusMovement);
console.log('attack button', attackButton);

function disableAttacks(){
    
    for(let i = 0; i< attackButton.length; i++){
            attackButton[i].disabled = true;
    }
}


function onReady() {
    console.log("Ready to go!")
    
    // Make sure you check the index.html file! 
    // There are lots of buttons and things ready for you to hook into here!
    
    // 🧠 Remember
    // - Handle events that ->
    // - Updates state which is ->
    // - Rendered to the DOM
}


onReady()

function attackArcane(event){
    const hitPoints = document.getElementsByClassName('hp-text')[0]
    const attackPoints = document.getElementsByClassName('ap-text')[0]
    

    fighterAP -= Number(event.target.dataset.ap);
    fungusHP -= Number(event.target.dataset.hp);
    fungusHP = Math.max(fungusHP, 0);
    fighterAP = Math.max(fighterAP, 0);

    hitPoints.innerText = fungusHP;
    attackPoints.innerText = fighterAP;


    if(fungusHP <= 0){
        fungusHP = 0;
        fungusMovement.classList.replace('walk', 'dead');
        console.log('fungus', fungusHP);
        disableAttacks();
    }
    if(fighterAP <= 0){
        fighterAP = 0;
        fungusMovement.classList.replace('walk', 'jump')
        console.log('fighter', fighterAP);
        disableAttacks();
    }
    // if(fungusHP === 0){
    //     fungusMovement.classList.replace('walk', 'dead');
    //     console.log(classList);
    //     console.log('fungus2'), fungusHP;
    // }
    // if(fighterAP === 0){
    //     fungusMovement.classList.replace('walk', 'jump')
    //     console.log('fighter2', fighterAP);
    // }

    // if(fighterAP === 0 || fungusHP === 0){
    //     // fungusMovement.classList.replace('walk', 'jump')
    //     console.log('fighterfungus',fungusHP, fighterAP);
    //     attackButton[i].disabled = true;
    // }


    // if(fungusHP <= min){
    //     console.log('Im dead', fungusHP);
    //     fungusHP = min;
    //     fungusHP === min;
    // }

    // checkHealth();
    // dead();


}

function attackEntangle(event){
    const hitPoints = document.getElementsByClassName('hp-text')[0]
    const attackPoints = document.getElementsByClassName('ap-text')[0]

    fighterAP -= Number(event.target.dataset.ap);
    fungusHP -= Number(event.target.dataset.hp);
    fungusHP = Math.max(fungusHP, 0);
    fighterAP = Math.max(fighterAP, 0);

    hitPoints.innerText = fungusHP;
    attackPoints.innerText = fighterAP;

    if(fungusHP <= 0){
        fungusHP = 0;
        fungusMovement.classList.replace('walk', 'dead');
        console.log('fungus', fungusHP);
        disableAttacks();
    }
    if(fighterAP <= 0){
        fighterAP = 0;
        fungusMovement.classList.replace('walk', 'jump')
        console.log('fighter', fighterAP);
        disableAttacks();
    }
    // if(fighterAP === 0 || fungusHP === 0){
    //     // fungusMovement.classList.replace('walk', 'jump')
    //     console.log('fighterfungus',fungusHP, fighterAP);
    //     attackButton.disabled = true;
    // }

    // console.log('no lower than 0', fighterAP);

    // checkHealth();
    // dead();

}

function attackDragon(event){
    const hitPoints = document.getElementsByClassName('hp-text')[0];
    const attackPoints = document.getElementsByClassName('ap-text')[0];

    fighterAP -= Number(event.target.dataset.ap);
    fungusHP -= Number(event.target.dataset.hp);
    fungusHP = Math.max(fungusHP, 0);
    fighterAP = Math.max(fighterAP, 0);

    hitPoints.innerText = fungusHP;
    attackPoints.innerText = fighterAP;

    if(fungusHP <= 0){
        fungusHP = 0;
        fungusMovement.classList.replace('walk', 'dead');
        console.log('fungus', fungusHP);
        disableAttacks();
    }
    if(fighterAP <= 0){
        fighterAP = 0;
        fungusMovement.classList.replace('walk', 'jump')
        console.log('fighter', fighterAP);
        disableAttacks();
    }
    // if(fighterAP === 0 || fungusHP === 0){
    //     // fungusMovement.classList.replace('walk', 'jump')
    //     console.log('fighterfungus',fungusHP, fighterAP);
    //     attackButton.disabled = true;
    // }

    // checkHealth();
    // dead();

}

function attackStar(event){
    const hitPoints = document.getElementsByClassName('hp-text')[0]
    const attackPoints = document.getElementsByClassName('ap-text')[0]

    fighterAP -= Number(event.target.dataset.ap);
    fungusHP -= Number(event.target.dataset.hp);
    fungusHP = Math.max(fungusHP, 0);
    fighterAP = Math.max(fighterAP, 0);

    hitPoints.innerText = fungusHP;
    attackPoints.innerText = fighterAP;

    if(fungusHP <= 0){
        fungusHP = 0;
        fungusMovement.classList.replace('walk', 'dead');
        console.log('fungus', fungusHP);
        disableAttacks();
    }
    if(fighterAP <= 0){
        fighterAP = 0;
        fungusMovement.classList.replace('walk', 'jump')
        console.log('fighter', fighterAP);
        disableAttacks();
    }
    // if(fighterAP === 0 || fungusHP === 0){
    //     // fungusMovement.classList.replace('walk', 'jump')
    //     console.log('fighterfungus',fungusHP, fighterAP);
    //     attackButton.disabled = true;
    // }

    // dead();
    // checkHealth();
}


// function checkHealth(){
//     if(fungusHP <= 0){
//         fungusHP = 0;
//         console.log('fungus', fungusHP);
//     }
//     if(fighterAP <= 0){
//         fighterAP = 0;
//         console.log('fighter', fighterAP);
//     }
//     if(fungusHP === 0){
//         fungusMovement.classList.replace('walk', 'dead');
//         console.log('fungus2'), fungusHP;
//     }
//     if(fighterAP === 0){
//         fungusMovement.classList.replace('walk', 'jump')
//         console.log('fighter2', fighterAP);
//     }
//     if(fighterAP === 0 || fungusHP === 0){
//         // fungusMovement.classList.replace('walk', 'jump')
//         console.log('fighterfungus',fungusHP, fighterAP);
//         attackButton.disabled = true;
//     }
// }

// function dead(){
//     if(fungusHP < min){
//         console.log('Im dead', fungusHP);
//         fungusHP = min;
//     }
    // let deadFungus = document.getElementsByClassName('freaky-fungus walk')[0];
    // console.log('deadfungus', deadFungus);

    // fungusHP === min;
    // deadFungus.innerHTML = `<div class="freaky-fungus dead"></div>`
        
    // console.log('deadfungus', deadFungus);
// }


