import './globals.css'
import variable from '../styles/variables.module.scss'
import {Inter} from "@next/font/google";
import Provider from "@/app/provider";

const inter = Inter({
    subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode,
    session: any
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body style={{backgroundColor:variable.backgroundColor1}} className={inter.className}>
      <Provider>
          {children}
      </Provider>
      </body>
    </html>
  )
}
