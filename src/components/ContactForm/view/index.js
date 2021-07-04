import React from "react";
import TextInputCtrl from "../../TextInput/controller";
import ArrowButton from "../../ArrowButton/view";

export default function ContactForm() {
  return (
    <div className="contact__form">
      <TextInputCtrl
        type="text"
        label="Full name"
        required={true}
        syncData={(data) => console.log(data)}
      />
      <TextInputCtrl
        type="text"
        label="Email address"
        required={true}
        syncData={(data) => console.log(data)}
      />
      <TextInputCtrl
        type="textarea"
        label="Subject"
        syncData={(data) => console.log(data)}
      />
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <button>Send Email</button>
      </div>
    </div>
  );
}
