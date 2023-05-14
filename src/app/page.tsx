import {Inter} from '@next/font/google'
import React from "react";
import Login from "@/components/Login/Login";
import prisma from "@/lib/prisma";

const inter = Inter({ subsets: ['latin'] })

const getPosts = () => {
    return prisma.post.findMany()
}

export default async function Page(props: any) {
    const posts = await getPosts()
  return (
      <div style={{width:"100vw"}}>
          <Login/>
      </div>
  )
}
