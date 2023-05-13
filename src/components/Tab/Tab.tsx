'use client'

import style from './Tab.module.scss'

interface TabProps {
    tabConfig: {
        title: string;
        id: string;
    }[],
    handleOptions: (id: string) => void;
    active:string;
}
export default function Tab({tabConfig,handleOptions,active}: TabProps) {
    return(
        <div className={style.tabContainer}>
            {
                tabConfig.map((tab) => {
                    return(
                        <div className={style.tab} key={`tab-${tab.id}`} onClick={() => handleOptions(tab.id)}>
                            <div className={style.textContainer}>
                                <div/>
                                <p className={active == tab.id ? style.activeText: ''}>{tab.title}</p>
                                <div className={active == tab.id ? style.activeLine:''}/>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}