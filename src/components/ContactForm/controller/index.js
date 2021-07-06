import React, { useState, useEffect } from "react";
import ContactFormView from "../view";
import { sendEmail } from "../../../network";

export default function ContactFormCtrl() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [body, setBody] = useState("");
  const [uiMessage, setUIMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const resetForm = () => {
    setName("");
    setEmail("");
    setBody("");
  };

  const submitForm = async () => {
    setLoading(true);
    const result = await sendEmail({ name, email, body });
    if (result.error) {
      setLoading(false);
      return setUIMessage(result.error.data.message);
    }
    setLoading(false);
    resetForm();
    setUIMessage(result.message);
  };

  useEffect(() => {
    if (uiMessage) {
      setTimeout(() => {
        setUIMessage("");
      }, 3000);
    }
  }, [uiMessage]);

  return (
    <ContactFormView
      submitForm={submitForm}
      setName={setName}
      setEmail={setEmail}
      setBody={setBody}
      uiMessage={uiMessage}
      loading={loading}
    />
  );
}
