import React from "react";
import Link from "next/link";
import ButtonLink from "@/components/ButtonLink/ButtonLink";
import {NavbarSettings} from "@/utils/const";
import Navbar from "@/components/Navbar/Navbar";

export default async function Layout({children}: {children: React.ReactNode}) {
    return (
        <div style={{display: 'flex', flexDirection:'row'}}>
            <header style={{flexGrow:1, alignItems: 'flex-end',display: "flex",flexDirection:'column'}}>
                <Navbar/>
            </header>
            <main style={{flexGrow: 1,alignItems: 'flex-start'}}>
                {children}
            </main>
        </div>
    )
}
