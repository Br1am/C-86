var canvas = new fabric.Canvas('myCanvas');
 var x= document.getElementById("myAudio");

function newImage()
{
	fabric.Image.fromURL('BirthdayImage.jpg',function(Img){
        blockImageObject = Img ;
        blockImageObject.scaleToWidth(700) ;
        blockImageObject.scaleToHeigth(500) ;
        blockImageObject.Set({
            top:0,
            left:0,
            right:0,
            bottom:0,
        });
	
});
}
function playSound(){
function playSound(){
    x.play();
}	
}
