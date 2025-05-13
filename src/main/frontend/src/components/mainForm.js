import "./css/mainForm.css";
import React from "react";
import { Button, Row, Col } from "react-bootstrap";
import {Link} from "react-router-dom"; // 부트스트랩 사용

const MainForm = () => {
    return (
        <div>
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
                        <div className="bestmain"> 인기순위 🔽</div>
                    </div>
                </div>

                <nav className="nav-container">
                    <ul className="nav-menu">
                        <li>
                            <a href="#guid">도서관 안내</a>
                        </li>
                        <li>
                            <a href="#searchBook">자료검색</a>
                        </li>
                        <li>
                            <a href="#recommendBook">추천도서</a>
                        </li>
                        <li>
                            <a href="#newBook">신상도서</a>
                        </li>
                        <li>중고서점</li>
                        <li>행사</li>
                        <li>나의 공간</li>
                    </ul>
                </nav>
            </div>

            {/* 배너 섹션 */}
            <div className="section section2" id="section2">
                <section className="banner">
                    <div className="container title">
                        <div className="p-3 text-center">
                            <h1 className="banner-title">Sample Homepage</h1>
                        </div>
                    </div>
                </section>

                {/* 서비스 섹션 */}
                <div className="services">
                    <div className="service">
                        <p>대출/예약</p>
                    </div>
                    <div className="service">
                        <p>이용안내</p>
                    </div>
                    <div className="service">
                        <p>프로그램 예약</p>
                    </div>
                    <div className="service">
                        <p>중고거래</p>
                    </div>
                </div>
            </div>

            {/* 정보 박스 섹션 */}
            <div className="container mt-4">
                <Row className="mb-4">
                    {/* 왼쪽에 책바다, 책이음 정보 박스 */}
                    <Col md={8} className="d-flex flex-row">
                        <div className="info-box bookada">
                            <h3>책바다</h3>
                            <p>안녕하세요. 여기에 책바다 정보가 들어갑니다.</p>
                            <p>책바다 참여도서관: 1,307개</p>
                            <Button variant="primary" className="info-btn">
                                도서관 한방에 보기
                            </Button>
                        </div>

                        <div className="info-box bookiem ml-4">
                            <h3>책이음</h3>
                            <p>여기에 책이음 정보가 들어갑니다.</p>
                            <p>책이음 참여도서관: 2,721개</p>
                            <Button variant="primary" className="info-btn">
                                도서관 한방에 보기
                            </Button>
                        </div>
                    </Col>

                    {/* 오른쪽에 회색 버튼 */}
                    <Col md={4}>
                        <div className="right-buttons">
                            {/* 공지사항 버튼을 Link로 변경하여 페이지 이동 */}
                            <Link to="/notice">
                                <Button variant="secondary" className="btn-gray mb-2">
                                    공지사항
                                </Button>
                            </Link>
                            <Button variant="secondary" className="btn-gray mb-2">
                                프로그램 신청
                            </Button>
                            <Button variant="secondary" className="btn-gray mb-2">
                                도서관 이용 통계
                            </Button>
                            <Button variant="secondary" className="btn-gray mb-2">
                                추천/신상 도서
                            </Button>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default MainForm;
