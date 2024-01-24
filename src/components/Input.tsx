import { InputHTMLAttributes } from "react";
import styles from "./Input.module.css";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {

}

export function Input({type, placeholder, ...root}:InputProps) {
  return (
    <input 
      type={type} 
      placeholder={placeholder}
      className={styles.textArea}
      {...root}
    />
  );

}
