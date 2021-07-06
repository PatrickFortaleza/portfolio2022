import React, { useState, useEffect } from "react";
import TextInputView from "../view";

export default function TextInputCtrl({ type, label, syncData, required }) {
  const [textValue, setTextValue] = useState("");

  useEffect(() => {
    syncData(textValue);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [textValue]);

  return (
    <TextInputView
      value={textValue}
      onChange={setTextValue}
      required={required}
      type={type}
      label={label}
    />
  );
}
