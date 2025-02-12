export type BookType = {
  title: string;
  price: number;
};

function Book({ title, price }: BookType) {
  return (
    <>
      <dt>
        <p>タイトル：{title}</p>
        <p>値段：{price}</p>
        {price > 100 && <p>100円越え！</p>}
      </dt>
    </>
  );
}

export default Book;
