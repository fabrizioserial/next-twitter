import style from './Input.module.scss'
export default function Input(props:any){
    return(
        <input className={style.container} {...props}/>
    )
}
