


 
   /*  paso1   entrega en la guia  */
   /* function pintar(){ 
        ele.style.backgroundColor = 'yellow' ;
        
        } 
        const ele = document.getElementById("ele1")
        ele.addEventListener("click", pintar);*/

        /*  paso2   segunda modificacion  */
        /*const ele = document.getElementById("ele1")
        ele.addEventListener("click", function(){
            ele.style.backgroundColor = 'yellow' ;
        });
        ele.style.backgroundColor = 'green' ;*/
       /*  paso3  Ejercicio terminado  */
       function pintar(ele2, color="green"){ 
     
        ele2.style.backgroundColor = 'yellow' 
        } 
        
         const ele = document.getElementById("ele1");
        ele.addEventListener("click", ()=>{
            pintar(ele,"yellow")
        });
        