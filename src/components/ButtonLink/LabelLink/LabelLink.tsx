'use client'
import {usePathname} from "next/navigation";

interface LabelLinkProps {
    title: string;
    link: string;
}
export default function LabelLink({title,link}: LabelLinkProps) {
    const pathname = usePathname()
    return (
        <p style={{fontWeight: pathname?.includes(link) ? 700 : 400}}>{title}</p>
    )
}