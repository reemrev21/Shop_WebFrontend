import React, { useMemo } from "react";
import LogoImg from "../../public/assets/logo.png";
import CustomLink from "./CustomLink";
import Image from "next/image";

function Logo() {
  const memoLogo = useMemo(() => <Image src={LogoImg} alt={"shop logo"} width={300} />, []);

  return <CustomLink url={"/"} text={memoLogo} isSelected={false} className={"Logo"}></CustomLink>;
}

export default React.memo(Logo);
