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
                <nav className="nav-container">
                <ul className="nav-menu">
                    <li >도서관 안내</li>
                    <li>자료검색</li>
                    <li>추천도서</li>
                    <li>신상도서</li>
                    <li>중고서점</li>
                    <li>행사</li>
                    <li>나의 공간</li>

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
            </div>
        </div>
    )
}

export default mainForm;