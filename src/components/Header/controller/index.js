import React from "react";
import HeaderView from "../view";
import { useScreen } from "../../../context/ScreenContext";

export default function HeaderCtrl() {
  const screenContext = useScreen();
  const { isTop } = screenContext;
  return <HeaderView isTop={isTop} />;
}
