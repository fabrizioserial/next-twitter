import {TweetType} from "@/utils/type";
import style from './Tweet.module.scss'
import Image from "next/image";
import defaultUser from "../../../public/defaultUser.png";
import ReactionBar from "@/components/Tweet/ReactionBar/ReactionBar";
import Button from "@/components/Button/Button";
import {ButtonType} from "@/components/Button/type";


type TweetProps = TweetType & {

}
export default function Tweet({author,comments,content,createdAt,picture,retweet,favorite,status}: TweetProps) {
    return(
        <div className={style.container}>
             <div className={ status ? style.statusbar : style.withOutStatus}>

            </div>
            <div style={{display:'flex',flexDirection:'row'}}>
                <Image
                    src={defaultUser}
                    alt={'user profile'}
                    width={80}
                    height={80}
                    quality={100}
                    className={style.avatar}
                    placeholder={'blur'}
                    blurDataURL={defaultUser?.blurDataURL}
                />
                <div style={{display:'flex',flexDirection:'column', paddingLeft:'16px',width: '100%'}}>
                    <div style={{display:'flex',flexDirection:'row', marginBottom:'2px'}}>
                        <p className={style.name}>{author.name ?? "Unknown User"}</p>
                        <p className={style.username}>@{author?.username}</p>

                        <Button type={ButtonType.SECONDARY} title={'Follow'} style={{width: 100, marginLeft:16,padding:8}}/>
                    </div>
                    <div>
                        <p className={style.content}>{content}</p>
                    </div>
                    <ReactionBar/>
                </div>
            </div>

        </div>
    )
}
