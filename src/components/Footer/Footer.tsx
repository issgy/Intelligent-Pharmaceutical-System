import React, { memo } from 'react';
import { Layout, Button } from 'tdesign-react';
import Style from './Footer.module.less';

const { Footer } = Layout;

export default memo(() => {
  return (
    <Footer style={{ padding: 0 }}>
      <div className={Style.top}>
        <div className={Style.topTitle}>
          <div style={{ fontSize: '20px' }}>有问题？要反馈？</div>
          <div>(+86) 888 888 888</div>
        </div>
        <div>联系我们并提交反馈，我们会悉心听取您的意见！</div>
        <div>
          <Button theme='default' size='large'>
            提交反馈&nbsp;&nbsp;&nbsp;&rarr;
          </Button>
        </div>
      </div>
      <div className={Style.middle}>middle</div>
      <div className={Style.bottom}>@2024 智慧医药系统</div>
    </Footer>
  );
});
