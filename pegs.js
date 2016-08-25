status=0;  row1=0; row2=0; col1=0; col2=0; count=32;

function initial(){
  var pic;
pic = document.getElementById('marblePic44'); 
          pic.style.visibility="hidden";
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
  if (count==1) alert('Congratulations! You win');
  var test;
  test=checkValidMove();
  if(test==1)
  move();
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
  } 
  else if(col2==col1-2){
    col3=col1-1; 
     pic3 = document.getElementById('marblePic'+row1+col3); 
     pic3.style.visibility="hidden";
     count=count-1;
  }
}
else if(col1==col2){
  if(row2==row1+2){
     row3=row1+1; 
     pic3 = document.getElementById('marblePic'+row3+col1); 
     pic3.style.visibility="hidden";
     count=count-1;
  } 
  else if(row2==row1-2){
    row3=row1-1; 
     pic3 = document.getElementById('marblePic'+row3+col1); 
     pic3.style.visibility="hidden";
     count=count-1;
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


function openNav() {
    document.getElementById("myNav").style.height = "100%";
}

function closeNav() {
    document.getElementById("myNav").style.height = "0%";
}




















