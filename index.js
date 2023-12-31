import updateDom from './modules/updateDOM.js';
import BookShelf from './modules/books.js';
// eslint-disable-next-line no-unused-vars
import  Date  from './modules/date.js';

const container = document.querySelector('#bookList');
const form = document.querySelector('#addForm');
const submit = form.querySelector('button');

submit.addEventListener('click', (event) => {
  event.preventDefault();
  const author = form.authorInput.value;
  const title = form.titleInput.value;
  const book = new BookShelf(container, title, author);
  book.updateStorage();
  book.renderBooks();
  form.authorInput.value = '';
  form.titleInput.value = '';
  event.submit();
});

const display = new BookShelf(container);
display.renderBooks();
updateDom();