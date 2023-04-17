let library = [];
const title = document.getElementById('title');
const author = document.getElementById('author');
const pages = document.getElementById('pages');

function Book(title, author, pages) {
  this.title = title
  this.author = author
  this.pages = pages
  this.read = false
}

function addNewBook(){
  const NewBook = new Book(title.value, author.value, pages.value);
  library.push(NewBook);
}

btn.addEventListener('click', addNewBook);
