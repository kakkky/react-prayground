import React, { ReactNode } from 'react';

type Props = {
  src: string[];
  children: (elm: string) => ReactNode;
};

function ChildrenParam({ src, children }: Props) {
  return src.map((elm: string, i) => (
    <React.Fragment key={i}>{children(elm)}</React.Fragment>
  ));
}
export default ChildrenParam;

// 以下のように渡す。
// テンプレート関数がchildrenに来てるだけで、
//

// import ChildrenParam from './react_18/ChildrenParam';

// function App() {
//   console.log('rendering App');
//   const strArr = ['sebts', 'etbwrtbg'];

//   return (
//     <>
//       <ChildrenParam src={strArr}>
//         {(elm: string) => <div>{elm}</div>}
//       </ChildrenParam>
//     </>
//   );
// }

// export default App;
