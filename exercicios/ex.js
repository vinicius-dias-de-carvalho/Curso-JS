const x = a => a.filter(b => b.length >= 4).map(b => b.toUpperCase());

console.log(x(["Ana", "João", "Bia", "Carlos", "Lu"]));