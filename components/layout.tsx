import { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';


interface Props {
  children?: ReactNode;
}

export const Layout = ({ children, ...props }: Props) => {
  return (
    <>
      <Header />
      <main {...props}>{children}</main>
      <Footer />
    </>
  );
};
