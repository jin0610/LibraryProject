import "./css/header.css";

const Header = () => {
    
    return(
        <header class="mb-1">
            <nav class="navbar navbar-expand-lg fixed-top">
                <div class="container">
                    {/* title */}
                    <a href="/" class="navbar-brand header-title">Sample Hompage</a>
                    <button class="header-nav-button navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbar01" aria-controls="navbar01" aria-expanded="true" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="header-menu navbar-collapse collapse " id="navbar01">
                        <ul class="navbar-nav me-auto">
                          <li class="header-menu-item nav-item">
                            <a class="nav-link" href="/sample">Sample</a>
                          </li>
                          <li class="header-menu-item nav-item">
                            <a class="nav-link" href="/notice">Notice</a>
                          </li>
                          <li class="header-menu-item nav-item">
                            <a class="nav-link" href="#">Login</a>
                          </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header;