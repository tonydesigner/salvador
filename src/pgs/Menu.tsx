import { Link } from "react-router-dom";

export function Menu(){
    return(
        <div className="menu center">
           <Link to="/" className="link">Home</Link>
           <Link to="/comidas" className="link">Gastronomia</Link>
           <Link to="/servico" className="link">Serviços</Link>
           <Link to="/prod" className="link">Pordutos</Link>
        </div>
    )
}