import "./css/header.css";
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate();
    const isLoggedIn = !!localStorage.getItem("token");

    const handleLogout = () => {
        localStorage.removeItem("token");
        alert("로그아웃 되었습니다.");
        navigate("/");
    };
    
    return(
        <header class="mb-1">
            <nav class="navbar navbar-expand-lg fixed-top">
                <div class="container">
                    {/* title */}
                    <div className="logo ">
                        <img className="logoimg" src="/logoimg.png" alt="Logo"/>


                        <a href="/" class="navbar-brand header-title">동그라미 도서관</a>
                        <button class="header-nav-button navbar-toggler " type="button" data-bs-toggle="collapse"
                                data-bs-target="#navbar01" aria-controls="navbar01" aria-expanded="true"
                                aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                    </div>
                    <div class="header-menu navbar-collapse collapse " id="navbar01">
                        <ul class="navbar-nav me-auto">
                            <li class="header-menu-item nav-item">
                                <a class="nav-link" href="/sample">Sample</a>
                            </li>
                            <li class="header-menu-item nav-item">
                                <a class="nav-link" href="/notice">Notice</a>
                            </li>
                            <li className="header-menu-item nav-item">
                                {isLoggedIn ? (
                                    <a className="nav-link" href="javascript:void(0);" onClick={handleLogout}>Logout</a>
                                ) : (
                                    <a className="nav-link" href="/auth/login">Login</a>
                                )}
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header;
