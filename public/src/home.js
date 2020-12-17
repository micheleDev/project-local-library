function totalBooksCount(books) {
  return books.length;
}

function totalAccountsCount(accounts) {
  return accounts.length;
}

function booksBorrowedCount(books) {
  return books.filter(book => book.borrows[0].returned === false).length;
}

function genreCount(books, genre){
  return books.filter(book=>book.genre==genre).length;
}
function mostCommonGenres(books) {
  let genres =books.map(x=>x.genre);
  let results = [];
  genres.forEach(x=>
  {
    if(!results.find(y=>y.name==x))
      {
        results.push({
          "name": x,
          "count": genreCount(books, x)
        })
      }
  })
  return results.sort((a,b) =>b.count - a.count).slice(0,5);
}

function mostPopularBooks(books) {
    let result = [];
  
  books.sort((book1, book2) => book2.borrows.length - book1.borrows.length).forEach(book => {
    if (result.length < 5) {
      result.push({ name: book.title, count: book.borrows.length });
    }
  });
  return result;
}

function mostPopularAuthors(books, authors) {
  const result = [];

  authors.forEach(author => {
    const filtered = books.filter(book => book.authorId === author.id);
    const authorName = `${author.name.first} ${author.name.last}`;
    const count = filtered.reduce((accumulator, book) => {
      return accumulator + book.borrows.length;
    }, 0);
    result.push({ name: authorName, count: count });
  });
  return result.sort((author1, author2) => author2.count - author1.count).slice(0, 5);
}

module.exports = {
  totalBooksCount,
  totalAccountsCount,
  booksBorrowedCount,
  mostCommonGenres,
  mostPopularBooks,
  mostPopularAuthors,
};

