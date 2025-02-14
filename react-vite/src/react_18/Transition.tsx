import React, { useState, useTransition } from 'react';
import { BookDetail, CommentList } from './TransitionChild';

type Book = {
  title: string;
  isbn: string;
  price: number;
};

export const books: Book[] = [
  {
    title: '1番目の本',
    isbn: '1',
    price: 100,
  },
  {
    title: '2番目の本',
    isbn: '2',
    price: 100,
  },
];

type Comment = {
  body: string;
  isbn: string;
  rank: number;
};

const commentlist: Comment[] = [
  {
    body: '1に関してコメント',
    isbn: '1',
    rank: 121,
  },
  {
    body: '2に関してコメント',
    isbn: '2',
    rank: 12,
  },
];

const Transition = () => {
  const [isbn, setIsbn] = useState('');
  const [comments, setComments] = useState<Comment[]>([]);
  const [isPending, startTransition] = useTransition();
  const handleChange: React.ChangeEventHandler<HTMLSelectElement> = (e) => {
    const selectedIsbn = e.target.value;
    setIsbn(selectedIsbn);
    // 優先度の低い状態更新は優先度を低くする
    startTransition(() => {
      setComments(commentlist.filter((c) => c.isbn === selectedIsbn));
    });
  };
  return (
    <div>
      <h1>Transition</h1>
      <select onChange={handleChange}>
        <option value="">選択してください</option>
        {books.map((b) => (
          <option key={b.isbn} value={b.isbn}>
            {b.title}
          </option>
        ))}
      </select>
      <BookDetail isbn={isbn} />
      <hr />
      <CommentList src={comments} isPending={isPending} />
    </div>
  );
};

export default Transition;
