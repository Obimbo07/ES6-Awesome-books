class BookShelf {
  constructor (container, title, author) {
    this.author = author;
    this.title = title;
    this.container = container;
    this.listItem = document.createElement('ul');
  }

  // eslint-disable-next-line class-methods-use-this
  storage () {
    let books = [];
    try {
      const storedBooks = localStorage.getItem('books');
      if (storedBooks) {
        books = JSON.parse(storedBooks);
        if (!Array.isArray(books)) {
          books = [];
        }
      }
    } catch {
      books = [];
    }

    return books;
  }

  updateStorage () {
    const books = this.storage();
    const newbook = {
      'author': this.author,
      'title': this.title
    };
    books.push(newbook);
    localStorage.setItem('books', JSON.stringify(books));
  }

  renderBooks () {
    const books = this.storage();
    this.container.innerHTML = '';
    this.listItem.innerHTML = '';
    const reversedBooks = books.slice().reverse();
    reversedBooks.forEach((book) => {
      const li = document.createElement('li');
      const para = document.createElement('p');
      const removeButton = document.createElement('button');

      para.textContent = `'${book.title}' by '${book.author}'`;
      removeButton.textContent = 'Remove';

      li.appendChild(para);
      li.appendChild(removeButton);

      this.listItem.appendChild(li);

      removeButton.addEventListener('click', () => {
        this.removeBook(book.title, book.author);
        this.renderBooks();
      });
    });
    this.container.appendChild(this.listItem);
    this.listItem.classList.add('book-list');
  }

  removeBook (title, author) {
    let books = this.storage();
    // eslint-disable-next-line max-len
    books = books.filter((book) => !(book.title === title && book.author === author));
    localStorage.setItem('books', JSON.stringify(books));
  }
}

export default BookShelf;