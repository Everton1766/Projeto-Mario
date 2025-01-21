
const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe')
 


const jump = () => {
    mario.classList.add('jump');

    setTimeout(() => {
        mario.classList.remove('jump')
    }, 500);
}

const loop = setInterval(() => {

    console.log(loop)

    const pipePosition = pipe.offsetLeft;
    const marioPositon = +window.getComputedStyle(mario).bottom.replace('px',' ');
    console.log(marioPositon);
   
    if (pipePosition <= 120 && pipePosition > 0 && marioPositon < 104) {  
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom   = `${marioPositon}px`;

        mario.src = "./assets/game-over.png";
        mario.style.width = '65px'
        mario.style.marginLeft = '50px'

        clearInterval(loop);
    }
    
}, 10 );

document.addEventListener('keydown', jump);       
