import React from 'react';
import ContentWrapper from './content/ContentWrapper';
import Footer from './footer/Footer';
import Aside from './aside/Aside';
import Nav from './navbar/Nav';

export default function Dashboard() {
  return (
    <div>
      <Nav />
      <Aside />
      <ContentWrapper />
      <Footer />
    </div>
  );
}
