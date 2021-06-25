import React from "react";
import InputMask from 'react-input-mask';

export interface IInputMaskProps {
    Imask: string;
    Iplaceholder?: string;
    id: string;
    label: string;
    Iname?: string;
    Iclass:string;
    onChange: (e: any) => void;
}

export const InputMaskComponent: React.FC<IInputMaskProps> = (props: IInputMaskProps) => {
    const {
        Imask = "",
        Iplaceholder,
        id,
        label,
        Iname,
        Iclass,
        onChange,
    } = props;
    return (
        <>
            <div className={Iclass}>
                <label>{label}</label>
                <InputMask
                    mask={Imask}
                    placeholder={Iplaceholder}
                    id={id}
                    name={Iname}
                    onChange={onChange}
                />
            </div>
        </>
    );
}


