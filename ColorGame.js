var numSquares=6;
var colors=[];
var pickedColor;
var squares=document.getElementsByClassName("square");
var colorDisplay=document.querySelector("#colorDisplay");
var messageDisplay=document.querySelector("#message");
var h1=document.getElementsByTagName("h1")[0];
var resetButton=document.querySelector("#reset");
var easyBtn=document.querySelector("#easyBtn");
var hardBtn=document.querySelector("#hardBtn");
var modeButtons=document.querySelectorAll(".mode");


colorDisplay.textContent=pickedColor;


init();




//Code for New Game

function init()

{
	//mode button listeners	
	setupModeButtons();
	setupSquares();
	reset();
}

function setupSquares()
{
	//click squares listeners

	for(var i=0;i<squares.length;i++)
	{
		//add click listeners to sqaures
		squares[i].addEventListener("click",function()
			{

		//get the color that is clicked
			var clickedColor=this.style.backgroundColor;

			if(clickedColor===pickedColor)
			{
				messageDisplay.textContent="Correct!"
				changeColors(clickedColor);
				h1.style.backgroundColor=clickedColor;
				resetButton.textContent="Play Again?"
			}
			else
			{
				messageDisplay.textContent="Try Again";
				this.style.backgroundColor="#232323";
			}
			
			})
		}
}

function setupModeButtons()
{
	//mode button listeners	
	for (var i=0;i<modeButtons.length;i++)
	{
		modeButtons[i].addEventListener("click",function () {
		modeButtons[0].classList.remove("selected");
		modeButtons[1].classList.remove("selected");
		this.classList.add("selected");

		this.textContent==="Easy"? numSquares = 3 : numSquares = 6;
		reset();	})
	}
}

function reset()
{
	colors=generateRandomColors(numSquares);

	pickedColor=pickColor();

	colorDisplay.textContent=pickedColor;

	resetButton.textContent="New Colors";
	messageDisplay.textContent=" ";

	//set the squares to the new colors
	for(var i=0;i<squares.length;i++)
	{
	if(colors[i])
	{
		squares[i].style.backgroundColor=colors[i];
		squares[i].style.display="block";
	}
	else
	{
		squares[i].style.display="none";
	}
	}

	h1.style.backgroundColor="steelblue";
	
}


resetButton.addEventListener("click", function()
{
reset();
});

function changeColors(color)
{
	for(var i=0;i<squares.length;i++)
	{
		squares[i].style.backgroundColor=color;
	}
}

function pickColor()
{
	var random=Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num)
{
	var arr=[];
	for(var i=0;i<num;i++)
	{
		arr.push(randomColor());
	}
	return arr;
}

function randomColor(){
	var r=Math.floor(Math.random() * 256);
	var g=Math.floor(Math.random() * 256);
	var b=Math.floor(Math.random() * 256);

	return "rgb("+r+ ", "+g+ ", "+b+")";
}