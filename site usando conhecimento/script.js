// função 1 :VARIAVEIS FORA DE FUNCTION VARIAVEIS GLOBAIS

let produtos = [
    {nome: 'intel core i7', categoria: "Processador", id: 12, preco: 2500},
    {nome: 'RTX 5070 TI 16gb', categoria: "Placadevideo", id:25, preco: 4800},
    {nome: `Radeon 9070 XT 16gb`, categoria: "Placadevideo", id:22, preco: 4650},
    {nome: 'Ryzen 9 9600X3D', categoria:"Processador", id:28, preco: 3400}
]
let carrinho = 0
 let listacarrinho = []
//-----------------------------------------------------------------

//------------------------------------------------------------
 // função 2 :função de renderizar (desenhar elementos HTML na tela)

 function renderizarprodutos(lista){
    let renderizar = lista.map(({nome, categoria, preco, id})=>`<div class="card">
    <h3>${nome}</h3>
    <p>Categoria: ${categoria}</p>
     <div class="preco">R$: ${preco}</div>
     <button onclick='adicionarcarrinho(${id})'>Adicionar Carrinho</button>
     </div>`).join('')
     

    return renderizar
 }
 //---------------------------------------------------------------

 document.getElementById('grid-produtos').innerHTML = renderizarprodutos(produtos)
 let contador = document.getElementById('contador-carrinho')
 
 //---------------------------------------------------------------
 // função 3: FAZ a conta de + e joga no html 
 function atualizartotal(){
    let  valortotal = 0
      listacarrinho.forEach(function(produto){
         valortotal = valortotal + produto.preco

         
      })

      document.getElementById('total-carrinho').textContent = valortotal;
 }



//----------------------------------------------------------------
 // Adicionar produtos ao carrinho

   function adicionarcarrinho(idProduto) {
    let itemencontrado = produtos.find(p => p.id === idProduto);
    listacarrinho.push(itemencontrado); // 1. Alterou a lista global

    atualizartotal(); // 2. Chamei a função de atualizar a tela!
}

//  função 4: chamar onclick do html ) 
function filtrarprodutos(categoriadesejada){
   if(categoriadesejada === 'Todos'){
      document.getElementById('grid-produtos').innerHTML = renderizarprodutos(produtos)   
   }else{
     let listafiltrada = produtos.filter(p => p.categoria === categoriadesejada)

      document.getElementById('grid-produtos').innerHTML = renderizarprodutos(listafiltrada)
   }
   
   function atualizartotal(){
   }


}