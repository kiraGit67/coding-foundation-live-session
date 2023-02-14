// Der Name einer Klasse beginnt immer mit einem Großbuchstaben
// Eine Klasse ist eine Blaupause / Vorlage für Instanzen, die von dieser Klasse gezogen werden
// Kann eine constructor-Funktion beinhalten für die Eigenschaften (properties)

class Cat {
  //constructor
  // Eigenschaften
  constructor(name, age, color, sound = "Meow") {
    this.name = name;
    this.age = age;
    this.color = color;
    this.sound = sound;
  }
  // Methoden
  makeSound() {
    return this.sound;
  }
}

const myCat = new Cat("Timmy", 12, "tigergrey", "Meow!");
console.log(myCat.makeSound());

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
    sound: "Miau!",
  },
  {
    name: "Kitty",
    age: 4,
    color: "tigerred",
    sound: "Mau-Mau",
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
    sound: "Grrrr",
  },
];

for (let cat of cats) {
  const newCat = new Cat(cat.name, cat.age, cat.color, cat.sound);
  console.log(newCat.makeSound());
}
