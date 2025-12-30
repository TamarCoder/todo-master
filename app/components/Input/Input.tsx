/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import styles from "./Input.module.scss";
import { InputProps } from "./input.type";
import { useState } from "react";

export function Input({
  value,
  type = "text",
  placeholder = "",
  onChange,
  onKeyDown,
  error,
  disabled = false,
  label = "",
  className = "",
  icon,
  iconPosition = "left",
}: InputProps) {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const inputType = type === "password" && showPassword ? "text" : type;
  const isPasswordFileld = type === "password";

  const [inputValue, setInputValue] = useState("");

  const hasLeftIcon = icon && iconPosition === "left";
  const hasRightIcon = (icon && iconPosition === "right") || isPasswordFileld;

  const inputFieldClasses = `${styles.inputField} ${
    className ? styles[className] : ""
  } ${error ? styles.error : ""} ${disabled ? styles.disabled : ""} ${
    hasLeftIcon ? styles.withLeftIcon : ""
  } ${hasRightIcon ? styles.withRightIcon : ""}`;

  const handleTogglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  // Input props for controlled vs uncontrolled
  const inputProps = onChange ? { value: value || "", onChange } : {};

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    if (onChange) {
      onChange(e);
    }
  };

  return (
    <div className={styles.inputWrapper}>
      {label && <label className={styles.inputLabel}>{label}</label>}

      <div className={styles.inputItem}>
        {icon && iconPosition === "left" && (
          <span className={styles.leftSide}>{icon}</span>
        )}
        <input
          type={inputType}
          className={inputFieldClasses}
          {...inputProps}
         
          placeholder={placeholder}
          disabled={disabled}
          onKeyDown={onKeyDown}
          onChange={handleChange}
        />

        {icon && iconPosition === "right" && (
          <span className={styles.rightSide}>{icon}</span>
        )}
        {isPasswordFileld && (
          <button
            onClick={handleTogglePasswordVisibility}
            type="button"
            className={styles.passwordToggle}
            disabled={disabled}
            aria-label={showPassword ? "Hide password" : "Show password"}
          >
            {showPassword ? (
              <AiOutlineEye className={styles.icon} />
            ) : (
              <AiOutlineEyeInvisible className={styles.icon} />
            )}
          </button>
        )}
      </div>
    </div>
  );
}
