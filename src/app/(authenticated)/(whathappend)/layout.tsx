
interface LayoutProps {
    children: React.ReactNode;
}
export default async function Layout({children}: LayoutProps) {
    return(
        <div style={{display:'flex',flexDirection:'row',minWidth: '990px', maxWidth:'990px', justifyContent:'space-between'}}>
            {children}
            <div style={{width: '350px', backgroundColor:'green'}}>

            </div>
        </div>
    )
}
