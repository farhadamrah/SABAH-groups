import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Layout } from 'antd';
import 'antd/dist/antd.css';

import Sidebar from './components/Sidebar';
import Container from './components/Container';

const { Header } = Layout;

const App = () => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Router>
        <Sidebar />
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }}>
            <h1 style={{ textAlign: 'center', fontSize: 'x-large' }}>
              Azərbaycan Respublikası Təhsil Nazirliyinin SABAH qrupları
            </h1>
          </Header>
          <Container />
        </Layout>
      </Router>
    </Layout>
  );
};

export default App;
