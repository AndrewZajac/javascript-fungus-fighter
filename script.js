// State Variables can be declared outside of the onReady
// Feel free to make this to what you want!
// Example:
let fungusHP = 100;
let fighterAP = 100;

// let arcaneSceptorDoc = document.getElementById("attack-btn arcane-scepter").value;
// let entangleDoc = document.getElementById("attack-btn entangle").value;
// let dragonBladeDoc = document.getElementById("attack-btn dragon-blade").value;
// let starFireDoc = document.getElementById("attack-btn star-fire").value;
// let apText = document.getElementById("ap-text");
// let hpText = document.getElementById("hp-text");

// let arcaneSceptor = {
//     APCost: 12,
//     HPDamage: 14
// }
// let entangle = {
//     APCost: 23,
//     HPDamage: 9
// }
// let dragonBlade = {
//     APCost: 38,
//     HPDamage: 47
// }
// let starFire = {
//     APCost: 33,
//     HPDamage: 25
// }

// let attacks = [arcaneSceptor, entangle, dragonBlade, starFire]

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
    console.log('Fire?', event);
    console.log(event.target.dataset);
    const hitPoints = document.getElementsByClassName('hp-text')[0]
    console.log('This is hitpoints', hitPoints);
    // let firstHitPoints= hitPoints[0].innerText = `${fungusHP} HP`

    fungusHP -= Number(event.target.dataset.hp);
    console.log('this is fungus hp', fungusHP);

    hitPoints.innerText = fungusHP;

//     const element = event.target;
//     console.log(element);
//     let arcaneSceptorDoc = document.getElementById("attack-btn arcane-scepter");
    // let entangleDoc = document.getElementById("attack-btn entangle");
    // let dragonBladeDoc = document.getElementById("attack-btn dragon-blade");
    // let starFireDoc = document.getElementById("attack-btn star-fire");
    // document.getElementById('ap-text').innerText += `${fighterAP}`
    // document.getElementById('hp-text').innerText += `${fungusHP}`
    // if(element === arcaneSceptorDoc){
    //     fungusHP -14;
    //     fighterAP -12;
    // } 
    // else if(element === entangleDoc){
    //     fungusHP -9;
    //     fighterAP -23;
    // } else if(element === dragonBladeDoc){
    //     fungusHP -47;
    //     fighterAP -38;
    // } else if(element === starFireDoc){
    //     fungusHP -25;
    //     fighterAP -33;
    // }
}