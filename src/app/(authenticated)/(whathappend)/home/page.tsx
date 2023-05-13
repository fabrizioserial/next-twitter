import HeaderHome from "@/components/HeaderHome/HeaderHome";
import style from './page.module.scss'
import TextEditorHeaderContainer from "@/components/TextEditorHeaderContainer/TextEditorHeaderContainer";
import TweetContainer from "@/components/TweetContainer/TweetContainer";

export default async function Page() {
    return(
        <div style={{height: '100vh', maxWidth:"600px",width:"100%", borderRight: '1px solid #38444DFF', position: 'relative'}}>
            <HeaderHome/>
            <div className={style.contentContainer}>
                <TextEditorHeaderContainer/>
                { /* @ts-ignore */ }
                <TweetContainer/>
            </div>


        </div>
    )
}
