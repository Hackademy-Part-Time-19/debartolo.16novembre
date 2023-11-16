
let nomeStudenti = ["Franco", "Gennaro", "Mattia", "Valerio", "Giulia", "Eugenio"]

for (let i=0; i<nomeStudenti.length; i++) {
    console.log (nomeStudenti[i])
}


for (let i=0; i<nomeStudenti.length; i = i + 1) {
    for (let j=0; j<nomeStudenti[i].length; j++) {
        console.log (nomeStudenti [i][j])
    }
}

var somma=0
for (let i=0; i<=200; i=i+1 ){
    somma=somma+i
}
console.log(somma)



var numero=0
while (numero < 400){
    if (numero % 20 == 0){
        console.log (numero)
    }
    numero++;
}