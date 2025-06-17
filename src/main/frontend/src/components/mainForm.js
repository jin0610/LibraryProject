import "./css/mainForm.css";
import Header from "./header";
import React from "react";
import { FaBook, FaInfoCircle, FaCalendarAlt, FaExchangeAlt } from 'react-icons/fa';

const MainForm = () => {
    return (
        <div>
            <Header/>
            {/* 검색 섹션 */}
            <div className="section section1" id="section1">
                <div className="container searchbox">
                    <div className="searchgroup input-group">
                        <input
                            placeholder="Search"
                            className="search-input rounded-pill form-control"
                            type="search"
                        />
                        <span className="my-auto">
              <button type="button" className="searchbtn btn btn-white">
                <i className="bi bi-search"></i>
              </button>
            </span>
                        {/* 검색 섹션 끝 */}
                        <div className="ranking"> 인기 검색어 🔽</div>
                        {/*나중에 api로 띄울 거*/}
                    </div>
                </div>


                {/* 검색 섹션 끝 */}
                {/* 네비게이션 */}
                <div className="nav-sub">
                    <nav className="navbar navbar-expand-lg">
                        {/* 도서관 안내 */}
                        <div className="dropdown me-4">
                            <button
                                className="btn dropdown-dark-link-hover-color dropdown-toggle"
                                type="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                도서관 안내
                            </button>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">도서관 소개</a></li>
                                <li><a className="dropdown-item" href="#">이용안내</a></li>
                                <li><a className="dropdown-item" href="#">자주 묻는 질문</a></li>
                            </ul>
                        </div>

                        {/* 자료 검색 */}
                        <div className="dropdown me-4">
                            <button
                                className="btn dropdown-toggle"
                                type="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                자료 검색
                            </button>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">도서 검색</a></li>
                                <li><a className="dropdown-item" href="#">전자책 검색</a></li>
                                <li><a className="dropdown-item" href="#">DVD / 비도서 자료</a></li>
                            </ul>
                        </div>

                        {/* 추천 도서 */}
                        <div className="dropdown me-4">
                            <button
                                className="btn dropdown-toggle"
                                type="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                추천 도서
                            </button>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">사서 추천</a></li>
                                <li><a className="dropdown-item" href="#">이용자 리뷰 TOP</a></li>
                                <li><a className="dropdown-item" href="#">연령별 추천</a></li>
                            </ul>
                        </div>

                        {/* 신상도서 */}
                        <div className="dropdown me-4">
                            <button
                                className="btn dropdown-toggle"
                                type="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                신상 도서
                            </button>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">이번주 입고</a></li>
                                <li><a className="dropdown-item" href="#">이 달의 신간</a></li>
                                <li><a className="dropdown-item" href="#">예약 인기 도서</a></li>
                            </ul>
                        </div>

                        {/* 중고서점 */}
                        <div className="dropdown me-4">
                            <button
                                className="btn dropdown-toggle"
                                type="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                중고 서점
                            </button>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">중고 도서 구매</a></li>
                                <li><a className="dropdown-item" href="#">중고 도서 판매</a></li>
                                <li><a className="dropdown-item" href="#">중고 인기 순위</a></li>
                            </ul>
                        </div>

                        {/* 행사 */}
                        <div className="dropdown me-4">
                            <button
                                className="btn dropdown-toggle"
                                type="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                행사
                            </button>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">진행 중 이벤트</a></li>
                                <li><a className="dropdown-item" href="#">예정 프로그램</a></li>
                                <li><a className="dropdown-item" href="#">도서관 프로그램</a></li>
                            </ul>
                        </div>

                        {/* 나의 공간 */}
                        <div className="dropdown me-4">
                            <button
                                className="btn dropdown-toggle"
                                type="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                나의 공간
                            </button>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">대출 현황</a></li>
                                <li><a className="dropdown-item" href="#">예약도서</a></li>
                                <li><a className="dropdown-item" href="#">내 서재</a></li>
                                <li><a className="dropdown-item" href="#">회원정보 수정</a></li>
                            </ul>
                        </div>
                    </nav>
                </div>
                {/* 네비게이션 끝 */}
                {/* 배너 섹션 */}
                <div className="section section2" id="section2">
                    <section className="banner">
                        <div className="container title">
                            <div className="p-3 text-center">
                                <h1 className="banner-title">Sample Homepage</h1>
                            </div>
                        </div>
                    </section>
                </div>

            </div>
            <div className="down">
                <div className="main_service">
                    <p className="main_service_ptag">주요 서비스 바로가기</p>

                    <div className="main_item_service">
                    <button className="service-button">
                        {/* <i class="bi bi-book"></i> */}
                        <FaBook className="icon"/>
                        <span>대출/예약</span>
                    </button>

                        <button className="service-button">
                            <FaInfoCircle className="icon"/>
                            <span> 이용안내</span>
                        </button>

                        <button className="service-button">
                            <FaCalendarAlt className="icon"/>
                            <span>  프로그램 <br/>예약</span>
                        </button>

                        <button className="service-button">
                            <FaExchangeAlt className="icon"/>
                            <span> 중고거래</span>
                        </button>
                    </div>
                </div>
            <div className="s_service">
                <div className="public_user_service">
                    <p className="public_user_service_ptag ">공공도서관 이용자 서비스</p>
                </div>
                <div className="notice_program_total_new_lib ">
                    <ul className="justify-content-end nav nav-tabs" id="myTab" role="tablist">
                        <li className="nav-item" role="presentation">
                            <button className="nav-link active" id="home-tab" data-bs-toggle="tab"
                                    data-bs-target="#home-tab-pane" type="button" role="tab"
                                    aria-controls="home-tab-pane" aria-selected="true">Home
                            </button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link" id="profile-tab" data-bs-toggle="tab"
                                    data-bs-target="#profile-tab-pane" type="button" role="tab"
                                    aria-controls="profile-tab-pane" aria-selected="false">Profile
                            </button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link" id="contact-tab" data-bs-toggle="tab"
                                    data-bs-target="#contact-tab-pane" type="button" role="tab"
                                    aria-controls="contact-tab-pane" aria-selected="false">Contact
                            </button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link" id="disabled-tab" data-bs-toggle="tab"
                                    data-bs-target="#disabled-tab-pane" type="button" role="tab"
                                    aria-controls="disabled-tab-pane" aria-selected="false" disabled>Disabled
                            </button>
                        </li>
                    </ul>
                    <div className="tab-content" id="myTabContent">
                        <div className="tab-pane fade show active" id="home-tab-pane" role="tabpanel"
                             aria-labelledby="home-tab" tabIndex="0">dfsfsdf
                        </div>
                        <div className="tab-pane fade" id="profile-tab-pane" role="tabpanel"
                             aria-labelledby="profile-tab" tabIndex="0">...
                        </div>
                        <div className="tab-pane fade" id="contact-tab-pane" role="tabpanel"
                             aria-labelledby="contact-tab" tabIndex="0">...
                        </div>
                        <div className="tab-pane fade" id="disabled-tab-pane" role="tabpanel"
                             aria-labelledby="disabled-tab" tabIndex="0">...
                        </div>
                    </div>
                </div>
            </div>
        </div>
</div>
)
    ;
};

export default MainForm;
