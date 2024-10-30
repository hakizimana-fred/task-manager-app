import React from 'react'
import { Sidebar } from './Sidebar';
import { MainSection } from './Main';
import { Navbar } from './Navbar';

const Layout = () => {
  return (
    <>
    <Navbar />
    <div className="flex h-screen bg-lightBg dark:bg-darkBg">
      <Sidebar />
      <MainSection />
    </div>
    </>
  );
};

export default Layout;
