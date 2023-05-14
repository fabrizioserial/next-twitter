'use client'

import Button from "@/components/Button/Button";
import React from "react";
import {ButtonType} from "@/components/Button/type";

const TweetButton = () => {
    return(
        <Button title={'Tweet'} type={ButtonType.PRIMARY} handleClick={()=>{}} style={{height: '50px',width:'95%', marginTop: '20px'}}/>
    )
}

export {TweetButton}
