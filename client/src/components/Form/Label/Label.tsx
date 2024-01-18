interface ILabel {
  name: string;
  title: string;
  childComponent?: React.ReactNode;
}
function Label({ name, title, childComponent }: ILabel) {
  return (
    <label className="flex flex-row justify-between" htmlFor={name}>
      <span className=" text-gray-700 text-sm font-bold">{title}</span>
      {childComponent && childComponent}
    </label>
  );
}

export default Label;
