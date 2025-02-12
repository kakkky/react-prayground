import Book, { BookType } from './Book';

function BookList() {
  const books: BookType[] = [
    {
      title: 'yadokari',
      price: 220,
    },
    {
      title: 'oil',
      price: 222,
    },
    {
      title: 'oil',
      price: 23,
    },
  ];
  const sorted = books.sort((m, n) => n.price - m.price);
  return (
    <>
      {/* .map((elm)=>(<Component/>)) */}
      {sorted.map((book, i) => (
        <Book key={i} title={book.title} price={book.price} />
      ))}
    </>
  );
}

export default BookList;
