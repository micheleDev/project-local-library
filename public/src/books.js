function findAuthorById(authors, id) {
  let results = authors.find(author => author.id == id);
  return results;
}

function findBookById(books, id) {
  let results = books.find(book => book.id == id);
  return results;
}

function partitionBooksByBorrowedStatus(books) {
  let borrowedBooks = books.filter(book=>{
  return book.borrows[0].returned==false;
})
  let returnedBooks = books.filter(book=>{
  return book.borrows[0].returned==true;
})
  return [borrowedBooks, returnedBooks];
}

function getBorrowersForBook(books, accounts) {
  let borrowers = [];  
  accounts.forEach(account =>{ books.borrows.forEach(transaction => {
    if(transaction.id === account.id){
    let accountObj = {...account};
      accountObj.returned = transaction.returned;
      borrowers.push(accountObj);      
    }    
  })
}) 
  return borrowers.slice(0,10);}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
