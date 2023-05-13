import {IconType} from "@/utils/type";
import HomeIcon from "@/assets/HomeIcon";
import ExplorerIcon from "@/assets/ExplorerIcon";
import NotificationIcon from "@/assets/NotificationIcon";
import MessageIcon from "@/assets/MessageIcon";
import ProfileIcon from "@/assets/ProfileIcon";
import SettingsIcon from "@/assets/SettingsIcon";
import LogoIcon from "@/assets/LogoIcon";
import BookmarkIcon from "@/assets/BookmarkIcon";
import ListIcon from "@/assets/ListIcon";

export const renderIcon = (icon: IconType, options?:{width: number | string, height: number | string}) => {
    let iconRender = null
    switch (icon){
        case IconType.HOME:
            iconRender = <HomeIcon/>;
            break
        case IconType.EXPLORE:
            iconRender = <ExplorerIcon/>;
            break
        case IconType.NOTIFICATION:
            iconRender = <NotificationIcon/>;
            break
        case IconType.MESSAGE:
            iconRender = <MessageIcon/>;
            break
        case IconType.PROFILE:
            iconRender = <ProfileIcon/>;
            break
        case IconType.SETTINGS:
            iconRender = <SettingsIcon/>;
            break
        case IconType.BOOKMARK:
            iconRender = <BookmarkIcon/>;
            break
        case IconType.LIST:
            iconRender = <ListIcon/>;
            break
        case IconType.LOGO:
            iconRender = <LogoIcon/>;
            break
    }

    return (
        <div style={{width: options?.width ?? '20px', height: options?.height ?? '20px', display:'flex', alignItems:'center', justifyContent: 'center'}}>
            {iconRender}
        </div>
    )
}