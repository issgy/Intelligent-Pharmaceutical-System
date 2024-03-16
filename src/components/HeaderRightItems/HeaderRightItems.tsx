import React, { memo } from 'react';
import { Input, Button } from 'tdesign-react';
import Style from './HeaderRightItems.module.less';

export default memo(() => {
  return (
    <div className={Style.headerRightItems}>
      <Input className={Style.headerRightItemsbtn1} size='large' placeholder='账户登录' />
      <Input className={Style.headerRightItemsbtn1} size='large' placeholder='密码' />
      <Button size='large' theme='success'>
        登陆
      </Button>
    </div>
  );
});
