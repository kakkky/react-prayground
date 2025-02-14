import React, { Suspense } from 'react';
import ThrowResult from './ThrowResult';

function SuspenseResult() {
  return (
    <Suspense fallback={<p>Now,,,</p>}>
      <ThrowResult />
    </Suspense>
  );
}

export default SuspenseResult;
