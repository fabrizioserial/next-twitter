'use client'

import styleButton from '../Button/Button.module.scss'
import {CSSProperties} from "react";

export enum ButtonType {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
}

interface ButtonProps {
    title?: string;
    handleClick?: () => void;
    type: ButtonType;
    style?: CSSProperties;
    classname?: string | number;
}

export default function Button({title, handleClick,type,style,classname}:ButtonProps){
    return (
        <button onClick={handleClick} className={`${styleButton[type]} ${styleButton.buttonContainer} ${classname}`} style={{width: '100%',...style}}>{title}</button>
    )
}
