import { ReactNode } from 'react';

type ChildrenProps = {
  children: ReactNode;
};

function BasicParent({ children }: ChildrenProps) {
  return (
    <>
      <div className="border border-black p-5 m-2">
        Parent
        <div className="border border-black p-1">{children}</div>
      </div>
    </>
  );
}

export default BasicParent;
