Score = 0
cross=true
document.onkeydown=function(e){
    console.log("Key code is:",e.keyCode)
    if(e.keyCode==38){
        dino=document.querySelector('.dino');
        dino.classList.add('animatedino');
        setTimeout(()=> {
            dino.classList.remove('animatedino')
        },999);
    }
    if(e.keyCode==39){
        dino=document.querySelector('.dino');
        dinoX=  parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
        dino.style.left =dinoX+30+"px";
    
    }
    if(e.keyCode==37){
        dino=document.querySelector('.dino');
        dinoX=  parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
        dino.style.left =(dinoX-30)+"px";
    }
}

setInterval(() => {
    dino = document.querySelector('.dino');
    Gameover = document.querySelector('.Gameover');
    Obstacle = document.querySelector('.Obstacle');

    dx = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
    dy = parseInt(window.getComputedStyle(dino, null).getPropertyValue('top'));

    ox = parseInt(window.getComputedStyle(Obstacle, null).getPropertyValue('left'));
    oy = parseInt(window.getComputedStyle(Obstacle, null).getPropertyValue('top'));

    offsetX = Math.abs(dx-ox);
    offsetY = Math.abs(dy-oy);
    // console.log(offsetX , offsetY)
    if(offsetX < 93 && offsetY < 62){
        Gameover.style.visibility='visible';
        Obstacle.classList.remove('ObsticalAni')
    }
    else if (offsetX< 145 && cross){
        Score+=1;
        updateScore(Score);
        cross = false;
        setTimeout(() => {
            cross= true;
        }, 1000);
        setTimeout(() => {
            aniDur=parseFloat(window.getComputedStyle(Obstacle, null).getPropertyValue('animation-duration'));
                newDur=aniDur-0.02;
                Obstacle.style.animationDuration= newDur +'s';
                console.log('new animation duration ', newDur )
        }, 800);
        
    } 

}, 10);

function updateScore(Score){
    scorecount.innerHTML= "Your Score:"+Score
}