export enum IconType {
    HOME='HOME',
    EXPLORE='EXPLORE',
    NOTIFICATION='NOTIFICATION',
    MESSAGE='MESSAGE',
    PROFILE='PROFILE',
    SETTINGS='SETTINGS',
    BOOKMARK='BOOKMARK',
    LIST='LIST',
    LOGO='LOGO',
}

export type NavbarItem = {
    icon: IconType;
    title: string;
    link: string;
}

enum TweetStatusType {
    RETWEETED = 'RETWEETED',
    LIKED = 'LIKED',
    REPLIED = 'REPLIED',
    MAYBE_LIKED = 'MAYBE_LIKED',
}

export type TweetType = {
    id: string
    content: string
    picture?: string
    createdAt: string
    author: {
        id: string
        username: string
        name: string
        avatar: string
    }
    retweet: number
    favorite: number
    comments: number
    status?: {
        type: TweetStatusType,
        username?: string,
    }
}

export enum InputType {
    TEXT = 'text',
    BUTTON = 'button',
}

export type SchemaType = {
    [key: string]: {
        type: InputType
        name: string
        value: string
        handleClick?: () => void
    }
}
