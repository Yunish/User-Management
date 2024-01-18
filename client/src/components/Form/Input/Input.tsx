import InputField, { IInputFieldProps } from "../InputField/InputField";
import Label from "../Label/Label";

interface IInputProps extends IInputFieldProps {
  label: string;
  childComponent?: React.ReactNode;
}

function Input({
  name,
  value,
  onChange,
  type = "text",
  label,
  childComponent,
  ...otherProps
}: IInputProps) {
  return (
    <>
      <Label name={name} title={label} childComponent={childComponent} />
      <InputField
        name={name}
        value={value}
        type={type}
        label={label}
        onChange={onChange}
        {...otherProps}
      />
    </>
  );
}

export default Input;
