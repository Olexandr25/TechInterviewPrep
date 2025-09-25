// instanceof Operator in TypeScript

class Bird {
  fly() {
    console.log('flying...');
  }
  layEggs() {
    console.log('laying eggs...');
  }
}

const pet = new Bird();

// instanceof
if (pet instanceof Bird) {
  pet.fly(); // "flying..."
} else {
  console.log('pet is not a bird');
}

// Additional example with multiple classes
class Fish {
  swim() {
    console.log('swimming...');
  }
}

function move(animal: Bird | Fish) {
  if (animal instanceof Bird) {
    animal.fly();
  } else if (animal instanceof Fish) {
    animal.swim();
  }
}
