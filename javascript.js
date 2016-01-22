var count = 0;
var xorO;
var button = document.getElementById("test-button");


//*** TRACK WHOS TURN IT IS ***//
function countClicks() {
  count++; 
  console.log(count);
  if (count%2 === 0) {
    xorO = "<p>O</p>";
    console.log("O:", xorO);
  }else{
    xorO = "<p>X</p>";
    console.log("X:", xorO);
  };
};

//*** CLEAR THE BOARD AFTER A WINNER ***//
function clear () {
  document.getElementById("button0").innerHTML = '<button input type="button" onclick="countClicks();insertxorOButton0();" value="0"></button>';
  document.getElementById("button1").innerHTML = '<button input type="button" onclick="countClicks();insertxorOButton1();" value="1"></button>';
  document.getElementById("button2").innerHTML = '<button input type="button" onclick="countClicks();insertxorOButton2();" value="2"></button>';
  document.getElementById("button3").innerHTML = '<button input type="button" onclick="countClicks();insertxorOButton3();" value="3"></button>';
  document.getElementById("button4").innerHTML = '<button input type="button" onclick="countClicks();insertxorOButton4();" value="4"></button>';
  document.getElementById("button5").innerHTML = '<button input type="button" onclick="countClicks();insertxorOButton5();" value="5"></button>';
  document.getElementById("button6").innerHTML = '<button input type="button" onclick="countClicks();insertxorOButton6();" value="6"></button>';
  document.getElementById("button7").innerHTML = '<button input type="button" onclick="countClicks();insertxorOButton7();" value="7"></button>';
  document.getElementById("button8").innerHTML = '<button input type="button" onclick="countClicks();insertxorOButton8();" value="8"></button>';
  count = 0;
};

//*** CHECK FOR A WINNER ***//
function winner() {
  console.log("winnerCheck:");
  var box0 = document.getElementById("button0").innerHTML;
  var box1 = document.getElementById("button1").innerHTML;
  var box2 = document.getElementById("button2").innerHTML;
  var box3 = document.getElementById("button3").innerHTML;
  var box4 = document.getElementById("button4").innerHTML;
  var box5 = document.getElementById("button5").innerHTML;
  var box6 = document.getElementById("button6").innerHTML;
  var box7 = document.getElementById("button7").innerHTML;
  var box8 = document.getElementById("button8").innerHTML;
  
  //*** CHECK ROW 1 ***//
  if (box0 === "<p>X</p>" && box1 === "<p>X</p>" && box2 === "<p>X</p>") {
    alert("Player 1 Wins!");
    clear();
  }else if (box0 === "<p>O</p>" && box1 === "<p>O</p>" && box2 === "<p>O</p>") {
    alert("Player 2 Wins!");
    clear();
  
  //*** CHECK ROW 2 ***//
  }else if (box3 === "<p>X</p>" && box4 === "<p>X</p>" && box5 === "<p>X</p>") {
    alert("Player 1 Wins!");
    clear();
  }else if (box3 === "<p>O</p>" && box4 === "<p>O</p>" && box5 === "<p>O</p>") {
    alert("Player 2 Wins!");
    clear();

  //*** CHECK ROW 3 ***//
  }else if (box6 === "<p>X</p>" && box7 === "<p>X</p>" && box8 === "<p>X</p>") {
    alert("Player 1 Wins!");
    clear();
  }else if (box6 === "<p>O</p>" && box7 === "<p>O</p>" && box8 === "<p>O</p>") {
    alert("Player 2 Wins!");
    clear();

  //*** CHECK COLUMN 1 ***//
  }else if (box0 === "<p>X</p>" && box3 === "<p>X</p>" && box6 === "<p>X</p>") {
    alert("Player 1 Wins!");
    clear();
  }else if (box0 === "<p>O</p>" && box3 === "<p>O</p>" && box6 === "<p>O</p>") {
    alert("Player 2 Wins!");
    clear();

  //*** CHECK COLUMN 2 ***//
  }else if (box1 === "<p>X</p>" && box4 === "<p>X</p>" && box7 === "<p>X</p>") {
    alert("Player 1 Wins!");
    clear();
  }else if (box1 === "<p>O</p>" && box4 === "<p>O</p>" && box7 === "<p>O</p>") {
    alert("Player 2 Wins!");
    clear();

  //*** CHECK COLUMN 3 ***//
  }else if (box2 === "<p>X</p>" && box5 === "<p>X</p>" && box8 === "<p>X</p>") {
    alert("Player 1 Wins!");
    clear();
  }else if (box2 === "<p>O</p>" && box5 === "<p>O</p>" && box8 === "<p>O</p>") {
    alert("Player 2 Wins!");
    clear();

  //*** CHECK  X1 ***//
  }else if (box0 === "<p>X</p>" && box4 === "<p>X</p>" && box8 === "<p>X</p>") {
    alert("Player 1 Wins!");
    clear();
  }else if (box0 === "<p>O</p>" && box4 === "<p>O</p>" && box8 === "<p>O</p>") {
    alert("Player 2 Wins!");
    clear();

  //*** CHECK X2 ***//
  }else if (box2 === "<p>X</p>" && box4 === "<p>X</p>" && box6 === "<p>X</p>") {
    alert("Player 1 Wins!");
    clear();
  }else if (box2 === "<p>O</p>" && box4 === "<p>O</p>" && box6 === "<p>O</p>") {
    alert("Player 2 Wins!");
    clear();
  } else if (count === 9) {
    alert("It's a tie!");
    clear();
  }
};


//*** ADD X/O TO <div>button0 ***//
function insertxorOButton0() {

  //*** ADD X/O THE TO INNERHTML ***//
  document.getElementById("button0").innerHTML = xorO;
  //*** RUN FUNCTION TO CHECK FOR THE WINNER ***//
  winner();
};


//*** ADD X/O TO <div>button1 ***//
function insertxorOButton1() {
 
  //*** ADD X/O THE TO INNERHTML ***//
  document.getElementById("button1").innerHTML = xorO;
  //*** RUN FUNCTION TO CHECK FOR THE WINNER ***//
  winner();
};


//*** ADD X/O TO <div>button2 ***//
function insertxorOButton2() {

  //*** ADD X/O THE TO INNERHTML ***//
  document.getElementById("button2").innerHTML = xorO;
  //*** RUN FUNCTION TO CHECK FOR THE WINNER ***//
  winner();
};


//*** ADD X/O TO <div>button3 ***//
function insertxorOButton3() {

  //*** ADD X/O THE TO INNERHTML ***//
  document.getElementById("button3").innerHTML = xorO;
  //*** RUN FUNCTION TO CHECK FOR THE WINNER ***//
  winner();
};


//*** ADD X/O TO <div>button4 ***//
function insertxorOButton4() {

  //*** ADD X/O THE TO INNERHTML ***//
  document.getElementById("button4").innerHTML = xorO;
  //*** RUN FUNCTION TO CHECK FOR THE WINNER ***//
  winner();
};


//*** ADD X/O TO <div>button5 ***//
function insertxorOButton5() {

  
  //*** ADD X/O THE TO INNERHTML ***//
  document.getElementById("button5").innerHTML = xorO;
  //*** RUN FUNCTION TO CHECK FOR THE WINNER ***//
  winner();
};


//*** ADD X/O TO <div>button6 ***//
function insertxorOButton6() {

  //*** ADD X/O THE TO INNERHTML ***//
  document.getElementById("button6").innerHTML = xorO;
  //*** RUN FUNCTION TO CHECK FOR THE WINNER ***//
  winner();
};


//*** ADD X/O TO <div>button7 ***//
function insertxorOButton7() {

  //*** ADD X/O THE TO INNERHTML ***//
  document.getElementById("button7").innerHTML = xorO;
  //*** RUN FUNCTION TO CHECK FOR THE WINNER ***//
  winner();
};


//*** ADD X/O TO <div>button8 ***//
function insertxorOButton8() {

  //*** ADD X/O THE TO INNERHTML ***//
  document.getElementById("button8").innerHTML = xorO;
  //*** RUN FUNCTION TO CHECK FOR THE WINNER ***//
  winner();
};












