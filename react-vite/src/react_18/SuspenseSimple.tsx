import React, { Suspense } from 'react';
import ThrowPromise from './ThrowPromise';

function SuspenseSimple() {
  return (
    // 子要素からPromiseを補足すると、フォールバックを表示するコンポーネント<Suspense>
    <Suspense fallback={<p>now loadins...</p>}>
      <ThrowPromise />
    </Suspense>
  );
}

export default SuspenseSimple;
