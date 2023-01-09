// test js file in html
function box(){
    alert('I am a box!')
}


// home team
let home1 = document.getElementById('home-score-btn-1');
let home2 = document.getElementById('home-score-btn-2');
let home3 = document.getElementById('home-score-btn-3');

let homePointsElement = document.getElementById('home-score');
let homePoints = 0;

// guest team
let guest1 = document.getElementById('guest-score-btn-1');
let guest2 = document.getElementById('guest-score-btn-2');
let guest3 = document.getElementById('guest-score-btn-3');

let guestPointsElement = document.getElementById('guest-score');
let guestPoints = 0;

//reset game
//
//
let newGame = document.getElementById('reset-score')

function startNewGame(){
    homePointsElement.textContent = 0;
    guestPointsElement.textContent = 0;
    homePoints = 0;
    guestPoints = 0;
}

// game points home and guests

function plusOneHome(){
    homePoints += 1;
    homePointsElement.textContent = homePoints;
};

function plusTwoHome(){
    homePoints += 2;
    homePointsElement.textContent = homePoints;
};

function plusThreeHome(){
    homePoints += 3;
    homePointsElement.textContent = homePoints;
};


function plusOneGuest(){
    guestPoints += 1;
    guestPointsElement.textContent = guestPoints;
};

function plusTwoGuest(){
    guestPoints += 2;
    guestPointsElement.textContent = guestPoints;
};

function plusThreeGuest(){
    guestPoints += 3;
    guestPointsElement.textContent = guestPoints;
};