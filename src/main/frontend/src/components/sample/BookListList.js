import BookListSidebar from "./BookListSidebar";
import "./css/bookList-list.css";

const BookListList = () => {
    return(
        <div class="mt-lg-12 mb-lg-14 mb-8">
            <div class="container">
                <div class="row">
                    <BookListSidebar/>
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
                                                        <img src="https://library.kbu.ac.kr/libeka/fileview/f6ec917f-d09b-4f09-9061-9fe6d8ab25ee.JPG" alt="" class="img-fluid mx-auto"/>
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
                                                    <a role="button" tabindex="0" href="#!" class="btn btn-primary btn-sm px-2 py-1
                                                    bookList-list-btn">
                                                        <span><i class="bi bi-heart me-1"></i></span>
                                                        <span>찜하기</span>
                                                    </a>
                                                    <a role="button" tabindex="0" href="#!" class="btn btn-primary btn-sm px-2 py-1 bookList-list-btn">
                                                        <span><i class="bi bi-chat-left-dots-fill me-1"></i></span>
                                                        <span>판매자와 채팅</span>
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
                                                    <div class="bookList-list-badge position-absolute top-0 start-0">
                                                        <span class="badge bg-success">판매중</span>
                                                    </div>
                                                    <a href="#">
                                                        <img src="https://library.kbu.ac.kr/libeka/fileview/f6ec917f-d09b-4f09-9061-9fe6d8ab25ee.JPG" alt="" class="img-fluid mx-auto"/>
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
                                                    <a role="button" tabindex="0" href="#!" class="btn btn-primary btn-sm px-2 py-1
                                                    bookList-list-btn">
                                                        <span><i class="bi bi-heart me-1"></i></span>
                                                        <span>찜하기</span>
                                                    </a>
                                                    <a role="button" tabindex="0" href="#!" class="btn btn-primary btn-sm px-2 py-1 bookList-list-btn">
                                                        <span><i class="bi bi-chat-left-dots-fill me-1"></i></span>
                                                        <span>판매자와 채팅</span>
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
                                <div class="justify-content-between align-items-center">
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
    )
}

export default BookListList;