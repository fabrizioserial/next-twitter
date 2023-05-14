'use client'

import {signIn, signOut, useSession} from "next-auth/react";
import {useRouter} from "next/navigation";


export default function Login() {
    const {data:session,status} = useSession()
    const router = useRouter();
    console.log(session,status)

    if (session) {
        return (
            <>
                Signed in as {session?.user?.email} <br />
                <button onClick={() => signOut()}>Sign out</button>
            </>
        )
    }
    return (
        <div>
            Not signed in <br />
            <button onClick={() => router.push('/signup')}>Sign up</button>
            <button onClick={() => signIn('credentials', { callbackUrl: `${window.location.origin}/home` })}>Sign in</button>
        </div>
    )
}
