
             var start=new Date().getTime();
             function getRandomColor(){
                var letters= '0123456789ABCDEF';
                var color='#';
                for(var i=0;i<6;i++){
                    color +=letters[Math.floor(Math.random()*16)];
                  }
                return color;
             }
            function move(){
                var left;
                var top;
                var wh;
                left= Math.random()*300;
                right= Math.random()*300;
                wh = ((Math.random()*400) +100);// till 100
                document.getElementById("shape").style.left =left;
                document.getElementById("shape").style.top=top;
                document.getElementById("shape").style.width=wh;
                document.getElementById("shape").style.height=wh;
                document.getElementById("shape").style.display="block";
                document.getElementById("shape").style.backgroundColor = getRandomColor();
                var start=new Date().getTime();
            }
           move();
            document.getElementById("shape").onclick = function(){
                document.getElementById("shape").style.display="none";
                var end=new Date().getTime(); //disappering after 1st block
                var timeTaken=(end-start)/1000;//converting miliseconds to seconds
                alert(timeTaken); 
                move();

            }