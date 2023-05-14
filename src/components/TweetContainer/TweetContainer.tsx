import {getServerSession} from "next-auth";
import {authOptions} from "@/pages/api/auth/[...nextauth]";
import Tweet from "@/components/Tweet/Tweet";
import prisma from "@/lib/prisma";
import {Post} from "@prisma/client";

const getTweets = async () => {
    return prisma.post.findMany();
}

export default async function TweetContainer(){
    const {user} = await getServerSession(authOptions)

    const data: Post[] = await getTweets()

    console.log(data)

    return(
        <div>
            {
                data.map(({id,authorId,content,image,createdAt}:any) =>
                    <Tweet
                        key={id+ '-tweet-'+ authorId}
                        id={id}
                        content={content}
                        createdAt={createdAt}
                        author={{id:authorId, name:user?.name, username:user?.username, avatar: user?.image}}
                        retweet={0}
                        favorite={0}
                        comments={0}/>
                )
            }
        </div>
    )
}
