import "./css/mainForm.css"
import React from "react";
const mainForm =() =>{

    return (
        <div>
            <div className="section section1" id="section1">
                <div className="container searchbox">
                    <div className="searchgroup input-group">
                        <input placeholder="Search" className="search-input rounded-pill form-control" type="search"/>
                        <span className="my-auto">
                    <button type="button" className="searchbtn btn btn-white "><i className="bi bi-search"></i></button>
                </span>
                        <div className="bestmain">
                            인기순위 🔽
                        </div>
                    </div>

                </div>
                <nav>
                    <ul className="list-wrap">
                        <li className="dropdown-wrap">
                            <button className="dropdown-btn">List 1</button>
                            <ul className="dropdown">
                                <li><a href="" className="dropdown-item">menu 1</a></li>
                                <li><a href="" className="dropdown-item">menu 2</a></li>
                                <li><a href="" className="dropdown-item">menu 3</a></li>
                                <li><a href="" className="dropdown-item">menu 4</a></li>
                            </ul>
                        </li>
                    </ul>
                </nav>


            </div>

            <div className="section section2" id="section2">

                <section className="banner">
                    <div className="container title">
                        <div className="p-3 text-center">
                            <h1 className="banner-title">Sample Homepage</h1>
                        </div>
                    </div>
                </section>


                <div className="services">
                    <div className="service">
                        <img src="#" alt="Service 1"/>
                        <p>대출/예약</p>
                    </div>
                    <div className="service">
                        <img src="#" alt="Service 2"/>
                        <p>이용안내</p>
                    </div>
                    <div className="service">
                        <img src="#" alt="Service 3"/>
                        <p>프로그램 예약</p>
                    </div>
                    <div className="service">
                        <img src="#" alt="Service 4"/>
                        <p>중고거래</p>
                    </div>
                </div>
                <div className="info-section">
                    <div className="info-box">
                        <h3>책바다</h3>
                        <p>공공도서관 서비스 안내</p>
                        <p>참여 도서관: 1,307개</p>
                    </div>
                    <div className="info-box">
                        <h3>책이음</h3>
                        <p>도서관 회원 서비스 안내</p>
                        <p>참여 도서관: 2,721개</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default mainForm;