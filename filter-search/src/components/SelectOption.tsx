import { ChangeEvent } from "react";

type OptionPros = {
    children: React.ReactNode;
    choonseClick: (event: React.MouseEvent<HTMLLabelElement, MouseEvent>) => void;
    onChange: (event: React.ChangeEvent<HTMLInputElement, ChangeEvent>) => void;
    index: number;
};

const SelectOption = ({ children, choonseClick, onChange, index }: OptionPros) => {
    return (
        <label className="it-check-box" onClick={choonseClick}>
            <input type="checkbox" onChange={onChange} value={index} />
            <span className="checkmark"></span>
            {children}
        </label>
    )
}
export default SelectOption;