function carregar(){
var msg = document.getElementById('msg')
var img = document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()

msg.innerHTML = `Agora são ${hora} horas.`
if (hora >= 0 && hora < 12){
        //bom dia 
        img.src = 'imagens/manha.png'
        document.body.style.background = '#D4D9D6'
    } else if(hora >= 12 && hora < 18){
           //Boa tarde
           img.src = 'imagens/tarde.png'
           document.body.style.background = '#FBA605'
  }else {
       //boa noite
       img.src = 'imagens/noite.png'
       document.body.style.background = '#0D2132'
  }
}