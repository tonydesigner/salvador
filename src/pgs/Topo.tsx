import { Menu } from "./Menu";
import Logo from '../img/logo.png'
import { Link } from "react-router-dom"

export function Topo(){
    return(
        <div className="topo margin">
            <div className="Logo">
                <Link to='/'>
                    <img src={Logo} />
                </Link>

            </div>
            <Menu/>
        </div>
    )
}