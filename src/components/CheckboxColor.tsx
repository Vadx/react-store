import React from "react";

interface CheckboxProps {
  label: string;
  onCheckboxChange: (e: any) => void;
}

const CheckboxColor: React.FC<CheckboxProps> = ({
  label,
  onCheckboxChange,
}) => {
  return (
    <div>
      <label htmlFor={label} className="checkbox-wrap">
        <input
          type="checkbox"
          id={label}
          name="color"
          value={label}
          onChange={onCheckboxChange}
        />
        {label}
        <span
          className="checkmark"
          style={{ backgroundColor: `${label}` }}
        ></span>
      </label>
    </div>
  );
};

export default CheckboxColor;
