import React, { memo } from 'react';
import FullLogo from 'assets/svg/assets-logo-full.svg?component';
// import FullLogo from 'assets/svg/logo.svg';

import Style from './Logo.module.less';

export default memo(() => {
  return (
    <div className={Style.logo}>
      <FullLogo />
    </div>
  );
});
