import { ReactNode } from 'react';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = ({ meta, children }: IMainProps) => (
  <>
    {meta}
    <div className="relative mx-[10vw]">{children}</div>
  </>
);

export { Main };
