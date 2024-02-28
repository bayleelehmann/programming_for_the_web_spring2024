import { NavItem } from "/NavItem";
function Nav({navArray}) {
    const { navArray } = props;
    console.log("nav array", navArray);
    return (
        <>
        <NavItem label={navArray[0].label}/>
        <NavItem label={navArray[1].label}/>
        <NavItem label={navArray[2].label}/>
        </>
    )
}

export default Nav;