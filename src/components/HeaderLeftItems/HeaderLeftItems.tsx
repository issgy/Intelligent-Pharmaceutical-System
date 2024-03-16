import React, { memo } from 'react';
import Style from './HeaderLeftItems.module.less';

export default memo(() => {
  const headerLeftItems: string[] = ['疾病百科', '查找药品', '智能医生'];
  return (
    <div className={Style.headerLeftItems}>
      {headerLeftItems.map((item) => {
        return (
          <div className={Style.headerLeftItem} key={item}>
            {item}
          </div>
        );
      })}
    </div>
  );
});
