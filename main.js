screenWidth = [0];
screenHeight = [0];
apple = "";
speakData = "";
toNumber = "";
x = 0;
y = 0;
drawApple = "";

var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();

function onresult()
{
  to_number = Number(content);
  if(Number.isInteger(to_number))
  {
    screenWidth = window.innerWidth;
    screenHeight = window.innerHeight;
  }
}

function start()
{
  document.getElementById("status").innerHTML = "O sistema está ouvindo. Por favor, fale.";  
  recognition.start();
} 
 
recognition.onresult = function(event) {

 console.log(event); 

 content = event.results[0][0].transcript;

    document.getElementById("status").innerHTML = "A fala foi reconhecida: " + content; 

}

function setup() {
 
}

function draw() {
  if(drawApple == "set")
  {
    
    document.getElementById("status").innerHTML = toNumber + " maçãs desenhadas";
    drawApple = "";
  }
}

function speak(){
    var synth = window.speechSynthesis;

    var utterThis = new SpeechSynthesisUtterance(speakData);

    synth.speak(utterThis);

    speakData = "";
}

function preload()
{
  loadImage(apple = apple.png);
}

function createCanvas()
{
  screenWidth, screenHeight-150;
  canvas.position(0 -150)
}

