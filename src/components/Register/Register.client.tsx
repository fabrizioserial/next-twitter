'use client'

import Form from "@/components/Form/Form";
import {useState} from "react";
import {InputType} from "@/utils/type";
import {signIn} from "next-auth/react";
import {useRouter} from "next/navigation";

export default function RegisterForm() {
    const [form, setForm] = useState<any>({})
    const [error, setError] = useState<string | undefined>(undefined);
    const route = useRouter()
    const handleChange = (name: string, value: string) => {
        setForm({...form, [name]: value})
    }

    const handleSignup = async () => {
        console.log("initial")
        console.log(form)
        const response = await fetch('http://localhost:8080/api/auth/signup', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                email: form.Email,
                password: form.Password,
                username: form.Username,
                name: form.Name,
            })
        })
        if (response.status === 400){
            setError("ERROR")
            return ;
        }
        await signIn('credentials', {
            redirect: false,
            email: form.Email,
            password: form.Password,
        })
        route.push('/home')
    }

    return (
        <>
            <Form schema={{
                email: {
                    type: InputType.TEXT,
                    name: 'Email',
                    value: ""
                },
                username: {
                    type: InputType.TEXT,
                    name: 'Username',
                    value: ""
                },
                name: {
                    type: InputType.TEXT,
                    name: 'Name',
                    value: ""
                },
                password: {
                    type: InputType.TEXT,
                    name: 'Password',
                    value: ""
                },
                register: {
                    type: InputType.BUTTON,
                    name: 'Sign up',
                    value: "",
                    handleClick: handleSignup
                }
            }} handleCallback={handleChange}/>
            {error && <p>{error}</p>}
        </>
    )
}
