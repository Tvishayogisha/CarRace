canvas=document.getElementById('myCanvas');
ctx= canvas.getContext("2d");

var purpleCar_image = "purpleCar.png";
var purpleCar_x = 10;
var purpleCar_y = 120;
var purpleCar_width = 100;
var purpleCar_height = 90;


var redCar_image = "redCar.png";
var redCar_x=10;
var redCar_y=10;
var redCar_width=100;
var redCar_height=90;

background_image="background_image.jpeg";

function add(){
    background_imgTag = new Image();
    background_imgTag.onload = uploadBackground;
    background_imgTag.src= background_image;
    
    purpleCar_imgTag = new Image();
    purpleCar_imgTag.onload = uploadpurpleCar;
    purpleCar_imgTag.src = purpleCar_image;
  
   redCar_imgTag = new Image();
    redCar_imgTag.onload = uploadredCar;
    redCar_imgTag.src = redCar_image;
    }
    
    function uploadBackground(){
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
    
    }

    function uploadpurpleCar(){
        ctx.drawImage(purpleCar_imgTag, purpleCar_x, purpleCar_y, purpleCar_width, purpleCar_height);
    }
 function uploadredCar(){
        ctx.drawImage(redCar_imgTag, redCar_x, redCar_y, redCar_width, redCar_height);
    }

    window.addEventListener("keydown", my_keydown);

    function my_keydown(e){
        keyPressed = e.keyCode;
        console.log(keyPressed);
        if(keyPressed == '38'){
            purple_up();
            console.log("Purple Car = Up");
        }
  

    if (keyPressed == '39'){
       purple_right();
        console.log("Purple Car = right");
    }

    if (keyPressed == '37'){
        purple_left();
        console.log("Purple Car = left");
    }

    if (keyPressed == '40'){
        purple_down();
        console.log("Purple Car = Down");
    }
      
      	if(keyPressed == '87')
		{
			red_up();
			console.log("key w");
		}
		if(keyPressed == '83')
		{
			red_down();
			console.log("key s");
		}
		if(keyPressed == '65')
		{
			red_left();
			console.log("key a");
		}
		if(keyPressed == '68')
		{
			red_right();
			console.log("key d");
		}
    }