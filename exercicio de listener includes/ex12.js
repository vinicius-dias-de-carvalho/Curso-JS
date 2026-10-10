let jogadores = [
    { nome: "ShadowKnight", xp: 1200 },
    { nome: "MageGirl", xp: 850 },
    { nome: "NoobMaster", xp: 300 },
    { nome: "ProGamer99", xp: 2100 }
]

{
    let resultado = jogadores.map((jogador)=> {
        if (jogador.xp >= 1000) {
          return `${jogador.nome} subiu de nivel! ${jogador.xp}`
        }else{
            let falta = 1000 - jogador.xp
            return `${jogador.nome} precisa de mais XP. (Faltam ${falta} XP)`
        }
         
    })
   
    console.log(resultado)


   
}
 
 

