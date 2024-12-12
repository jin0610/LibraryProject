import React from "react";
import "./css/header.css";

const Header = () => {
    
    return(
        <div class="navbar bg-dark fixed-top">
            <div class="container">
                {/* main-logo */}
                <a class="navbar-brand"  href="/">동그라미</a>
                <button type="button" class="btn btn-danger">danger</button>
            </div>
        </div>
    )
}

export default Header;