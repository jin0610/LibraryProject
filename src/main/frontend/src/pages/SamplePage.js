import React from "react";
import Header from "../components/header";
import PageBlock from "../components/PageBlock";
import NoticeForm from "../components/noticeForm";


const SamplePage = () =>{

    return(
        <html>
        <body> 
        {/* <!-- Start Header --> */}
        {/* <!-- header.css --> */}
        <header class="mb-1">
            <nav class="navbar navbar-expand-lg fixed-top">
                <div class="container">
                    {/* <!--제목--> */}
                    <a href="/sample.html" class="navbar-brand header-title">Sample Hompage</a>
                </div>
            </nav>
        </header>
        {/* <!-- End Header --> */}

        {/* <!-- Start Content --> */}
        <main>
            {/* <!-- Start Banner --> */}
            {/* <!-- banner.css --> */}
            <section class="banner">
                <div class="container title">
                    <div class="p-3 text-center">
                        <h1 class="banner-title">Sample Homepage</h1>
                    </div>
                </div>
            </section>
            {/* <!-- End Banner --> */}

            {/* <!-- Start BookList(Card) --> */}
            <div class="mt-lg-12 mb-lg-14 mb-8">
                <div class="container">
                    <div class="row">
                        {/* <!-- Sidebar --> */}
                        {/* <!-- bookList-sidebar.css --> */}
                        <aside class="col-xl-3 col-md-12">
                            <div class="g-4 card sidebar-card">
                                <div class="card-header justify-content-center" data-control="checkbox-dropdown">
                                    <a href="#" class="nav-link my-1" aria-expanded="false" role="button" tabindex="0">
                                        <span class="">분야별</span>
                                    </a>
                                </div>
                                <div class="dropdown-list sidebar-sub-list">
                                    <a href="#" data-toggle="check-all" class="dropdown-option check-all">
                                        Check All
                                    </a>
                                    <label class="dropdown-option">
                                        <input type="checkbox" name="dropdown-group" value=""/> 종합
                                    </label>
                                    <label class="dropdown-option ">
                                        <input type="checkbox" name="dropdown-group" value=""/> 건강/취미
                                    </label>
                                    <label class="dropdown-option">
                                        <input type="checkbox" name="dropdown-group" value=""/> 경제경영
                                    </label>
                                    <label class="dropdown-option">
                                        <input type="checkbox" name="dropdown-group" value=""/> 고전
                                    </label>
                                    <label class="dropdown-option">
                                        <input type="checkbox" name="dropdown-group" value=""/> 과학
                                    </label>
                                    <label class="dropdown-option">
                                        <input type="checkbox" name="dropdown-group" value=""/> 대학교재/전문서적
                                    </label>
                                    <label class="dropdown-option">
                                        <input type="checkbox" name="dropdown-group" value=""/> 소설/시/희곡
                                    </label>
                                    <label class="dropdown-option">
                                        <input type="checkbox" name="dropdown-group" value=""/> 사전/기타
                                    </label>
                                </div>
                                <div class="card-header justify-content-center" data-control="checkbox-dropdown">
                                    <a href="#" class="nav-link my-1" aria-expanded="false" role="button" tabindex="0">
                                        <span class="">상품별</span>
                                    </a>
                                </div>
                                <div class="dropdown-list sidebar-sub-list">
                                    <a href="#" data-toggle="check-all" class="dropdown-option check-all">
                                        Check All
                                    </a>
                                    <label class="dropdown-option">
                                        <input type="checkbox" name="dropdown-group" value=""/> 국내도서
                                    </label>
                                    <label class="dropdown-option">
                                        <input type="checkbox" name="dropdown-group" value=""/> 외국도서
                                    </label>
                                    <label class="dropdown-option">
                                        <input type="checkbox" name="dropdown-group" value=""/> eBook
                                    </label>
                                    <label class="dropdown-option">
                                        <input type="checkbox" name="dropdown-group" value=""/> 음반/DVD/블루레이
                                    </label>
                                </div>
                            </div>
                        </aside>


                        {/* <!-- BookList-Card --> */}
                        {/* <!-- bookList-card.css --> */}
                        <section class="col-xl-9 col-md-12">
                            <div class="g-4 mt-2 row row-cols-xl-3 row-col-lg-3 row-cols-md-2 row-cols-2">
                                {/* <!-- book1 --> */}
                                <div class="col book-card-row">
                                    <div class="card h-100">
                                        {/* <!-- book Imag/ --> */}
                                        <div class="text-center position-relative booklist-card-image">
                                            <div class=" mx-3 position-absolute top-0 start-0">
                                                <span class="badge bg-success">판매중</span>
                                            </div>
                                            <a href="#">
                                                <img src="https://library.kbu.ac.kr/libeka/fileview/f6ec917f-d09b-4f09-9061-9fe6d8ab25ee.JPG" alt="" class="card-img">
                                            </a>
                                        </div>
                                        {/* <!-- book Info --> */}
                                        <div class="p-3">
                                            <h2 class="fs-6 text-decoration-none">
                                                <a href="/book1" class="text-decoration-none text-inherit">
                                                    우연은 비켜 가지 않는다
                                                </a>
                                            </h2>
                                            <div class="text-small">
                                                <a href="#!" class="text-decoration-none text-muted"><samll>줄리언 반스 | 다산책방</samll></a>
                                            </div>
                                            <div class="d-flex justify-content-between align-items-center ">
                                                <div>
                                                    <span class="text-dark">
                                                        15,750원
                                                    </span>
                                                </div>
                                                <div>
                                                    <a role="button" tabindex="0" href="#!" class="btn btn-primary btn-sm p-2 pb-1">
                                                        <span class="material-symbols-outlined">
                                                            favorite
                                                        </span>
                                                    </a>
                                                    <a role="button" tabindex="0" href="#!" class="btn btn-primary btn-sm p-2 pb-1">
                                                        <span class="material-symbols-outlined">
                                                            chat
                                                        </span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- book2 --> */}
                                <div class="col book-card-row">
                                    <div class="card h-100">
                                        {/* <!-- book Image --> */}
                                        <div class="text-center position-relative booklist-card-image">
                                            <div class=" mx-3 position-absolute top-0 start-0">
                                                <span class="badge bg-success">판매중</span>
                                            </div>
                                            <a href="#">
                                                <img src="https://library.kbu.ac.kr/libeka/fileview/f6ec917f-d09b-4f09-9061-9fe6d8ab25ee.JPG" alt="" class="card-img">
                                            </a>
                                        </div>
                                        {/* <!-- book Info --> */}
                                        <div class="p-3">
                                            <h2 class="fs-6 text-decoration-none">
                                                <a href="/book1" class="text-decoration-none text-inherit ">
                                                    오늘 밤, 세계에서 이 사랑이 사라진다 해도
                                                </a>
                                            </h2>
                                            <div class="text-small">
                                                <a href="#!" class="text-decoration-none text-muted"><samll>이치조 미사키 | 모모</samll></a>
                                            </div>
                                            <div class="d-flex justify-content-between align-items-center">
                                                <div>
                                                    <span class="text-dark">
                                                        20,000원
                                                    </span>
                                                </div>
                                                <div>
                                                    <a role="button" tabindex="0" href="#!" class="btn btn-primary btn-sm p-2 pb-1">
                                                        <span class="material-symbols-outlined">
                                                            favorite
                                                        </span>
                                                    </a>
                                                    <a role="button" tabindex="0" href="#!" class="btn btn-primary btn-sm p-2 pb-1">
                                                        <span class="material-symbols-outlined">
                                                            chat
                                                        </span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- pagination --> */}
                            <div class="mt-5 row">
                                <div class="col">
                                    <div class=" d-md-flex justify-content-between align-items-center">
                                        <ul class="pagination mt-2 mt-md-0" role="navigation" aria-label="Pagination">
                                            <li class="previous disabled">
                                                <a class="page-link mx-1 rounded " tabindex="-1" role="button" aria-disabled="true" aria-label="Previous page" rel="prev">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="14px" height="14px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                                    <polyline points="15 18 9 12 15 6"></polyline>
                                                </svg>
                                                </a>
                                            </li>
                                            <li class="page-item active">
                                                <a rel="canonical" role="button" class="page-link mx-1 rounded" tabindex="-1" aria-label="Page 1 is your current page" aria-current="page">1</a>
                                            </li>
                                            <li class="page-item">
                                                <a rel="next" role="button" class="page-link mx-1 rounded" tabindex="0" aria-label="Page 2">2</a>
                                            </li>
                                            <li class="page-item">
                                                <a role="button" class="page-link mx-1 rounded" tabindex="0" aria-label="Page 3">3</a>
                                            </li>
                                            <li class="page-item">
                                                <a role="button" class="page-link mx-1 rounded" tabindex="0" aria-label="Page 4">4</a>
                                            </li>
                                            <li class="page-item">
                                                <a role="button" class="page-link mx-1 rounded" tabindex="0" aria-label="Page 5">5</a>
                                            </li>
                                            <li class="next">
                                                <a class="page-link mx-1 rounded" tabindex="0" role="button" aria-disabled="false" aria-label="Next page" rel="next">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="14px" height="14px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline>
                                                    </svg>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
            {/* <!-- End BookList(Card) --> */}

            {/* <!-- Start BookList(List) --> */}
             {/* <!-- CSS : BookList(List) --> */}
            <div class="mt-lg-12 mb-lg-14 mb-8">
                <div class="container">
                    <div class="row">
                        {/* <!-- Sidebar --> */}
                        {/* <!-- bookList-sidebar.css --> */}
                        <aside class="col-xl-3 col-md-12">
                            <div class="g-4 card sidebar-card">
                                <div class="card-header justify-content-center" data-control="checkbox-dropdown">
                                    <a href="#" class="nav-link my-1" aria-expanded="false" role="button" tabindex="0">
                                        <span class="">분야별</span>
                                    </a>
                                </div>
                                <div class="dropdown-list sidebar-sub-list">
                                    <a href="#" data-toggle="check-all" class="dropdown-option check-all">
                                        Check All
                                    </a>
                                    <label class="dropdown-option">
                                        <input type="checkbox" name="dropdown-group" value=""/> 종합
                                    </label>
                                    <label class="dropdown-option ">
                                        <input type="checkbox" name="dropdown-group" value=""/> 건강/취미
                                    </label>
                                    <label class="dropdown-option">
                                        <input type="checkbox" name="dropdown-group" value=""/> 경제경영
                                    </label>
                                    <label class="dropdown-option">
                                        <input type="checkbox" name="dropdown-group" value=""/> 고전
                                    </label>
                                    <label class="dropdown-option">
                                        <input type="checkbox" name="dropdown-group" value=""/> 과학
                                    </label>
                                    <label class="dropdown-option">
                                        <input type="checkbox" name="dropdown-group" value=""/> 대학교재/전문서적
                                    </label>
                                    <label class="dropdown-option">
                                        <input type="checkbox" name="dropdown-group" value=""/> 소설/시/희곡
                                    </label>
                                    <label class="dropdown-option">
                                        <input type="checkbox" name="dropdown-group" value=""/> 사전/기타
                                    </label>
                                </div>
                                <div class="card-header justify-content-center" data-control="checkbox-dropdown">
                                    <a href="#" class="nav-link my-1" aria-expanded="false" role="button" tabindex="0">
                                        <span class="">상품별</span>
                                    </a>
                                </div>
                                <div class="dropdown-list sidebar-sub-list">
                                    <a href="#" data-toggle="check-all" class="dropdown-option check-all">
                                        Check All
                                    </a>
                                    <label class="dropdown-option">
                                        <input type="checkbox" name="dropdown-group" value=""/> 국내도서
                                    </label>
                                    <label class="dropdown-option">
                                        <input type="checkbox" name="dropdown-group" value=""/> 외국도서
                                    </label>
                                    <label class="dropdown-option">
                                        <input type="checkbox" name="dropdown-group" value=""/> eBook
                                    </label>
                                    <label class="dropdown-option">
                                        <input type="checkbox" name="dropdown-group" value=""/> 음반/DVD/블루레이
                                    </label>
                                </div>
                            </div>
                        </aside>


                        {/* <!-- BookList-List --> */}
                        {/* <!-- bookList-list.css --> */}
                        <section class="col-xl-9 col-md-12">
                            <div class="g-4 mt-2 row row-cols-1">
                                {/* <!-- book1 --> */}
                                <div class="col">
                                    <div class="card">
                                        <div class="card-body bookList-list-body">
                                            <div class="align-items-center row">
                                                {/* <!-- book image --> */}
                                                <div class="col-md-3 col-12 ml-1">
                                                    <div class="text-center position-relative bookList-list-img">
                                                        <div class="bookList-list-badge position-absolute top-0 start-0">
                                                            <span class="badge bg-success">판매중</span>
                                                        </div>
                                                        <a href="#">
                                                            <img src="https://library.kbu.ac.kr/libeka/fileview/f6ec917f-d09b-4f09-9061-9fe6d8ab25ee.JPG" alt="" class="img-fluid mx-auto">
                                                        </a>
                                                    </div>
                                                </div>
                                                {/* <!-- book info --> */}
                                                <div class="flex-grow-1 col-md-9 col-12 align-self-start mt-2">
                                                    <h2 class="fs-6 text-decoration-none mb-2">
                                                        <a href="/book1" class="text-decoration-none text-inherit ">
                                                            오늘 밤, 세계에서 이 사랑이 사라진다 해도
                                                        </a>
                                                    </h2>
                                                    <div class="text-small mb-2">
                                                        <a href="#!" class="text-decoration-none text-muted"><samll>이치조 미사키 | 모모</samll></a>
                                                    </div>
                                                    
                                                    <div class="mb-2">
                                                        <span class="text-dark">
                                                            20,000원
                                                        </span>
                                                    </div>
                                                    <div>
                                                        <a role="button" tabindex="0" href="#!" class="btn btn-primary btn-sm p-2 pb-1 
                                                        bookList-list-btn">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-heart me-1" viewBox="0 0 16 16">
                                                                <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"/>
                                                            </svg>
                                                            찜하기
                                                        </a>
                                                        <a role="button" tabindex="0" href="#!" class="btn btn-primary btn-sm p-2 pb-1 bookList-list-btn ">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-chat-left-dots me-1" viewBox="0 0 16 16">
                                                                <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
                                                                <path d="M5 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0m4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0m4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/>
                                                              </svg>
                                                            판매자와 채팅
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- book2 --> */}
                                <div class="col">
                                    <div class="card">
                                        <div class="card-body bookList-list-body">
                                            <div class="align-items-center row">
                                                {/* <!-- book image --> */}
                                                <div class="col-md-3 col-12 ml-1">
                                                    <div class="text-center position-relative bookList-list-img">
                                                        <div class="bookList-list-badge  position-absolute top-0 start-0">
                                                            <span class="badge bg-success">판매중</span>
                                                        </div>
                                                        <a href="#">
                                                            <img src="https://library.kbu.ac.kr/libeka/fileview/f6ec917f-d09b-4f09-9061-9fe6d8ab25ee.JPG" alt="" class="img-fluid mx-auto">
                                                        </a>
                                                    </div>
                                                </div>
                                                {/* <!-- book info --> */}
                                                <div class="flex-grow-1 col-md-9 col-12 align-self-start mt-2">
                                                    <h2 class="fs-6 text-decoration-none mb-2">
                                                        <a href="/book1" class="text-decoration-none text-inherit ">
                                                            오늘 밤, 세계에서 이 사랑이 사라진다 해도
                                                        </a>
                                                    </h2>
                                                    <div class="text-small mb-2">
                                                        <a href="#!" class="text-decoration-none text-muted"><samll>이치조 미사키 | 모모</samll></a>
                                                    </div>
                                                    
                                                    <div class="mb-2">
                                                        <span class="text-dark">
                                                            20,000원
                                                        </span>
                                                    </div>
                                                    <div>
                                                        <a role="button" tabindex="0" href="#!" class="btn btn-primary btn-sm p-2 pb-1 
                                                        bookList-list-btn">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-heart me-1" viewBox="0 0 16 16">
                                                                <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"/>
                                                            </svg>
                                                            찜하기
                                                        </a>
                                                        <a role="button" tabindex="0" href="#!" class="btn btn-primary btn-sm p-2 pb-1 bookList-list-btn ">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-chat-left-dots me-1" viewBox="0 0 16 16">
                                                                <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
                                                                <path d="M5 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0m4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0m4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/>
                                                              </svg>
                                                            판매자와 채팅
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- pagination --> */}
                            <div class="mt-5 row">
                                <div class="col">
                                    <div class=" d-md-flex justify-content-between align-items-center">
                                        <ul class="pagination mt-2 mt-md-0" role="navigation" aria-label="Pagination">
                                            <li class="previous disabled">
                                                <a class="page-link mx-1 rounded " tabindex="-1" role="button" aria-disabled="true" aria-label="Previous page" rel="prev">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="14px" height="14px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                                    <polyline points="15 18 9 12 15 6"></polyline>
                                                </svg>
                                                </a>
                                            </li>
                                            <li class="page-item active">
                                                <a rel="canonical" role="button" class="page-link mx-1 rounded" tabindex="-1" aria-label="Page 1 is your current page" aria-current="page">1</a>
                                            </li>
                                            <li class="page-item">
                                                <a rel="next" role="button" class="page-link mx-1 rounded" tabindex="0" aria-label="Page 2">2</a>
                                            </li>
                                            <li class="page-item">
                                                <a role="button" class="page-link mx-1 rounded" tabindex="0" aria-label="Page 3">3</a>
                                            </li>
                                            <li class="page-item">
                                                <a role="button" class="page-link mx-1 rounded" tabindex="0" aria-label="Page 4">4</a>
                                            </li>
                                            <li class="page-item">
                                                <a role="button" class="page-link mx-1 rounded" tabindex="0" aria-label="Page 5">5</a>
                                            </li>
                                            <li class="next">
                                                <a class="page-link mx-1 rounded" tabindex="0" role="button" aria-disabled="false" aria-label="Next page" rel="next">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="14px" height="14px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline>
                                                    </svg>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
            {/* <!-- End BookList(List) --> */}
            
        </main>
        {/* <!-- End Content --> */}


        <script src="/jquery/jquery-3.4.1.js"></script>
        <script src="/bootstrap-5.0.2/js/bootstrap.min.js"></script>
    </body>
    </html>

    )
}

export default SamplePage;