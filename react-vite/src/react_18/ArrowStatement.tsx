import React from 'react';

type Props = {
  word: string;
};

// アロー関数だと関数（を格納した変数）に対して関数型React.FCをつけられる
// 返り値、引数を含む
const ArrowStatement: React.FC<Props> = ({ word }) => {
  return (
    <div>
      <div>{word}</div>
    </div>
  );
};

export default ArrowStatement;
