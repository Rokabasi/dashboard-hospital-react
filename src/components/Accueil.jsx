export default function Accueil (){
    return (
        <div className="main">
            <header className="header">
                <div className="input-icons">
                <i class="fa-solid fa-magnifying-glass icon"></i>
                    <input class="input-field" type="text" placeholder="Search"/>
                </div>
                <button className="alarm"><i className="fa-solid fa-bell btn-alarm"></i></button>
                <button>This Week</button>
            </header>
        </div>
    )
}