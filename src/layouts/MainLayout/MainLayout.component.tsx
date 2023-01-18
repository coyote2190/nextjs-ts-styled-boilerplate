import Footer from 'components/Footer';
import Header from 'components/Header';
import Head from 'next/head';
import { FC } from 'react';

import { StyledMainLayout } from './StyledMainLayout';
import { MainLayoutProps } from './types';

export const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  return (
    <>
      <Head>
        <title>Layouts Example</title>
      </Head>
      <Header />
      <StyledMainLayout>{children}</StyledMainLayout>
      <Footer />
    </>
  );
};

export default MainLayout;
