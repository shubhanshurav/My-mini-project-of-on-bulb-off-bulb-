function light(sw) {

               var pic;
   
               if (sw == 0) {
                   pic = "images/off.gif"
               } else {
                  pic = "images/on.gif"
               }
               document.getElementById('bulb').src = pic;
           }


 