let library = [];

function Book(title, author, pages, read = false) {
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
}

function createBookDiv (book, index) {

  const bookContainer = document.querySelector('#BooksDisplay');
  const content = document.createElement('div');
  content.classList.add('BookContain');
  content.classList.add(`${`a${index}`}`);

  const title = document.createElement('h2');
  title.textContent = book.title;

  const author = document.createElement('h3');
  author.textContent = book.author;

  const pages = document.createElement('p');
  pages.textContent = book.pages;

  const read = document.createElement('p');
  read.classList.add('read');
  if (book.read == false) {
  read.textContent = "Unread";
  }

  const DeleteButton = document.createElement('button');
  DeleteButton.classList.add('delete-btn');
  DeleteButton.textContent = "Delete";

  const ReadButton = document.createElement('Button');
  ReadButton.classList.add('read-btn');
  ReadButton.textContent = "Read";



  
  
  
  
  
  

  DeleteButton.addEventListener('click', () => {
    if (!document.querySelector(`.a${index}`)) {
      console.log("doesn't exist")
    }
      else{
    document.querySelector(`.a${index}`).remove();
    library.splice(index, 1);
      }
  });


  bookContainer.appendChild(content);
  content.appendChild(DeleteButton);
  content.appendChild(ReadButton);
  content.appendChild(title);
  content.appendChild(author);
  content.appendChild(pages);
  content.appendChild(read);
}

function diplayAllBooks() {
  library.forEach((book, index) => {
    deleteAll(book, index)
    createBookDiv(book, index);
});
}

function deleteAll(book, index){
  if (!document.querySelector(`.a${index}`)) {
    console.log("doesn't exist")
  }
    else{
    const bookCard = document.querySelector(`.a${index}`);
    bookCard.remove();
    }

}

function preLoadBooks(){
  const harry = new Book("Harry Potter", "J.K. Rowling", 600);
  const DaringGreatly = new Book("Daring Greatly", "Brene Brown", 300);
  const tower = new Book("Tower of Fools", "Andrjej Sapkowski", 549);

  library.push(harry, DaringGreatly, tower);
  diplayAllBooks();
}

function addNewBook(){
  const title = document.getElementById('title');
  const author = document.getElementById('author');
  const pages = document.getElementById('pages');

  const NewBook = new Book(title.value, author.value, pages.value);
  library.push(NewBook);
  diplayAllBooks();
}



preLoadBooks();
btn.addEventListener('click', addNewBook);

