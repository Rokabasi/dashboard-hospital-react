export default function Accueil (){
    return (
        <div className="main">
            <header className="header">
                <div className="input-icons">
                <i className="fa-solid fa-magnifying-glass icon"></i>
                    <input className="input-field" type="text" placeholder="Search"/>
                </div>
                <button className="alarm"><i className="fa-solid fa-bell btn-alarm"></i></button>
                <button className="btn-week">This Week</button>
            </header>
            <div className="first-content">
                <h1>Hello, <span>Emma Shelton</span></h1>
                <h3>Have a nice day and don't forget to take care of your health!</h3>
                <h2>Read more > </h2>
            </div>
            <div className="second-content">
                <div className="card-content">
                    <div className="card-header">
                        <img alt=""/>
                        <h2 className="card-title1">102 bpm</h2>
                    </div>
                    <h2 className="card-main-title">Heart rate</h2>
                    <p>Pulse is the most important physiological indicator</p>
                </div>
                <div className="card-content">
                    <div className="card-header">
                        <img alt=""/>
                        <h2>102 bpm</h2>
                    </div>
                    <h2>Heart rate</h2>
                    <p>Pulse is the most important physiological indicator</p>
                </div>
                <div className="card-content">
                    <div className="card-header">
                        <img alt=""/>
                        <h2>102 bpm</h2>
                    </div>
                    <h2>Heart rate</h2>
                    <p>Pulse is the most important physiological indicator</p>
                </div>
                 <div className="card-content">
                    <div className="card-header">
                        <img alt=""/>
                        <h2>102 bpm</h2>
                    </div>
                    <h2>Heart rate</h2>
                    <p>Pulse is the most important physiological indicator</p>
                </div>
            </div>
        </div>
    )
}