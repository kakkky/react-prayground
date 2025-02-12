type Props = {
  attr: string;
};

function Props({ attr }: Props) {
  return (
    <>
      <h3>Propsで渡す。</h3>
      <div>{attr}</div>
    </>
  );
}

// function Props(props: Props) {
//   return (
//     <>
//       <h3>Propsで渡す。</h3>
//       <div>{props.attr}</div>
//     </>
//   );
// }

export default Props;
