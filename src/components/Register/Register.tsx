import style from './Register.module.scss'
import Form from "@/components/Form/Form";
import RegisterForm from "@/components/Register/Register.client";

export default function Register(){
    return(
        <div className={style.container}>
            <div className={style.registerContainer}>
                <h1 className={style.title}>Crear tu cuenta</h1>
                <div className={style.containerForm}>
                    <RegisterForm />
                </div>
            </div>
        </div>
    )
}
