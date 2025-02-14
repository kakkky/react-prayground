import React, { memo } from 'react';
import { books } from './Transition';

const sleep = (delay: number): void => {
  const start = Date.now();
  while (Date.now() - start < delay);
};

type BookDetailProps = {
  isbn: string;
};

export const BookDetail: React.FC<BookDetailProps> = ({ isbn }) => {
  const book = books.find((b) => b.isbn == isbn);
  return (
    <div>
      <h1>Detail</h1>
      <ul>
        <li>{book?.title}</li>
        <li>{book?.isbn}</li>
      </ul>
    </div>
  );
};

type CommentItemProps = {
  isbn: string;
  body: string;
  rank: number;
};

type CommentListProps = {
  src: CommentItemProps[];
  isPending: boolean;
};

export const CommentList: React.FC<CommentListProps> = memo(
  ({ src, isPending }) => {
    if (isPending) return <p>Loading..</p>;
    return (
      <>
        <ol>
          {src.map((s) => (
            <CommentItem
              body={s.body}
              key={s.isbn}
              rank={s.rank}
              isbn={s.isbn}
            />
          ))}
        </ol>
      </>
    );
  },
);

CommentList.displayName = 'CommentList';

export const CommentItem: React.FC<CommentItemProps> = ({ body, rank }) => {
  sleep(1000);
  return (
    <>
      <li>
        {body}({rank})
      </li>
    </>
  );
};
