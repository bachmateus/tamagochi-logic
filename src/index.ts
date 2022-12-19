import { Dino } from "./character";



const dino = new Dino('Din');
dino.foodAvailable.forEach(food => {
  console.log(food.id, food.name);
})
console.log(dino.eat(dino.foodAvailable[0]));
console.log(dino.getCharacterStatus());
console.log(dino.eat(dino.foodAvailable[0]));
// console.log(dino.eat(dino.foodAvailable[0]));
// console.log(dino.eat(dino.foodAvailable[0]));
// console.log(dino.eat(dino.foodAvailable[0]));
// console.log(dino.eat(dino.foodAvailable[0]));
// console.log(dino.eat(dino.foodAvailable[0]));
// console.log(dino.eat(dino.foodAvailable[0]));
// console.log(dino.eat(dino.foodAvailable[0]));
// console.log(dino.eat(dino.foodAvailable[0]));
// console.log(dino.eat(dino.foodAvailable[0]));
// console.log(dino.eat(dino.foodAvailable[0]));
// console.log(dino.eat(dino.foodAvailable[0]));
// console.log(dino.eat(dino.foodAvailable[0]));
// console.log(dino.eat(dino.foodAvailable[0]));

console.log(dino.getCharacterStatus());
dino.setValues({hungryness: -2})
console.log(dino.getCharacterStatus());

// console.log(dino.getCharacterStatus());

// const apple = new Apple();
// console.log(dino.eat(apple) ? 'ate' : "didn't eat");
// console.log(dino.getCharacterStatus());

// console.log(dino.eat(apple) ? 'ate' : "didn't eat");
// console.log(dino.getCharacterStatus());


// console.log(dino.eat(apple) ? 'ate' : "didn't eat");
// console.log(dino.getCharacterStatus());

// const h = new Hamburguer();
// console.log(dino.eat(h));
// console.log(dino.eat(apple));