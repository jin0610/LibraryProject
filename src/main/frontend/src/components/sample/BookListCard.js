import BookListSidebar from "./BookListSidebar";
import "./css/bookList-card.css";

const BookListCard = () => {
    return(
        <div class="mt-lg-12 mb-lg-14 mb-8">
            <div class="container">
                <div class="row">
                    <BookListSidebar/>
                    <section class="col-xl-9 col-md-12">
                        <div class="g-4 mt-2 row row-cols-xl-3 row-col-lg-3 row-cols-md-2 row-cols-2">
                            {/* <!-- book1 --> */}
                            <div class="col book-card-row">
                                <div class="card h-100">
                                    {/* <!-- book Image --> */}
                                    <div class="text-center position-relative booklist-card-image">
                                        <div class=" mx-3 position-absolute top-0 start-0">
                                            <span class="badge bg-success">판매중</span>
                                        </div>
                                        <a href="#">
                                            <img src="https://library.kbu.ac.kr/libeka/fileview/f6ec917f-d09b-4f09-9061-9fe6d8ab25ee.JPG" alt="" class="card-img"/>
                                        </a>
                                    </div>
                                    {/* <!-- book Info --> */}
                                    <div class="p-3 booklist-card-Info-group">
                                        <h2 class="fs-6 text-decoration-none">
                                            <a href="#!" class="text-decoration-none text-dark">
                                                우연은 비켜 가지 않는다
                                            </a>
                                        </h2>
                                        <div class="text-small pb-2">
                                            <a href="#!" class="text-decoration-none text-muted "><samll>줄리언 반스 | 다산책방</samll></a>
                                        </div>
                                        <div class="booklist-card-price-btn">
                                            <div class="booklist-card-price">
                                                <span class="text-dark">
                                                    15,750원
                                                </span>
                                            </div>
                                            <div class="booklist-card-btn-group">
                                                <a role="button" tabindex="0" href="#!" class="btn btn-primary btn-sm px-2 booklist-card-btn">
                                                    <span>
                                                        <i class="bi bi-heart"></i>
                                                    </span>
                                                </a>
                                                <a role="button" tabindex="0" href="#!" class="btn btn-primary btn-sm px-2 booklist-card-btn">
                                                    <span><i class="bi bi-chat-left-dots-fill"></i></span>
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
                                            <img src="https://library.kbu.ac.kr/libeka/fileview/f6ec917f-d09b-4f09-9061-9fe6d8ab25ee.JPG" alt="" class="card-img"/>
                                        </a>
                                    </div>
                                    {/* <!-- book Info --> */}
                                    <div class="p-3 booklist-card-Info-group">
                                        <h2 class="fs-6 text-decoration-none">
                                            <a href="#!" class="text-decoration-none text-dark">
                                                우연은 비켜 가지 않는다
                                            </a>
                                        </h2>
                                        <div class="text-small pb-2">
                                            <a href="#!" class="text-decoration-none text-muted "><samll>줄리언 반스 | 다산책방</samll></a>
                                        </div>
                                        <div class="booklist-card-price-btn">
                                            <div class="booklist-card-price">
                                                <span class="text-dark">
                                                    15,750원
                                                </span>
                                            </div>
                                            <div class="booklist-card-btn-group">
                                                <a role="button" tabindex="0" href="#!" class="btn btn-primary btn-sm px-2 booklist-card-btn">
                                                    <span>
                                                        <i class="bi bi-heart"></i>
                                                    </span>
                                                </a>
                                                <a role="button" tabindex="0" href="#!" class="btn btn-primary btn-sm px-2 booklist-card-btn">
                                                    <span><i class="bi bi-chat-left-dots-fill"></i></span>
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
    )
}

export default BookListCard;