import style from './TextEditorHeader.module.scss'
import Button from "@/components/Button/Button";
import React from "react";
import {Inter} from "@next/font/google";
import {getServerSession} from "next-auth";
import {authOptions} from "@/pages/api/auth/[...nextauth]";
import prisma from "@/lib/prisma";

const inter = Inter({ subsets: ['latin'] })

export default async function TextEditorHeader(){

    const createTweet = async (data:any) => {
        'use server';
        const session = await getServerSession(authOptions)

        const content = data.get('content');
        await prisma.post.create({
            data:{
                title:session?.user?.name + '-twetted-'+ new Date().getMilliseconds().toString(),
                content: content,
                authorId: session?.user?.id
            }
        })
    }

    // const createTweet = async () => {
    //
    //     if(!session || !text) return
    //     const response = await fetch('http://localhost:8080/api/post', {
    //       method: "POST",
    //         headers: {
    //             'Content-Type': 'application/json',
    //             // @ts-ignore
    //             "Authorization": "Bearer " + session?.user?.token
    //         },
    //         body: JSON.stringify({
    //             content: text
    //         })
    //     })
    //
    //     if (response.status === 200) {
    //         setText('')
    //     }
    //     if (response.status === 401) {
    //         console.log('Unauthorized')
    //     }
    //
    //
    // }

    return(
        // @ts-ignore
        <form className={style.rightContainer} action={createTweet}>
            <textarea className={`${style.input} ${inter.className}`} placeholder={"What's happening?"} name="content"/>
            <div className={style.bottomContainer}>
                <div>{/* TODO add icons */}</div>
                <Button actionType={'submit'} type={'primary'} title={'Tweet'} style={{width:"min-content",height:'34px', padding: '0 16px'}} classname={style.button}/>
            </div>
        </form>
    )
}
