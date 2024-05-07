// State Variables can be declared outside of the onReady
// Feel free to make this to what you want!
// Example:
let fungusHP = 100;
let fighterAP = 100;
const min = 0;
let fungusMovement = document.getElementById('fungus-movement');
let attackButton = document.getElementsByClassName('attack-btn');
let attackBar = document.getElementById('ap-meter');
let healthBar = document.getElementById('hp-meter');
const hitPoints = document.getElementsByClassName('hp-text')[0];
const attackPoints = document.getElementsByClassName('ap-text')[0];
// let regen = setInterval(healthBar, 1000);

console.log('hitpoints', hitPoints);
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
    const hitPoints = document.getElementsByClassName('hp-text')[0];
    const attackPoints = document.getElementsByClassName('ap-text')[0];
    

    fighterAP -= Number(event.target.dataset.ap);
    fungusHP -= Number(event.target.dataset.hp);
    fungusHP = Math.max(fungusHP, 0);
    fighterAP = Math.max(fighterAP, 0);
    attackBar.value -= Number(event.target.dataset.ap);
    healthBar.value -= Number(event.target.dataset.hp);

    hitPoints.innerText = `${fungusHP} HP`;
    attackPoints.innerText = `${fighterAP} HP`;


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
    
    startFungusRegen();


}

function attackEntangle(event){
    // const hitPoints = document.getElementsByClassName('hp-text')[0]
    // const attackPoints = document.getElementsByClassName('ap-text')[0]

    fighterAP -= Number(event.target.dataset.ap);
    fungusHP -= Number(event.target.dataset.hp);
    fungusHP = Math.max(fungusHP, 0);
    fighterAP = Math.max(fighterAP, 0);
    attackBar.value -= Number(event.target.dataset.ap);
    healthBar.value -= Number(event.target.dataset.hp);

    hitPoints.innerText = `${fungusHP} HP`;
    attackPoints.innerText = `${fighterAP} HP`;

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

    startFungusRegen()
}

function attackDragon(event){
    // const hitPoints = document.getElementsByClassName('hp-text')[0];
    // const attackPoints = document.getElementsByClassName('ap-text')[0];

    fighterAP -= Number(event.target.dataset.ap);
    fungusHP -= Number(event.target.dataset.hp);
    fungusHP = Math.max(fungusHP, 0);
    fighterAP = Math.max(fighterAP, 0);
    attackBar.value -= Number(event.target.dataset.ap);
    healthBar.value -= Number(event.target.dataset.hp);

    hitPoints.innerText = `${fungusHP} HP`;
    attackPoints.innerText = `${fighterAP} HP`;

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

    startFungusRegen()

}

function attackStar(event){
    // const hitPoints = document.getElementsByClassName('hp-text')[0]
    // const attackPoints = document.getElementsByClassName('ap-text')[0]

    fighterAP -= Number(event.target.dataset.ap);
    fungusHP -= Number(event.target.dataset.hp);
    fungusHP = Math.max(fungusHP, 0);
    fighterAP = Math.max(fighterAP, 0);
    attackBar.value -= Number(event.target.dataset.ap);
    healthBar.value -= Number(event.target.dataset.hp);
    

    hitPoints.innerText = `${fungusHP} HP`;
    attackPoints.innerText = `${fighterAP} AP`;

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

    startFungusRegen()
}

function startFungusRegen(){

    fungusRegen = setInterval(fungusRegen, 1000);

}

function fungusRegen(){
    if(fungusHP > 0 && fungusHP < 50){
        hitPoints.innerText = `${fungusHP} HP`
        fungusHP ++;
        healthBar.value ++;
    } else if(fungusHP > 50){
        clearInterval();
    }
}


