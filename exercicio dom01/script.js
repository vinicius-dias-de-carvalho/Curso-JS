let numero = 0
function somar(){
    let contador = document.getElementById('contador')
    numero++
  
    contador.innerText = numero
    if(numero >= 5){
        contador.style.color = '#00ff7f'
    }
     
   
  

}