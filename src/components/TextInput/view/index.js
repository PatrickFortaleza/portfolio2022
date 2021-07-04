import React from "react";

export default function TextInput({ value, onChange, label, type, required }) {
  return (
    <fieldset className={value.length > 0 ? "focused" : ""}>
      {type.toLowerCase() === "textarea" ? (
        <textarea
          onChange={(e) => onChange(e.target.value)}
          name={camelize(label)}
          value={value}
          rows="5"
          id={camelize(label)}
        />
      ) : (
        <input
          type={type}
          name={camelize(label)}
          onChange={(e) => onChange(e.target.value)}
          value={value}
          id={camelize(label)}
        />
      )}
      <span className="selector"></span>
      <label className="input__label" htmlFor={camelize(label)}>
        {capitalize(label)} {required ? <span className="req">*</span> : null}
      </label>
    </fieldset>
  );
}

function camelize(str) {
  return str
    .replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
      return index === 0 ? word.toLowerCase() : word.toUpperCase();
    })
    .replace(/\s+/g, "");
}

export function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
