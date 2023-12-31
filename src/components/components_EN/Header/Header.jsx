import "./Header.css"

const Header = () => {
    return (
        <header id="header" className="navbar navbar-expand-lg navbar-end navbar-absolute-top navbar-light navbar-show-hide bg-white">
            <div className="container-xl">
                <nav className="navbar-nav-wrap">
                    <a className="navbar-brand" href="#">
                        <img className="navbar-brand-logo" src="/public/imgs/Header/logo.svg" alt="Infinix Holding Group" />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSite" aria-controls="navbarSite" aria-expanded="true" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="navbar-collapse collapse" id="navbarSite">
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                                <a className="nav-link scrollto" href="#home">Marketplace</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link scrollto" href="#about-us">Collections</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link scrollto" href="#holding">Community</a>
                            </li>
                            <li className="nav-item">
                                <button className="nav-link scrollto" href="">Login</button>
                            </li>
                            </ul>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;