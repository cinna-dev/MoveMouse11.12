const mouse = document.getElementById('mouse');
mouse.style.top =0;
mouse.style.left = 0;
mouse.style.position = 'absolute';
let offsetDown = 0;
let offsetUp = 0;
let offsetRight = 0;
let offsetLeft = 0;
document.body.addEventListener('keydown', moveHandler)
    function moveHandler(e){
    console.log(e.key)
    switch(e.key){
    case'ArrowDown' :
        console.log(offsetDown )
        offsetDown = parseInt(mouse.style.top) + mouse.clientHeight 
         mouse.style.top = offsetDown +'px'
         break;
    case'ArrowUp':
        console.log(offsetUp )
        offsetUp = parseInt(mouse.style.top)  - mouse.clientHeight 
         mouse.style.top = offsetUp +'px'
         break;
    case'ArrowRight':
        console.log(offsetRight)
        offsetRight = parseInt(mouse.style.left) + mouse.clientHeight 
        mouse.style.left = offsetRight +'px'
        break;
    case'ArrowLeft':
        console.log(offsetUp )
        offsetLeft = parseInt(mouse.style.left)  - mouse.clientHeight 
        mouse.style.left = offsetLeft  +'px'
        break;
    }

} 
