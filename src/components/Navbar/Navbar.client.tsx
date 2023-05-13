'use client'

import Button, {ButtonType} from "@/components/Button/Button";
import React from "react";

const TweetButton = () => {
    return(
        <Button title={'Tweet'} type={ButtonType.PRIMARY} handleClick={()=>{}} style={{height: '50px',width:'95%', marginTop: '20px'}}/>
    )
}

export {TweetButton}
