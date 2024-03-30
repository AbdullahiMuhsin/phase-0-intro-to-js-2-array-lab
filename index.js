

function destructivelyRemoveLastCat() {
  cats.pop();
  return cats;
}
function removeFirstCat() {
    let newArray = [...cats];
    newArray.shift();
    return newArray;
  }
function destructivelyRemoveFirstCat() {
  cats.shift();
  return cats;
}
function appendCat(name) {
  let Broom = [...cats, name];
  return Broom;
}

function destructivelyPrependCat(name) {
    cats.unshift(name);
    return cats;
  }
function removeLastCat() {
  let newArray = [...cats];
  newArray.pop();
  return newArray;
}
const cats = ["Milo", "Otis", "Garfield"];
function destructivelyAppendCat(name) {
  cats.push(name);
  return cats;
}