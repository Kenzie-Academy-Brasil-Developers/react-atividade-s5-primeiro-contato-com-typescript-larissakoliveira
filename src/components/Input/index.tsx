import { InputHTMLAttributes } from "react";

   interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    type?: string;
    placeholder: string;
};


const Input = ({ label, placeholder, ...rest }: InputProps ) => {

    return (
        <div>
            {label && <label>{label}</label>}
            <input placeholder={placeholder} {...rest}/>
        </div>
    )
}

export default Input