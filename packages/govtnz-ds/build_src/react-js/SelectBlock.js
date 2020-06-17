import React from "react";

const SelectBlock = ({
  errorId,
  selectId,
  label,
  error,
  name,
  multiple,
  onChange,
  ref
}) => (
  <div className={errorId ? "g-form-group--error" : ""}>
    <label className="g-selectBlock-label" htmlFor={selectId}>
      {label !== undefined ? (
        label
      ) : (
        <React.Fragment>Example label text</React.Fragment>
      )}
    </label>
    <select
      className={`g-selectBlock-select${
        error ? " g-selectBlock-select--error" : ""
      }`}
      id={selectId}
      name={name}
      multiple={multiple}
      onChange={onChange}
      ref={ref}
    >
      Options
    </select>
  </div>
);

export default SelectBlock;
