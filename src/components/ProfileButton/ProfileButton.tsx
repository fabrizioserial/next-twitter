import Image, {StaticImageData} from "next/image";
import ThreeDotsIcon from "@/assets/ThreeDotsIcon";
import style from './ProfileButton.module.scss'
import {authOptions} from "@/pages/api/auth/[...nextauth]";
import {getServerSession} from "next-auth";
import defaultUser from "../../../public/defaultUser.png";


interface ProfileButtonProps {
    image: string | StaticImageData;
    name: string;
    username: string;
    userId: string;
}

// async function getData(token: string){
//     const res = await fetch('http://localhost:8080/api/user/me', {
//         method: 'GET',
//         headers: {
//             'Content-Type': 'application/json',
//             'Authorization': 'Bearer ' + token,
//         }
//     })
//
//     return res.json()
// }


export default async function ProfileButton () {
    const {user} = await getServerSession(authOptions)
    const data:{name:string, username:string} = {name:'Fabrizio', username:'fabrizio'}
    return(
        <div className={style.buttonContainer}>
            <Image width={40} height={40} src={user!.image}  alt={'profile image'} className={style.image}/>
            <div className={style.textContainer}>
                <p className={style.nameText}>{user!.name }</p>
                <p className={style.usernameText}>@{data.username}</p>
            </div>
            <div style={{width: 18, height: 18}}>
                <ThreeDotsIcon/>
            </div>
        </div>
    )
}
