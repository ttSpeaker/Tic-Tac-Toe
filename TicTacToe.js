let board=
  [["","","",],
   ["","","",],
   ["","","",]];
let size=3;
let winner= "none";
player="X";
let reseter=0;

function updateBoardDOM(id,row,col) {
  document.getElementById(id).innerHTML='<div class="content">'+board[row][col]+'</div>';
}
function updateWinnerDOM() {
  document.getElementById("winner").innerHTML=winner+" WON!!";
}
function checkWin(row, col, player) {
  var owned = 0;
  /*check row */
  for (let i=0; i<size; i++){
    if (board[row][i]==player){
      owned++;
    }
  }
  if (owned==size) {
    return player;
  }
  /*check col */
  owned = 0;
  for (let i=0; i<size; i++){
    if (board[i][col]==player){
      owned++;
    }
  }
  if (owned==size) {
    return player;
  }
  /*check diagonal 1 */
  owned = 0;
  if(row == col){
    for(let i = 0; i < size; i++){
      if(board[i][i]==player){
        owned++;
      }
    }
    if (owned==size) {
      return player;
    }
  }
  /*check diagonal 2*/
  owned = 0;
  if (row+col==size-1){
    for(let i = 0; i < size; i++) {
     if(board[i][(size-1)-i] == player) {
       owned++;
     }
    }
    if (owned==size) {
      return player;
    }
  }
  /* check draw */
  for (let i=0; i<size; i++){
    for(let j=0; j<size; j++){
      if(board[i][j]==""){
        return "none";
      }
    }
  }
  return "Draw";
}

function changePlayer (){
  if (player=="X"){
    player="O";
  }else {
    player="X";
  }
}
function resetBoard(){
  board=
    [["","","",],
     ["","","",],
     ["","","",]];
  updateBoardDOM("box1",0,0);
  updateBoardDOM("box2",0,1);
  updateBoardDOM("box3",0,2);
  updateBoardDOM("box4",1,0);
  updateBoardDOM("box5",1,1);
  updateBoardDOM("box6",1,2);
  updateBoardDOM("box7",2,0);
  updateBoardDOM("box8",2,1);
  updateBoardDOM("box9",2,2);
  i=0;
  reseter=0;
  document.getElementById("winner").innerHTML="Tic Tac Toe";
}
function updateDrawDOM (){
  document.getElementById("winner").innerHTML="DRAW";
}
function play (id,row,col) {
  if(reseter>0){
    resetBoard();
    return;
  }
  if (board[row][col]=="") {
    board[row][col]=player;
    updateBoardDOM(id,row,col);
      console.log("PLAY");
    winner=checkWin(row, col, player)
    changePlayer();

    if (winner!="none" && winner!="Draw"){
      updateWinnerDOM();
      reseter++;
    }
    if (winner=="Draw"){
      updateDrawDOM();
      reseter++;
    }
  } else {return;}

}
