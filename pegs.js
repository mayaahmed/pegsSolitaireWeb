var movesArray = new Array();
status=0;  row1=0; row2=0; col1=0; col2=0; count=32;

function initial(){
  var pic;
pic = document.getElementById('marblePic44'); 
          pic.style.visibility="hidden";
          for(j=3; j<6; j++){
pic = document.getElementById('marblePic'+1+j); 
          pic.style.visibility="visible";
pic = document.getElementById('marblePic'+2+j); 
          pic.style.visibility="visible";
pic = document.getElementById('marblePic'+6+j); 
          pic.style.visibility="visible";
pic = document.getElementById('marblePic'+7+j); 
          pic.style.visibility="visible";    
 }

 for(j=1; j<8; j++){
pic = document.getElementById('marblePic'+3+j); 
          pic.style.visibility="visible";
pic = document.getElementById('marblePic'+5+j); 
          pic.style.visibility="visible";

 }

for(j=1; j<4; j++){
pic = document.getElementById('marblePic'+4+j); 
          pic.style.visibility="visible";
}
for(j=5; j<8; j++){
pic = document.getElementById('marblePic'+4+j); 
          pic.style.visibility="visible";

 }


}

initial();

function getCell(r,c){
  if(status==0){
    row1=r; col1=c;}

if(status==1){
    row2=r; col2=c; 
   run();
}   

if(status==0) status=1;
else if(status==1) status=0;
}

function run(){

  var test;
  test=checkValidMove();
  if(test==1){

  move();
  if (count==1){ 
   applaud();
   // alert('Congratulations! You win');
 
}
  
  }
  else if(test==0){
    // alert('Invalid Move, r1 c1 r2 c2: '+row1+col1+row2+col2); 
    alert('Invalid Move. Try again'); 
 
  }

}



function move(){
  

  var pic1; var pic2; var pic3; var row3; var col3;
pic1 = document.getElementById('marblePic'+row1+col1); 
pic1.style.visibility="hidden";
pic2 = document.getElementById('marblePic'+row2+col2); 
pic2.style.visibility="visible";
if(row1==row2){
  if(col2==col1+2){
     col3=col1+1; 
     pic3 = document.getElementById('marblePic'+row1+col3); 
     pic3.style.visibility="hidden";
     count=count-1;
var moveObj= {r1: row1, r2: row2, r3: row1, c1: col1, c2: col2, c3: col3};
movesArray.push(moveObj);
length = movesArray.length-1;

  } 
  else if(col2==col1-2){
    col3=col1-1; 
     pic3 = document.getElementById('marblePic'+row1+col3); 
     pic3.style.visibility="hidden";
     count=count-1;
var moveObj= {r1: row1, r2: row2, r3: row1, c1: col1, c2: col2, c3: col3};
movesArray.push(moveObj);
length = movesArray.length-1;

  }
}
else if(col1==col2){
  if(row2==row1+2){
     row3=row1+1; 
     pic3 = document.getElementById('marblePic'+row3+col1); 
     pic3.style.visibility="hidden";
     count=count-1;
var moveObj= {r1: row1, r2: row2, r3: row3, c1: col1, c2: col2, c3: col1};
movesArray.push(moveObj);
length = movesArray.length-1;

  } 
  else if(row2==row1-2){
    row3=row1-1; 
     pic3 = document.getElementById('marblePic'+row3+col1); 
     pic3.style.visibility="hidden";
     count=count-1;
var moveObj= {r1: row1, r2: row2, r3: row3, c1: col1, c2: col2, c3: col1};
movesArray.push(moveObj);
length = movesArray.length-1;

  }
}


}

function checkValidMove(){
  var pic; var r; var c;
pic1 = document.getElementById('marblePic'+row1+col1); 
pic2 = document.getElementById('marblePic'+row2+col2); 
if(pic1.style.visibility=="hidden") return 0;
if(pic2.style.visibility=="visible") return 0;


if(row1==row2+1) return 0;
if(col1==col2+1) return 0;
if(row1==row2-1) return 0;
if(col1==col2-1) return 0;
 
if(row1==row2){
  if(col1==col2) return 0;
  if(col1 > col2+2) return 0;
 if(col1 < col2-2) return 0;
 
}
if(col1==col2){
  if(row1 > row2+2) return 0;
  if(row1 < row2-2) return 0;
  if(row1==row2+2){
    r = row2+1;
    pic = document.getElementById('marblePic'+r+col1); 
    if(pic.style.visibility=="hidden") return 0;
  }
if(row1==row2-2){
    r = row2-1;
    pic = document.getElementById('marblePic'+r+col1); 
    if(pic.style.visibility=="hidden") return 0;
  }
}
if(row1==row2){
  if(col1 > col2+2) return 0;
  if(col1 < col2-2) return 0;
  if(col1==col2+2){
    c = col2+1;
    pic = document.getElementById('marblePic'+row1+c); 
    if(pic.style.visibility=="hidden") return 0;
  }
if(col1==col2-2){
    c = col2-1;
    pic = document.getElementById('marblePic'+row1+c); 
    if(pic.style.visibility=="hidden") return 0;
  }
}
return 1;
}

function undo(){
length = movesArray.length-1;

pic1 = document.getElementById('marblePic'+movesArray[length].r1+movesArray[length].c1); 
pic2 = document.getElementById('marblePic'+movesArray[length].r2+movesArray[length].c2); 
pic3 = document.getElementById('marblePic'+movesArray[length].r3+movesArray[length].c3); 
pic1.style.visibility="visible";
pic3.style.visibility="visible";
pic2.style.visibility="hidden";
movesArray.pop(); count=count+1;
}




function applaud(){
var audio = new Audio('applause.mp3');
audio.play();
var string = 'Congratulations! You win.';
document.getElementById("victoryDiv").innerHTML = string;
}

// applaud();

function openNav() {
    document.getElementById("myNav").style.height = "100%";
}

function closeNav() {
    document.getElementById("myNav").style.height = "0%";
}




















