'use client'

import style from './TextEditorHeader.module.scss'
import Button, {ButtonType} from "@/components/Button/Button";
import React, {useState} from "react";
import {Inter} from "@next/font/google";
import {authOptions} from "@/pages/api/auth/[...nextauth]";
import {useSession} from "next-auth/react";

const inter = Inter({ subsets: ['latin'] })

export default function TextEditorHeader(){
    const [text,setText] = useState<string>('')
    const { data: session, status } = useSession()

    const createTweet = async () => {

        if(!session || !text) return
        const response = await fetch('http://localhost:8080/api/post', {
          method: "POST",
            headers: {
                'Content-Type': 'application/json',
                // @ts-ignore
                "Authorization": "Bearer " + session?.user?.token
            },
            body: JSON.stringify({
                content: text
            })
        })

        if (response.status === 200) {
            setText('')
        }
        if (response.status === 401) {
            console.log('Unauthorized')
        }


    }

    return(
        <div className={style.rightContainer}>
            <textarea className={`${style.input} ${inter.className}`} value={text} placeholder={"What's happening?"} onChange={(e)=>setText(e.target.value)}/>
            <div className={style.bottomContainer}>
                <div>{/* TODO add icons */}</div>
                <Button handleClick={createTweet} type={ButtonType.PRIMARY} title={'Tweet'} style={{width:"min-content",height:'34px', padding: '0 16px'}} classname={style.button}/>
            </div>
        </div>
    )
}
