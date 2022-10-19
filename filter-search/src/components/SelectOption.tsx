import react, { FC } from "react";

type OptionPros = {
  children: React.ReactNode,
  choonseClick: (n: string) => void;
  onChange: (n: string) => void;
  index: number;
  value: string;
};

const SelectOption: FC<OptionPros> = ({ children, choonseClick, onChange, index, value }) => {
  return (
    <label className="it-check-box" onClick={() => choonseClick(value)}>
      <input type="checkbox" onChange={() => onChange(value)} value={index} />
      <span className="checkmark"></span>
      {children}
    </label>
  )
}
export default SelectOption;