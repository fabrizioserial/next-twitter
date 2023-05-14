import React from "react";
import Image from "next/image";
import style from './TextEditorHeaderContainer.module.scss'
import TextEditorHeader from "@/components/TextEditorHeader/TextEditorHeader";
import {getServerSession} from "next-auth";
import {authOptions} from "@/pages/api/auth/[...nextauth]";

export default async function TextEditorHeaderContainer(){
    const {user} = await getServerSession(authOptions)

    return(
        <div className={style.container}>
            <Image width={48} height={48} src={user!.image} alt={'image'} className={style.image} quality={100}/>
            {/* @ts-expect-error Server Component */}
                <TextEditorHeader/>
        </div>
    )
}
