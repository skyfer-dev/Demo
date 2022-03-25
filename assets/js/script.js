var age
age = 16
const name = 'didier'
var fruits = ['orange', 'banane']

if (age < 15) {
    console.log('echec')
} else if (age == 16) {
    console.log('null')
} else {
    console.log('reussite')
}
var N = 12
for (var i = 0; i <= N; i++) {
    nbre = i % 3
    if (nbre == 0) {
        console.log(`${i}  multiple`)
    } else {
        console.log(`${i}  pas multiple`)
    }
}

for (var i = 0; i <= fruits.length; i++) {
    fruits.push('moi')
}