import React, { memo } from 'react';
import { Layout } from 'tdesign-react';

import Style from './Content.module.less';

const { Content } = Layout;

export default memo(() => {
  return <Content className={Style.content}>content</Content>;
});
