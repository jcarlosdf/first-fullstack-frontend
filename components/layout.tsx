import { ReactNode } from 'react';
import Footer from './Footer';
import Header from './Header';

interface Props {
  children?: ReactNode;
}

export const Layout = ({ children, ...props }: Props) => {
  return (
    <>
      <Header />
      <main className="box-border container ml-3" {...props}>
        {children}
      </main>
      <Footer />
    </>
  );
};
