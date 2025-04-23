const canvas = document.getElementById('canvasMap');
const ctx = canvas.getContext('2d');
canvas.width = 900;
canvas.height = 600;

//global var
const cellSize = 100;
const cellGap = 3;
const gameGrid = []
//mouse object
const mouse ={
    x:10,
    y:10,
    width: 0.1,
    height: 0.1,
}

let canvasPosition = canvas.getBoundingClientRect();
canvas.addEventListener('mousemove', (e) => {
    mouse.x = e.x - canvasPosition.bottom;
    mouse.y = e.y - canvasPosition.top;
});
canvas.addEventListener('mouseleave', (e) => {
    mouse.y = undefined;
    mouse.x = undefined;
})
//controlBar object
const controlBar ={
    width: canvas.width,
    height: canvas.height
}
//cell blueprint
class Cell{
    constructor(x,y){
        this.x = x;
        this.y = y;
        this.width = cellSize;
        this.height = cellSize;
    }

    draw(){
        if(collision(this, mouse)){
            ctx.strokeStyle = "black";
            ctx.strokeRect(this.x, this.y, this.width, this.height);
        }
    }
}

function createGrid(){
    for(let y = cellSize; y < canvas.height; y += cellSize) {
        for(let x = cellSize; x < canvas.width; x += cellSize) {
            gameGrid.push(new Cell(x, y, cellSize));
        }
    }
}
createGrid();
function handleGameGrid(){
    for(let i = 0; i < gameGrid.length; i++){
        gameGrid[i].draw();
    }
}

//recursive animate func
function animate(){
    ctx.fillStyle = 'red';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    handleGameGrid();
    requestAnimationFrame(animate);
}
animate();

function collision(first,second){
    if(!(first.x > second.x + second.width ||
        first.x + first.width < second.x ||
        first.y > second.y + second.height||
        first.y + first.height < second.y))
    {
        return true;
    }
}
