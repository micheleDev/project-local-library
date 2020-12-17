const accounts= require("./public/data/accounts")
const authors= require("./public/data/authors")
const books= require("./public/data/books")


function totalBooksCount(books) {
    console.log(books[17].borrows)
    return books.length;
  }
  
  
console.log(totalBooksCount(books))
  