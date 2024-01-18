export interface IInputFieldProps {
  name: string;
  value: string | number;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  type?:
    | "number"
    | "string"
    | "checkbox"
    | "color"
    | "date"
    | "image"
    | "password"
    | "radio"
    | "text";
  label?: string;
  error?: boolean;
}

function InputField({
  name,
  value,
  type = "text",
  onChange,
  label = "",
  error = false,
}: IInputFieldProps) {
  return (
    <input
      className={`shadow appearance-none border ${
        error ? "border-rose-700" : ""
      } rounded w-full py-2 px-3 mt-0 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
      id={name}
      name={name}
      value={value}
      type={type}
      placeholder={label}
      onChange={onChange}
    />
  );
}

export default InputField;
