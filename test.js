let pages = 0
let lastPg = 0

let adviceAPI='https://api.adviceslip.com/advice'
let adviceInfo

let num = 0
let numAPI = 'http://numbersapi.com/' + num + '/'
let numInfo

// let button
let constellation = []
let connection=[]

let rotation=.1

let pinkTone
let orangeTone
let tealTone
let blueTone
let purpleTone

let txtMove=0

let alph=150
let alphAdd=5

let serial
let currentString
let readings
let pinkButton, orangeButton, tealButton, blueButton, purpleButton, nextButton, redoButton
let wasNextPressed=false
let wasPinkPressed=false


//let cursorImg

//https://creative-coding.decontextualize.com/text-and-type/
//https://editor.p5js.org/ag3439/sketches/Skgh1ZQtQ


// save screenshot, 
// difficult to immediately use keys to make stars, but do use mouse to change location
// use projection mapping maybe for last page
// add stars (just basic glowy ones in background)
// background music?
// --first page maybe the stars aligned can help direct mouse
// ----use bluetooth mouse
// maybe some animation in last page?


function setup() {
  createCanvas(windowWidth, windowHeight);


  serial=new p5.SerialPort()
  serial.open("/dev/tty.usbmodem13101")
  serial.on('data',serialData)
  
}

function serialData(){
  currentString=serial.readLine()
  if (currentString.length>0){
    readings=split(currentString,",")
    pinkButton=readings[0]
    orangeButton=readings[1]
    tealButton=readings[2]
    blueButton=readings[3]
    purpleButton=readings[4]
    nextButton=readings[5]
    redoButton=readings[6]
  }

}



function draw() {

if(currentString){
   // console.log(currentString)
   console.log('Pink Button: '+wasPinkPressed + ' / Next Button: '+ wasNextPressed);
    if (nextButton==1 && wasNextPressed==false){

        wasNextPressed=true;
      
    }else if (nextButton==0 && wasNextPressed==true){
      wasNextPressed=false;
    }

    if (pinkButton==1 && wasPinkPressed==false){

        wasPinkPressed=true;
      
    }else if (pinkButton==0 && wasPinkPressed==true){
      wasPinkPressed=false;
    }
}
}







