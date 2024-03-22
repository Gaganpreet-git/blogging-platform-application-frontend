import React from "react";
import "./Input.css";

const Input = ({
  type,
  placeholder,
  value,
  onChange,
  name,
  label,
  required,
}) => {
  if (type === "textarea") {
    return (
      <>
        {label && <label>{label}</label>}
        <textarea
          className="input"
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          name={name}
          required={required}
        />
      </>
    );
  } else {
    return (
      <>
        {label && <label>{label}</label>}
        <input
          className="input"
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          name={name}
          required={required}
        />
      </>
    );
  }
};

export default Input;
