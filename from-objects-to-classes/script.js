// Der Name einer Klasse beginnt immer mit einem Großbuchstaben
// Eine Klasse ist eine Blaupause / Vorlage für Instanzen, die von dieser Klasse gezogen werden
// Kann eine constructor-Funktion beinhalten für die Eigenschaften (properties)

class Animal {
  constructor(name, age, color, sound, diet) {
    this.name = name;
    this.age = age;
    this.color = color;
    this.sound = sound;
    this.diet = diet;
  }

  makeSound() {
    return this.sound;
  }

  goToSleep() {
    console.log("tz".repeat(10));
  }
}
class Cat extends Animal {
  //constructor
  // Eigenschaften
  constructor(name, age, color) {
    super(name, age, color, "Meow!", "carnivore");
  }

  fall9feetDeep() {
    console.log("swoooooooooosh...");
  }
}

class Dog extends Animal {
  //constructor
  // Eigenschaften
  constructor(name, age, color) {
    super(name, age, color, "Bow-Wow!", "onmivore");
  }

  beeingBlindDog() {
    console.log("leeeeeeed...");
  }
}

const myCat = new Cat("Timmy", 12, "tigergrey", "Meow!");
console.log(myCat.makeSound());
myCat.goToSleep();
myCat.fall9feetDeep();

const cats = [
  {
    name: "Pepe",
    age: 5,
    color: "black",
  },
  {
    name: "Luna",
    age: 8,
    color: "black",
  },
  {
    name: "Kitty",
    age: 4,
    color: "tigerred",
  },
  {
    name: "Happy",
    age: 8,
    color: "white",
  },
  {
    name: "Lucky",
    age: 12,
    color: "sand",
  },
];

for (let cat of cats) {
  const newCat = new Cat(cat.name, cat.age, cat.color, cat.sound);
  console.log(newCat.makeSound());
  newCat.goToSleep();
  newCat.fall9feetDeep();
}

const myDog = new Dog("Bello", 8, "black");
console.log(myDog.makeSound());
myDog.goToSleep();
myDog.beeingBlindDog();
