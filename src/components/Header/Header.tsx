import React from 'react';
import { Layout, Row, Col, Input } from 'tdesign-react';
import { SearchIcon } from 'tdesign-icons-react';
import Logo from '../Logo/Logo';
import HeaderLeftItems from 'components/HeaderLeftItems/HeaderLeftItems';
import HeaderRightItems from 'components/HeaderRightItems/HeaderRightItems';

import Style from './Header.module.less';

const { Header } = Layout;

export default () => {
  return (
    <Header className={Style.headerPanel}>
      {/* <Row> */}
      <div>
        <Col className={Style.headerTop}>
          <p style={{ color: 'white', fontSize: '20px', fontWeight: 'bold' }}>
            丹心擎划宏图展，医界绽奇葩。【欢迎来到智慧医药系统】
          </p>
          <div className={Style.headerSearch}>
            <Input prefixIcon={<SearchIcon />} placeholder='请输入内容' />
          </div>
        </Col>
        <Col className={Style.headerBottom}>
          <Row className={Style.headerBottomLeft}>
            <Logo />
            <HeaderLeftItems />
          </Row>
          <Row>
            <HeaderRightItems />
          </Row>
        </Col>
      </div>
      {/* </Row> */}
    </Header>
  );
};
