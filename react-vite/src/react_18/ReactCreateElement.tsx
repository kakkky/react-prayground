import React from 'react';

// ReactのJSX式の実体はこれらしい。
function ReactCreateElement() {
  return (
    <>
      <h3>React.createElement()</h3>
      {React.createElement(
        'p',
        null,
        'これはReact.createElement()で作られている',
      )}
    </>
  );
}

export default ReactCreateElement;
