import "./css/header.css";

const Header = () => {
    
    return(
        <header className="mb-1">
            <nav className="navbar navbar-expand-lg fixed-top">
                <div className="container">
                    {/* title */}
                    <div className="logo">
                        <div>
                            <img className="logoimg" src="/logoimg.png" alt="Logo"/>
                            <a href="/" className="navbar-brand header-title">동그라미 도서관</a>
                        </div>
                        <button class="header-nav-button navbar-toggler" type="button" data-bs-toggle="collapse"
                                data-bs-target="#navbar01" aria-controls="navbar01" aria-expanded="true"
                                aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    </div>
                    <div className="header-menu navbar-collapse collapse " id="navbar01">
                        <ul className="navbar-nav me-auto">
                            <li className="header-menu-item nav-item">
                                <a className="nav-link" href="/sample">Sample</a>
                            </li>
                            <li className="header-menu-item nav-item">
                                <a className="nav-link" href="/chat">Chat</a>
                            </li>
                            <li className="header-menu-item nav-item">
                                <a className="nav-link" href="/notice_list">Notice</a>
                            </li>
                            <li className="header-menu-item nav-item">
                                <a className="nav-link" href="#">Login</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header;