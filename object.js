const myLibrary = ["Metamorphosis", "Silmarilion", "Elantris"];

function Book(name, author, date) {
  // the constructor...
  this.name = name
  this.author = author
  this.date = date 
}

// Needs work 
const showFormButton = document.getElementById('showFormButton');
const bookForm = document.getElementById('bookForm');

showFormButton.addEventListener('click', function() {
    if (bookForm.style.display === 'none' || bookForm.style.display === '') {
        bookForm.style.display = 'block'; // Show the form
    } else {
        bookForm.style.display = 'none'; // Hide the form
    }
});
