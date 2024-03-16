import React from 'react';
import { Layout } from 'tdesign-react';
import Header from '../components/Header/Header';
import Content from '../components/Content/Content';
import Footer from 'components/Footer/Footer';

export default () => {
  return (
    <Layout>
      <Header />
      <Content />
      <Footer />
    </Layout>
  );
};
