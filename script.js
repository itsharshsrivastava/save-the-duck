score = 0;
cross = true;
audio = new Audio('music.mp3')
audiogo = new Audio('gameover.mp3')
setTimeout(() => {
    audio.loop = true;
    audio.play();
}, 500);

document.onkeydown = function(e){
    console.log("Key code : ", e.keyCode)
    if(e.keyCode == 38){
        duck = document.querySelector('.duck');
        duck.classList.add('animateDuck');
        setTimeout(() => {
            duck.classList.remove('animateDuck')
        },700);
    }
    if(e.keyCode == 39){
        duck = document.querySelector('.duck');
        duckx = parseInt(window.getComputedStyle(duck, null).getPropertyValue('left'));
        duck.style.left = duckx + 100 +"px";
    }
    if(e.keyCode == 37){
        duck = document.querySelector('.duck');
        duckx = parseInt(window.getComputedStyle(duck, null).getPropertyValue('left'));
        duck.style.left = (duckx - 100) +"px";
    }
}

setInterval(() => {
    duck = document.querySelector('.duck');
    gameOver = document.querySelector('.gameOver');
    trash = document.querySelector('.trash');

    dx = parseInt(window.getComputedStyle(duck, null).getPropertyValue('left'));
    dy = parseInt(window.getComputedStyle(duck, null).getPropertyValue('bottom'));
    tx = parseInt(window.getComputedStyle(trash, null).getPropertyValue('left'));
    ty = parseInt(window.getComputedStyle(trash, null).getPropertyValue('bottom'));
    
    offsetx = Math.abs(dx - tx);
    offsety = Math.abs(dy - ty);
    
    //console.log(offsetx, offsety)
    if(offsetx < 80 && offsety < 52){
        gameOver.innerHTML = "Game Over - Reload to Start Again";
        trash.classList.remove('animateTrash');
        audiogo.play();
        setTimeout(() => {
            audiogo.pause();
        }, 1000);
    }
    else if(offsetx < 145 && cross) {
        score += 1;
        updateScore(score);
        cross = false;
        setTimeout(() => {
            cross = true;
        }, 1000);
    }
    setTimeout(() => {
        aniDur = parseFloat(window.getComputedStyle(trash, null).getPropertyValue('animation-duration'));
        newDur = aniDur - 0.001;
        trash.style.animationDuration = newDur + 's';
    }, 500);
},10)

function updateScore(score){
    let point = document.querySelector('.point');
    point.innerHTML = "Your score: " + score;
}