import { Link } from "react-router-dom";


export default function Navbar(){
    return (
        <div className="navbar">
            <div><i className="fa-solid fa-cross fa-3x"></i></div>
            <Link to='/' className="link"><i className="fa-solid fa-home fa-2x"></i> </Link>
            <Link to='/informations'className="link"><i className="fa-solid fa-folder fa-2x"></i></Link>
            <Link to='/statistique' className="link"><i className="fa-solid fa-chart-simple fa-2x"></i></Link>
            <Link to='/reglages' className="link"><i className="fa-solid fa-gear fa-2x"></i></Link>
            <Link to='/profil' className="link"><i className="fa-solid fa-user fa-2x"></i></Link>
            {/* <Link to='/logout'><i className="fa-solid fa-right-from-bracket fa-2x"></i></Link> */}
        </div>
    )
}