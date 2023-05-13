import style from './ReactionBar.module.scss'
import {CommentIcon} from "@/assets/CommentIcon";
import {RetweetIcon} from "@/assets/RetweetIcon";

interface ReactionBarProps {
    comments?: number,
    retweet?: number,
    favorite?: number
}

export default function ReactionBar({comments=0, retweet=0, favorite=0}:ReactionBarProps){
    return(
        <div className={style.container}>
            <div className={style.reactionContainer}>
                <div className={`${style.iconContainer} ${style.iconContainerComment}`}>
                    <CommentIcon size={18} className={`${style.iconComment} ${style.iconDefault}`}/>
                </div>
                <p className={style.reactionText}>
                    {comments}
                </p>
            </div>
            <div className={style.reactionContainer}>
                <div className={`${style.iconContainer} ${style.iconContainerRetweet}`}>
                    <RetweetIcon size={18} className={`${style.iconRetweet} ${style.iconDefault}`}/>
                </div>
                <p className={style.reactionText}>
                    {retweet}
                </p>
            </div>
        </div>
    )
}
