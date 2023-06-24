const ATTACK_VALUE = 10;
const STRONG_ATTACK_HANDLER = 17;
const MONSTER_ATTACK_VALUE = 14;
const HEAL_VALUE = 20;

const enteredValue = prompt('Maximum life for you and the mosnter.', '100')
let chosenMaxLife = parseInt(enteredValue)

if (isNaN(chosenMaxLife) || chosenMaxLife <= 0){
    chosenMaxLife = 100;
}
let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;

adjustHealthBars(chosenMaxLife);

function reset() {
    currentMonsterHealth = chosenMaxLife;
    currentPlayerHealth = chosenMaxLife;
    resetGame(chosenMaxLife);
}

function endround() {
    const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
    currentPlayerHealth -= playerDamage;
    if (currentMonsterHealth <= 0 && currentPlayerHealth > 0) {
        alert('You won!');
        reset();
    } else if (currentPlayerHealth <= 0 && currentMonsterHealth > 0){
        alert('You Lost Loser!!');
        reset();
    } else if (currentMonsterHealth <= 0 && currentPlayerHealth <= 0) {
        alert('Draw!');
        reset();
    }
}

function attackMonster(mode){
    let maxDamage;
    if(mode === 'ATTACK') {
        maxDamage = ATTACK_VALUE;
    } else if(mode === 'STRONG_ATTACK'){
        maxDamage = STRONG_ATTACK_HANDLER;
    }
    const damage = dealMonsterDamage(maxDamage);
    currentMonsterHealth -= damage;
    endround();   
}

function attackHandler() {
    attackMonster('ATTACK');
}

function strongAttackHandler () {
    attackMonster('STRONG_ATTACK');

}

function healPlayerHandler() {
    let healValue;
    if(currentPlayerHealth >= chosenMaxLife - HEAL_VALUE){
        alert("Can't Heal Now Bitch!");
        healValue = chosenMaxLife - currentPlayerHealth;
    } else {
        healValue = HEAL_VALUE;
    }


    increasePlayerHealth(HEAL_VALUE);
    currentPlayerHealth += HEAL_VALUE;
    endround();
}

attackBtn.addEventListener('click', attackHandler);
strongAttackBtn.addEventListener('click', strongAttackHandler);
healBtn.addEventListener('click', healPlayerHandler);
