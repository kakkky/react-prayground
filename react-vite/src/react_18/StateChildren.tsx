type Props = {
  step: number;
  update: (prev: number) => void;
};

function StateChildren({ step, update }: Props) {
  const onClick = () => {
    update(step);
  };
  return (
    <>
      <div>
        <button onClick={onClick} className="border border-black p-1">
          <span>{step}</span>
        </button>
      </div>
    </>
  );
}

export default StateChildren;
