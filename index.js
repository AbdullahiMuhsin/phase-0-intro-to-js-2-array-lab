// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"]
function destructivelyAppendCat(){
    cats.length = 0;
    cats.push('Milo', 'Otis', 'Garfield');
    cats.push("Ralph")
}


function destructivelyPrependCat(){
    cats.unshift('Bob')
}
function destructivelyRemoveLastCat(){
    cats.pop()
}
function destructivelyRemoveFirstCat(){
    cats.shift()
}

const Cats  = ['Milo', 'Otis', 'Garfield']
function appendCat(cat){
    return [...cats,  'Broom']
}
function prependCat(cat){
    return ["Arnold", ...cats]
}
function removeLastCat(cat){
    return cats.slice(0, -1)
}
function removeFirstCat(cat){
    return cats.slice(1)
}


