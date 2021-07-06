import React from "react";
import TextInputCtrl from "../../TextInput/controller";

export default function ContactForm({
  setName,
  setEmail,
  setBody,
  submitForm,
  uiMessage,
  loading,
}) {
  return (
    <div className="contact__form" style={{ position: "relative" }}>
      <TextInputCtrl
        type="text"
        label="Full name"
        required={true}
        syncData={(data) => setName(data)}
      />
      <TextInputCtrl
        type="text"
        label="Email address"
        required={true}
        syncData={(data) => setEmail(data)}
      />
      <TextInputCtrl
        type="textarea"
        label="Subject"
        syncData={(data) => setBody(data)}
      />
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <button onClick={() => submitForm()}>
          Send Email
          {loading && <div className="spinner"></div>}
        </button>
      </div>

      {uiMessage && (
        <p
          style={{
            position: "absolute",
            bottom: "calc(100% + 7px)",
            right: "0",
            fontSize: "12px",
            width: "100%",
            whiteSpace: "nowrap",
            textAlign: "right",
          }}
        >
          {uiMessage}
        </p>
      )}
    </div>
  );
}
