function findAccountById(accounts, id) {
  return accounts.find(account => account.id == id);
};

function sortAccountsByLastName(accounts) {
  return accounts.sort((a, b) => a.name.last.toLowerCase() > b.name.last.toLowerCase() ? 1 : -1);
};

function numberOfBorrows(account, books) 
{return books.reduce((acc, book) => 
{const count = book.borrows.reduce((borrowAcc, borrow) => { return borrow.id === 
account.id ? borrowAcc + 1 : borrowAcc; }, 0); 
return acc + count;}, 0); }

function getBooksPossessedByAccount(account, books, authors) { 
  let possessedBooks = [];
  
  for (let i =0; i < books.length; i++){
    let book = books[i];
    const {id, title, genre, borrows}=book;
    for (let j = 0; j < borrows.length; j++){
      if (borrows[j].id===account.id && borrows[j].returned === false){
        for (let k=0; k < authors.length; k++){
          let author = authors[k]
          if (author.id ==book.authorId){
            let tempBook={id, title, genre, author, borrows};
            possessedBooks.push(tempBook);
          }
        }
      }
    }
  }
  return possessedBooks;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  numberOfBorrows,
  getBooksPossessedByAccount,
};
