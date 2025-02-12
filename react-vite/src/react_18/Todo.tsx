type Props = {
  title: string;
  id: number;
  isDone: boolean;
  handleDone: React.MouseEventHandler<HTMLButtonElement>;
  handleDelete: React.MouseEventHandler<HTMLButtonElement>;
};

function Todo(props: Props) {
  return (
    <>
      <li
        className={
          props.isDone ? 'line-through flex space-x-3' : 'flex space-x-3'
        }
      >
        <p>{props.title}</p>
        <button type="button" onClick={props.handleDone} data-id={props.id}>
          済
        </button>
        <button type="button" onClick={props.handleDelete} data-id={props.id}>
          削除
        </button>
      </li>
    </>
  );
}

export default Todo;
