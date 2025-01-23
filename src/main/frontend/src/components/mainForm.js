import "./css/mainForm.css"
const mainForm =() =>{

    return (
        <div>
            <div className="section section1" id="section1">
                <h1>동그라미 도서관</h1>
                <div className="scroll-down"
                     onClick="document.getElementById('section2').scrollIntoView({ behavior: 'smooth' });">
                    도서관으로 이동 ⬇
                </div>
            </div>
            <div className="section section2" id="section2">
                <header>
                    <div className="logo">
                        <img src="#" alt="Logo"/>
                        <span>동그라미 도서관</span>
                    </div>
                    <nav>
                        <a href="#">도서관 안내</a>
                        <a href="#">자료 검색</a>
                        <a href="#">추천 도서</a>
                        <a href="#">신상 도서</a>
                        <a href="#">중고서점</a>
                        <a href="#">행사</a>
                        <a href="#">나의 공간</a>
                    </nav>
                </header>
                <div className="banner">
                    <img src="#" alt="도서관 배너"/>
                </div>
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