
let numero = 0
let contador = document.getElementById('contador')


function somar(){
numero++ 
contador.innerText = numero

   if(numero >= 5){
    contador.style.color = '#00ff7f'
   }
  }

function subtrair(){
 numero--

 contador.innerText = numero

  if(numero < 5){
    contador.style.color = 'white'
  }
}

function zerar(){
 numero = 0
 contador.innerText = numero

 contador.style.color = 'white'

 
}
