import {getServerSession} from "next-auth";
import {authOptions} from "@/pages/api/auth/[...nextauth]";
import Tweet from "@/components/Tweet/Tweet";

const getTweets = async (token:string) => {
    const response = await fetch('http://localhost:8080/api/post',{
        method: 'GET',
        cache: 'no-cache',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token,
        }
    })
    if (response.status === 401) {
        return {error: 'Unauthorized'}
    }
    return response.json()
}

export default async function TweetContainer(){
    const {user} = await getServerSession(authOptions)

    const data = await getTweets(user?.token ?? "")

    console.log(data)

    return(
        <div>
            {
                data.map(({id,authorId,author,content,image,createdAt}:any) =>
                    <Tweet
                        key={id+ '-tweet-'+ authorId}
                        id={id}
                        content={content}
                        createdAt={createdAt}
                        author={author}
                        retweet={0}
                        favorite={0}
                        comments={0}/>
                )
            }
        </div>
    )
}
