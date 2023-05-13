'use client'

import style from './HeaderHome.module.scss'
import Tab from "@/components/Tab/Tab";
import {useState} from "react";

export default function HeaderHome () {
    const [activeTab, setActiveTab] = useState('for_you')
    return(
        <div className={style.headerContainer}>
            <div className={style.headerNameContainer}>
                <p>Home</p>
            </div>
            <Tab tabConfig={[{title:'For you',id:'for_you'},{title:'Following',id:'following'}]} active={activeTab} handleOptions={(e)=>setActiveTab(e)}/>
        </div>
    )
}