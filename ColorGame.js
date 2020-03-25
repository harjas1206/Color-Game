var name=prompt("What is your name?");
alert("Hi "+name+" Dalla.");
var numSquares=6;
var colors=generateRandomColors(numSquares);
var squares=document.querySelectorAll(".square");
var pickedColor=pickColor();
var colorDisplay=document.querySelector("#colorDisplay");
var messageDisplay=document.querySelector("#message");
var h1=document.querySelector("h1");
var resetButton=document.querySelector("#reset");
colorDisplay.textContent=pickedColor;
var easyButton=document.querySelector("#easyButton");
var hardButton=document.querySelector("#hardButton");

easyButton.addEventListener("click",function(){
    easyButton.classList.add("selected");
    hardButton.classList.remove("selected");
    numSquares=3; 
    h1.style.background="steelblue";
    messageDisplay.textContent="";
    resetButton.textContent="New Colors";
    colors=generateRandomColors(numSquares);
    pickedColor=pickColor();
    colorDisplay.textContent=pickedColor;
    for( var i=0;i<squares.length;i++){
        if(colors[i]){
            squares[i].style.background=colors[i];
        }
        else{
            squares[i].style.display="none";
        }
    }
});

hardButton.addEventListener("click",function(){
    hardButton.classList.add("selected");
    easyButton.classList.remove("selected");
    numSquares=6;
    h1.style.background="steelblue";
    messageDisplay.textContent="";
    resetButton.textContent="New Colors";
    colors=generateRandomColors(numSquares);
    pickedColor=pickColor();
    colorDisplay.textContent=pickedColor;
    for( var i=0;i<squares.length;i++){
        squares[i].style.backgroundColor=colors[i];
        squares[i].style.display="block";
    }
});

resetButton.addEventListener("click",function(){
    this.textContent="New Colors";
    colors=generateRandomColors(numSquares);
    pickedColor=pickColor();
    colorDisplay.textContent=pickedColor
    for(var i=0;i<squares.length;i++){
        squares[i].style.background=colors[i];
    }
    messageDisplay.textContent="";
    document.querySelector("h1").style.backgroundColor="steelblue";   
})

for(var i=0;i<squares.length;i++){
    squares[i].style.background=colors[i];
    squares[i].addEventListener("click",function(){
        var clickedColor=this.style.background;
        if(clickedColor===pickedColor){
            messageDisplay.textContent="Correct!";
            changeColors(clickedColor);
            h1.style.backgroundColor=pickedColor;
            resetButton.textContent="Play again";
        }
        else{
            this.style.background="#232323";
            messageDisplay.textContent="Try Again";
        }
    });
}
function changeColors(color){
    for(var i=0;i<squares.length;i++){
        squares[i].style.background=color;
    }
}
function pickColor(){
    var random=Math.floor(Math.random()*colors.length);
    return colors[random];
}
function generateRandomColors(num){
    var arr=[]
    for(var i=0;i<num;i++){
        arr.push(randomColor());}
        return arr;

}
function randomColor(){
    var r=Math.floor(Math.random()*256);
    var g=Math.floor(Math.random()*256);
    var b=Math.floor(Math.random()*256);
    return "rgb("+r+", "+g+", "+b+")";
}
