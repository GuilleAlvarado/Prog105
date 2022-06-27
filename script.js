let rollDice = document.querySelector('.btn--roll');
let holdScore = document.querySelector('.btn--hold');
let newGame = document.querySelector('.btn--new');
let numPic = document.querySelector('.dice');
let currLab1 = document.querySelector('#current--0');
let currLab2 = document.querySelector('#current--1');
let styleP1 = document.querySelector('.player--0');
let styleP2 = document.querySelector('.player--1');
let activeP = document.querySelector('.player--active');



rollDice.addEventListener('click', rollNum);
holdScore.addEventListener('click', holdNum);
newGame.addEventListener('click', setNew);

let turn = 1;
let currNum = 0;
let player1T = 0;
let player2T = 0;
let winScore = 20;

function checkScore(totalScore,turn){
    if(totalScore >= winScore){
        console.log('end');
        rollDice.disabled = true;
        holdScore.disabled = true;
        styleP1.classList.add('player--active');
        styleP2.classList.remove('player--active');     
        alert(`Player ${turn} won with ${totalScore}!!!!`);
    }
}

function rollNum(){
    let rand = Math.floor((Math.random()* 6) +1);
    numPic.src=`dice-${rand}.png`;
    console.log(rand);
    switch(turn){
        case 1:
            if(rand != 1){
            currNum += rand;
            document.getElementById('current--0').textContent=currNum;
            }else {
                currNum = 0;
                document.getElementById('current--0').textContent=currNum;
                styleP1.classList.remove('player--active');
                styleP2.classList.add('player--active');
                turn = 2;
            }
            break;
        case 2:
            if(rand != 1){
                currNum += rand;
                document.getElementById('current--1').textContent=currNum;
                }else {
                    currNum = 0;
                    document.getElementById('current--1').textContent=currNum;
                    styleP2.classList.remove('player--active');
                    styleP1.classList.add('player--active');
                    turn = 1;
                }
            break;

    } 
}

function holdNum(){
    switch(turn){
        case 1:
            player1T += currNum;
            currNum = 0;
            document.getElementById('score--0').textContent=player1T;
            document.getElementById('current--0').textContent=currNum;
            styleP1.classList.remove('player--active');
            styleP2.classList.add('player--active');
            checkScore(player1T,turn);
            turn = 2;
            break;
        case 2:
            player2T += currNum;
            currNum = 0;
            document.getElementById('score--1').textContent=player2T;
            document.getElementById('current--1').textContent=currNum;
            styleP2.classList.remove('player--active');
            styleP1.classList.add('player--active');
            checkScore(player2T,turn);
            turn = 1;
            break;

    }
}

function setNew(){
    player1T = 0;
    document.getElementById('score--0').textContent=player1T;
    player2T = 0;
    document.getElementById('score--1').textContent=player2T;
    turn = 1;
    numPic.src=`dice-1.png`;
    rollDice.disabled = false;
    holdScore.disabled = false;
}