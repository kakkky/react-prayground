import React, { ReactNode } from 'react';

type Props = {
  src: string[];
  render: (elm: string) => ReactNode;
};

function RenderProp({ src, render }: Props) {
  return (
    <>
      {src.map((elm, i) => (
        <React.Fragment key={i}>{render(elm)}</React.Fragment>
      ))}
    </>
  );
}

export default RenderProp;

// 以下のようにわタス。
// renderには、テンプレートだけ。
// import RenderProp from './react_18/RenderProp';

// function App() {
//   console.log('rendering App');
//   const strArr = ['sebts', 'etbwrtbg'];

//   return (
//     <>
//       <RenderProp src={strArr} render={(elm) => <div>{elm}</div>} />
//     </>
//   );
// }

// export default App;
