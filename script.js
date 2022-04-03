const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const fireEl = document.querySelector('.fire');
const btnFire = document.querySelector('.btn--roll');
const btnNew = document.querySelector('.btn--new');


//score0El.textContent = currentscoreplayer1;
//score1El.textContent = currentscoreplayer2;
fireEl.classList.add('hidden');
//btnFire.classList.add('hidden');

let currentscoreplayer1 = 100;
let currentscoreplayer2 = 100;
let activePlayer = 0;
let wins = [0,0];
let playing = true;

const init = function () {
    currentscoreplayer1 = 100;
    currentscoreplayer2 = 100;
    activePlayer = 0;
    wins = [0,0];
    score0El.textContent = currentscoreplayer1;
    score1El.textContent = currentscoreplayer2;
    playing = true;
    current0El.textContent = 0;
    current1El.textContent = 0;
    player0El.classList.remove('player--winner');
    player1El.classList.remove('player--winner');
    player0El.classList.add('player--active');
    player1El.classList.remove('player--active');
}

init();

btnFire.addEventListener('click', function() {
if (playing){


//1.Generate random Power(0-5)
const power = Math.trunc(Math.random()*5)+1;

if (activePlayer === 0){
    //2.Check if power is greater than remaining score
    if (power > currentscoreplayer2){
        //Set score back to 100
        score0El.textContent = 100;
        score1El.textContent = 100;
        wins[0] += 1;
        document.getElementById('current--0').textContent = wins[0];
        //If current player wins===3 (Game Won)
        if(wins[0] === 3){
            document.querySelector('.player--0').classList.add('player--winner');
            document.querySelector('.player--0').classList.remove('player--active');
            playing = false;
            fireEl.classList.add('hidden');

        }else{
            currentscoreplayer1 = 100;
            currentscoreplayer2 = 100;
        }
    }else{
        currentscoreplayer2 = currentscoreplayer2 - power;
        //3.Display that power.
        fireEl.classList.remove('hidden');
        fireEl.src = `fire-${power}.png`;
        //4.Display new score.
        document.getElementById('score--1').textContent = currentscoreplayer2;
        //5.Switch player.
        activePlayer = 1;
        player0El.classList.toggle('player--active');
        player1El.classList.toggle('player--active');
    }
}else {
    //2.Check if power is greater than remaining score
    if (power > currentscoreplayer1){
        //Set score back to 100
        score0El.textContent = 100;
        score1El.textContent = 100;
        wins[1] += 1;
        document.getElementById('current--1').textContent = wins[1];
        //If current player wins===3 (Game Won)
        if(wins[1] === 3){
            document.querySelector('.player--1').classList.add('player--winner');
            document.querySelector('.player--1').classList.remove('player--active');
            playing = false;
            fireEl.classList.add('hidden');

        }else{
        currentscoreplayer1 = 100;
        currentscoreplayer2 = 100;
        }
    }else{
        currentscoreplayer1 = currentscoreplayer1 - power;
        //3.Display that power.
        fireEl.classList.remove('hidden');
        fireEl.src = `fire-${power}.png`;
        //4.Display new score.
        document.getElementById('score--0').textContent = currentscoreplayer1;
        //5.Switch player.
        activePlayer = 0;
        player0El.classList.toggle('player--active');
        player1El.classList.toggle('player--active');
    }
}}})


btnNew.addEventListener('click', init);