import React, { memo } from "react";
import { LeftWrapper } from "./style";
import IconLogo from "../../../../assets/svg/icon_logo";

export default memo(function index() {
  return (
    <LeftWrapper>
      <IconLogo />
      header-left
    </LeftWrapper>
  );
});
