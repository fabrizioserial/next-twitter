import Button from "@/components/Button/Button";
import React from "react";
import Image from "next/image";
import defaultImage from '../../../public/defaultUser.png'
import style from './TextEditorHeaderContainer.module.scss'
import TextEditorHeader from "@/components/TextEditorHeader/TextEditorHeader";

export default function TextEditorHeaderContainer(){
    return(
        <div className={style.container}>
            <Image width={48} height={48} src={defaultImage} alt={'image'} className={style.image} quality={100}/>
            <TextEditorHeader/>
        </div>
    )
}