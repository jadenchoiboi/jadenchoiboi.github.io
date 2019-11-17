function drawGhost(x,y){
    drawTopGhostLeft();

    ctx.fillStyle = "red";
    ctx.fillRect(5 * UNIT, 2 * UNIT, 4  * UNIT, 1 * UNIT);
    ctx.fillRect(5 * UNIT, 3 * UNIT, 4 * UNIT, 1 * UNIT);
    ctx.fillRect(6 * UNIT, 4 * UNIT, 2 * UNIT, 3 * UNIT);
   ctx.fillRect(5 * UNIT, 7 * UNIT, 4 * UNIT, 1 * UNIT);
   ctx.fillStyle = "blue";
    ctx.fillRect(3 * UNIT, 3 * UNIT, 2 * UNIT, 2 * UNIT);
    ctx.fillRect(9 * UNIT, 3 * UNIT, 2 * UNIT, 2 * UNIT);
    ctx.fillStyle = "white"; 
    ctx.fillRect(2 * UNIT, 4 * UNIT, 1 * UNIT, 3 * UNIT);
    ctx.fillRect(5 * UNIT, 4 * UNIT, 1 * UNIT, 3 * UNIT);
    ctx.fillRect(3 * UNIT, 5 * UNIT, 2 * UNIT, 3 * UNIT);
     ctx.fillRect(8 * UNIT, 4 * UNIT, 1 * UNIT, 3 * UNIT);
    ctx.fillRect(11 * UNIT, 4 * UNIT, 1 * UNIT, 3 * UNIT);
    ctx.fillRect(9 * UNIT, 5 * UNIT, 2 * UNIT, 3 * UNIT);
    ctx.fillStyle = "red";
    ctx.fillRect(1 * UNIT, 5 * UNIT, 1 * UNIT, 3 * UNIT);
    ctx.fillRect(12 * UNIT, 5 * UNIT, 1 * UNIT, 3 * UNIT);
    ctx.fillRect(2 * UNIT, 7 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(11 * UNIT, 7 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(0 * UNIT, 8 * UNIT, 14 * UNIT, 4 * UNIT);
    ctx.fillRect(0 * UNIT, 12 * UNIT, 1 * UNIT, 2 * UNIT);
    ctx.fillRect(1 * UNIT, 12 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(3 * UNIT, 12 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(4 * UNIT, 12 * UNIT, 2 * UNIT, 2 * UNIT);
    ctx.fillRect(8 * UNIT, 12 * UNIT, 2 * UNIT, 2 * UNIT);
    ctx.fillRect(10 * UNIT, 12 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(12 * UNIT, 12 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(13 * UNIT, 12 * UNIT, 1 * UNIT, 2 * UNIT);
   

}
function drawTopGhostLeft() {
    //ctx.fillStyle = "red"
 //ctx.fillRect(5 * UNIT, 2 * UNIT, 4 * UNIT, 1 * UNIT);
    //ctx.fillRect(3 * UNIT, 3 * UNIT, 8 * UNIT, 1 * UNIT);
    //ctx.fillRect(2 * UNIT, 4 * UNIT, 10 * UNIT, 1 * UNIT);
    // ctx.fillRect(1 * UNIT, 5 * UNIT, 12 * UNIT, 1 * UNIT);
    //ctx.fillStyle = "white"
    //ctx.fillRect(3 * UNIT, 6 * UNIT, 2 * UNIT, 1 * UNIT);
    //ctx.fillStyle = "red"
    //ctx.fillRect(5 * UNIT, 6 * UNIT, 4 * UNIT, 1 * UNIT);
    //ctx.fillStyle = "white"
    //ctx.fillRect(9 * UNIT, 6 * UNIT, 2 * UNIT, 1 * UNIT);
    //ctx.fillRect(2 * UNIT, 7 * UNIT, 4 * UNIT, 2 * UNIT);
    // ctx.fillRect(8 * UNIT, 7 * UNIT, 4 * UNIT, 2 * UNIT);
    // ctx.fillStyle = "blue"
    //ctx.fillRect(3 * UNIT, 9 * UNIT, 2 * UNIT, 2 * UNIT);
    //ctx.fillRect(9 * UNIT, 9 * UNIT, 2 * UNIT, 2 * UNIT);
   // ctx.fillStyle = "white"
    //ctx.fillRect(5 * UNIT, 9 * UNIT, 1 * UNIT, 1 * UNIT);
    //ctx.fillRect(2 * UNIT, 9 * UNIT, 1 * UNIT, 1 * UNIT);
    // ctx.fillRect(8 * UNIT, 9 * UNIT, 1 * UNIT, 1 * UNIT);
    //ctx.fillRect(11 * UNIT, 9 * UNIT, 1 * UNIT, 1 * UNIT);
    //ctx.fillStyle = "red"
    //ctx.fillRect(6 * UNIT, 7 * UNIT, 2 * UNIT, 3 * UNIT);
   // ctx.fillRect(1 * UNIT, 6 * UNIT, 2 * UNIT, 1 * UNIT);
    //ctx.fillRect(11 * UNIT, 6 * UNIT, 2 * UNIT, 1 * UNIT);
    //ctx.fillRect(5 * UNIT, 10 * UNIT, 4 * UNIT, 1 * UNIT);
    //ctx.fillRect(1 * UNIT, 7 * UNIT, 1 * UNIT, 6 * UNIT);
    //ctx.fillRect(0 * UNIT, 8 * UNIT, 1 * UNIT, 6 * UNIT);
    // ctx.fillRect(2 * UNIT, 10 * UNIT, 1 * UNIT, 2 * UNIT);
    //ctx.fillRect(12 * UNIT, 5 * UNIT, 1 * UNIT, 8 * UNIT);
    //ctx.fillRect(13 * UNIT, 8 * UNIT, 1 * UNIT, 6 * UNIT);
    //ctx.fillRect(11 * UNIT, 10 * UNIT, 1 * UNIT, 2 * UNIT);
    //ctx.fillRect(3 * UNIT, 11 * UNIT, 8 * UNIT, 1 * UNIT);
    //ctx.fillRect(3 * UNIT, 12 * UNIT, 1 * UNIT, 1 * UNIT);
    //ctx.fillRect(4 * UNIT, 12 * UNIT, 2 * UNIT, 2 * UNIT);
    //ctx.fillRect(8 * UNIT, 12 * UNIT, 2 * UNIT, 2 * UNIT);
    //ctx.fillRect(10 * UNIT, 12 * UNIT, 1 * UNIT, 1 * UNIT);
    
}
function drawBottomGhostLeft() {
    ctx.fillStyle = "red"
    ctx.fillRect(1 * UNIT, 1 * UNIT, 1 * UNIT, 1 * UNIT);
  

}



//ctx.fillRect(1 * UNIT, 1 * UNIT, 1 * UNIT, 1 * UNIT);
    //ctx.fillRect(1 * UNIT, 1 * UNIT, 1 * UNIT, 1 * UNIT);
    //ctx.fillRect(1 * UNIT, 1 * UNIT, 1 * UNIT, 1 * UNIT);
    //ctx.fillRect(1 * UNIT, 1 * UNIT, 1 * UNIT, 1 * UNIT);
     //ctx.fillRect(1 * UNIT, 1 * UNIT, 1 * UNIT, 1 * UNIT);
    //ctx.fillRect(1 * UNIT, 1 * UNIT, 1 * UNIT, 1 * UNIT);
    //ctx.fillRect(1 * UNIT, 1 * UNIT, 1 * UNIT, 1 * UNIT);
    //ctx.fillRect(1 * UNIT, 1 * UNIT, 1 * UNIT, 1 * UNIT);
    //ctx.fillRect(1 * UNIT, 1 * UNIT, 1 * UNIT, 1 * UNIT);
    //ctx.fillRect(1 * UNIT, 1 * UNIT, 1 * UNIT, 1 * UNIT);
    //ctx.fillRect(1 * UNIT, 1 * UNIT, 1 * UNIT, 1 * UNIT);
     //ctx.fillRect(1 * UNIT, 1 * UNIT, 1 * UNIT, 1 * UNIT);
    //ctx.fillRect(1 * UNIT, 1 * UNIT, 1 * UNIT, 1 * UNIT);
    //ctx.fillRect(1 * UNIT, 1 * UNIT, 1 * UNIT, 1 * UNIT);
    //ctx.fillRect(1 * UNIT, 1 * UNIT, 1 * UNIT, 1 * UNIT);
    //ctx.fillRect(1 * UNIT, 1 * UNIT, 1 * UNIT, 1 * UNIT);
     //ctx.fillRect(1 * UNIT, 1 * UNIT, 1 * UNIT, 1 * UNIT);
    //ctx.fillRect(1 * UNIT, 1 * UNIT, 1 * UNIT, 1 * UNIT);
    //ctx.fillRect(1 * UNIT, 1 * UNIT, 1 * UNIT, 1 * UNIT);
    //ctx.fillRect(1 * UNIT, 1 * UNIT, 1 * UNIT, 1 * UNIT);
    //ctx.fillRect(1 * UNIT, 1 * UNIT, 1 * UNIT, 1 * UNIT);