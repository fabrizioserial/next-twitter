import {Inter} from '@next/font/google'
import React from "react";
import Login from "@/components/Login/Login";

const inter = Inter({ subsets: ['latin'] })

export default function Page(props: any) {
  return (
      <div style={{width:"100vw"}}>
          <Login/>
      </div>
  )
}
