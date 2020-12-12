var x = document.querySelectorAll(".drum");
for(var i=0;i<x.length;i++)
{
   x[i].addEventListener("click",function(){
      this.style.color = "white";
      switch(this.innerHTML)
      {
        case 'w':
         playit("sounds/crash.mp3");
         break;
        case 'a':
         playit("sounds/kick-bass.mp3");
         break;
        case 's':
          playit("sounds/snare.mp3");
          break;
        case 'd':
          playit("sounds/tom-1.mp3");
          break;
        case 'j':
          playit("sounds/tom-2.mp3");
          break;
        case 'k':
          playit("sounds/tom-3.mp3");
        case 'l':
          playit("sounds/tom-4.mp3");

      }
   });
}

 function playit(url)
 {
   var audio = new Audio(url);
   audio.play();
 }
