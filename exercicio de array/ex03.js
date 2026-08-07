let valores = [9, 8, 7, 2, 1]
valores.push(5)
valores.sort()

for(let c in valores){
    
    console.log(`A posição ${c} tem valor ${valores[c]}`)
    
}
console.log(`O menor valor ${valores[0]}`)
console.log(`maior valor ${valores[valores.length -1]} `)
