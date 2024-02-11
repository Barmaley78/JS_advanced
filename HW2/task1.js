"use strict";


class Library {#books;

    constructor(books) {
        if (!Array.isArray(books)) {
            throw Error("Список книг не массив");
        }
        if (arr => arr.filter((item, index) => arr.indexOf(item) !== index).length === 0) {
            this.#books = books;
        } else {
            throw Error("В списке книг содержаться дубликаты");
        };
    };

    allBooks() { return this.#books; };

    addBook(title) {
        if (this.hasBook(title)) {
            throw Error("Такая книга уже существует");
        }
        this.#books.push(title);
    };

    removeBook(title) {
        if (!this.hasBook(title)) {
            throw Error("Такая книга не существует");
        }
        const id = this.#books.findIndex(e => e === title);
        this.#books.splice(id, 1);
    };

    hasBook(title) {
        return this.#books.includes(title);
    };
};



const library = new Library(["Букварь", "Вторая", "Зеленая"]);
console.log(library.allBooks());

lib.addBook("Еще одна");
console.log(library.allBooks());

lib.removeBook("Еще одна");

console.log(library.allBooks());

console.log(library.hasBook("Еще одна"));
console.log(library.hasBook("Вторая"));