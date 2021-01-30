import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Layout, Breadcrumb } from 'antd';
import ComputerEng from './ComputerEng';

const { Content } = Layout;

const Container = () => {
  return (
    <Content style={{ margin: '0 16px' }}>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>
          <Switch>
            <Route path="/KM" component={ComputerEng} />
          </Switch>
        </Breadcrumb.Item>
      </Breadcrumb>
    </Content>
  );
};

export default Container;
