import { ReactNode } from 'react';
import Footer from './footer';
import Header from './header';

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
