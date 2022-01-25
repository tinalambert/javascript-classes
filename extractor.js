class Person {
   constructor(name, email) {
      this.name = name;
      this.email = email;
   }
}

class Teacher extends Person {
   constructor(name, email, subject) {
      super(name, email);
      this.subject = subject
   }
}

const p = new Person("Anna", "anna@gmail.com");

console.log(`Person: ${p.name} ${p.email}`);

const t = new Teacher("John", "joe@yahoo.com", "Javascript");

console.log(`Teacher: ${t.name} ${t.email}, teaches ${t.subject}`)