// // able to use W3 syntax until comfortable with classes
// // "this" referes to the object 


// const myObject = {
//    name: "Tina",
//    ship: "Badass"
// }

// const Helma = {
//    firstName: "Bonny",
//    lastName: "Clyde",
//    email: "some@email.com"
// }

// // class is factory, creating the template for the object
// class Student {
//    constructor(firstName, lastName, classYear) {
//       this.firstName = firstName;
//       this.lastName = lastName;
//       this.classYear = classYear;
//    }
//    graduate() {
//       let date = new Date();
//       // console.log(date.getFullYear() + 2)
//       console.log(this.classYear + 2)
//    }
// }

// // the below becomes the object created from the Class "factory"
// let manny = new Student("Manny", "Muro", 2022)
// let badass = new Student("Tina", "Lambert", 2020)
// console.log(manny);
// console.log(badass);
// // console.log([new Student("Manny", "Muro"), new Student("Tina", "Lambert")])

// manny.graduate();




class Circle {
   constructior(radius) {
      this.radius = radius;
   }
   get diameter() {
      return 2 * this.radius;
   }
   set diameter(diameter) {
      this.radius = diameter / 2;
   }
   get area() {
      return Math.PI * this.radius * this.radius;
   }
}
let c = new Circle(2);
console.log(`Radius: ${c.radius}`); //2 
console.log(`Diameter: ${c.diameter}`); // 4 
console.log(`Area: ${c.area}`); // 12.566370614359172
