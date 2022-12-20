class User {
  constructor(name, lastName, books, pets) {
    this.name = name;
    this.lastName = lastName;
    this.books = books;
    this.pets = pets;
  }

  getFullName() {
    console.log(`Mi nombre es ${this.name} ${this.lastName}`);
  }

  addPet(pet) {
    //Manera 1
    //this.pets.push(pet);

    //Manera 2
    this.pets = [...this.pets, pet];
  }

  countPets() {
    console.log(`Tengo ${this.pets.length} mascotas`);
  }

  addBook(book, author) {
    //Manera 1
    //this.books.push({ name: book, author });

    //Manera 2
    const newBook = [...this.books, { name: book, author }];
    this.books = newBook;
  }

  getBookNames() {
    console.log(this.books.map((book) => book.name));
  }
}

const jonas = new User('Nicolas', 'Nayar', [], []);

jonas.getFullName();
jonas.addBook('El señor de los anillos', 'J.R.R. Tolkien');
jonas.addBook('Eloquent JavaScript', 'Marijn Haverbeke');
jonas.addPet('Rocco');
jonas.addPet('Firulais');
jonas.countPets();
jonas.getBookNames();
