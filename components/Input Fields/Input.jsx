import { useEffect, useRef } from "react";
import { useField } from "@unform/core";
import styles from "../../styles/styles.module.scss";

const Input = ({ name, label, valua, ...rest }) => {
  const inputRef = useRef();

  const { fieldName, defaultValue, registerField, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      getValue: (ref) => {
        return ref.value;
      },
    });
  }, [fieldName, registerField]);

  return (
    <>
      <label className="mt-2 text-gray-900 text-md  sm:w-full sm:text-lg sm:text-gray-200 text-left bg-gray-400/60 border border-gray-200 text-gray-900 rounded-md  focus:ring-blue-500 focus:border-blue-500 block w-100 p-2.5 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-300 dark:focus:ring-blue-500 dark:focus:border-blue-500" htmlFor={fieldName}>{label}:</label>
      <input
      className="mb-2 bg-gray-300 border lg:w-full border-gray-100 text-gray-900 text-md sm:w-2 sm:text-lg sm:text-gray-200 text-right rounded-sm hover:rounded-md focus:rounded-lg  focus:ring-blue-800 focus:border-blue-700 block w-full  dark:bg-gray-900 dark:border-gray-800 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-800 dark:focus:border-gray-900"
        id={fieldName}
        ref={inputRef}
        defaultValue={valua}
        {...rest}
      />

      {error && <p className={styles.errorText}>{error}</p>}
    </>
  );
};

export default Input;
