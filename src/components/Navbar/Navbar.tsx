import {NavbarSettings} from "@/utils/const";
import ButtonLink from "@/components/ButtonLink/ButtonLink";
import React from "react";
import styles from './Navbar.module.scss'
import {IconType} from "@/utils/type";
import {TweetButton} from "@/components/Navbar/Navbar.client";
import ProfileButton from "@/components/ProfileButton/ProfileButton";
import defaultUser from "../../../public/defaultUser.png";

export default function Navbar() {
    return (
        <div className={styles.navbarContainer}>
            <div>
                <div className={styles.logoContainer}>
                    <ButtonLink link={'/home'} icon={IconType.LOGO}/>
                </div>
                <div className={styles.navbarContainerItems}>
                    {
                        NavbarSettings.map((item) =>
                            <ButtonLink
                                key={item.title}
                                icon={item.icon}
                                title={item.title}
                                link={item.link}
                            />)
                    }
                </div>

                <TweetButton/>
            </div>

            {/* @ts-expect-error Async Server Component */}
            <ProfileButton/>

        </div>
    )
}
