'use client'

import styleButton from '../Button/Button.module.scss'
import {CSSProperties, forwardRef} from "react";
import {ButtonType} from "@/components/Button/type";

interface ButtonProps {
    title?: string;
    handleClick?: () => void;
    type: ButtonType | 'primary'
    style?: CSSProperties;
    classname?: string | number;
    actionType?: "button" | "submit" | "reset" | undefined
}

// eslint-disable-next-line react/display-name
const Button = forwardRef<HTMLButtonElement,ButtonProps>(({title, handleClick,type,style,classname,actionType}:ButtonProps,ref) => {
    return (
        <button type={actionType} onClick={handleClick} className={`${styleButton[type]} ${styleButton.buttonContainer} ${classname}`} style={{width: '100%',...style}} ref={ref}>{title}</button>
    )
})

export default Button;
