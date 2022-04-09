import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

const Content = ({ children }: Props) => {
  return (
    <div className="grid grid-cols-4 gap-x-4 md:grid-cols-12">{children}</div>
  );
};

export default Content;
