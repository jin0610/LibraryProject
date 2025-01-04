import React from "react";
import "./css/header.css";

const header = () => {
    
    return(
        <header class="mb-1">
            <nav class="navbar navbar-expand-lg fixed-top">
                <div class="container">
                    {/* <제목 */}
                    <a href="/sample.html" class="navbar-brand header-title">Sample Hompage</a>
                </div>
            </nav>
        </header>
    )
}

export default header;