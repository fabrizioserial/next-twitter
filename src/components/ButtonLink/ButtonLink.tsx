import {IconType} from "@/utils/type";
import Link from "next/link";
import {renderIcon} from "@/utils/utils";
import styles from './ButtonLink.module.scss'
import LabelLink from "@/components/ButtonLink/LabelLink/LabelLink";

interface ButtonLinkProps {
    title?: string;
    icon?: IconType;
    link: string;
}

export default function ButtonLink({title, icon,link}: ButtonLinkProps) {
    return(
        <Link href={link} className={styles.buttonLink}>
            {
                icon && renderIcon(icon,{width: '26.25px', height: '26.25px'})
            }
            {title && <LabelLink link={link} title={title}/>}
        </Link>
    )
}