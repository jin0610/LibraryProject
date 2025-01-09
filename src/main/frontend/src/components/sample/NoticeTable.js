import './css/table.css'

const NoticeTable = (props) =>{
    const {msg} = props
    return(
        <div class="container">
            <div class="mb-5 row">
                <div class="col-md-12">
                    <div class="d-md-flex justify-content-between align-items-center">
                        <div>
                            <h2>공지사항</h2>
                        </div>
                        <div class="notice-search-btn-group">
                            <div class="notice-search-group">
                                <input placeholder="Search" class="rounded form-control" type="search"/>
                                <span class="">
                                    <button type="button" class="border border-start-0 rounded-0 btn btn-white"><i class="bi bi-search"></i>
                                    </button>
                                </span>
                            </div>
                            <a role="button" tabindex="0" class="notice-write-btn btn btn-primary" href="#">글쓰기</a>    
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="mb-5 col-xl-12 col-12">
                    <div class="table-responsive">
                        <table class="mb-0 table table-borderless table-hover notice-table" >
                            <thead class="bg-light">
                                <tr>
                                    <th colspan="1">
                                        <div class="">구분</div>
                                    </th>
                                    <th colspan="4">
                                        <div class="">제목</div>
                                    </th>
                                    <th colspan="2">
                                        <div class="">작성자</div>
                                    </th>
                                    <th colspan="2">
                                        <div class="">작성날짜</div>
                                    </th>
                                    <th colspan="2">
                                        <div class="">조회수</div>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="notice-table-row">
                                    <td colspan="1" class="align-middle border-top-0">
                                        <div>1</div>
                                    </td>
                                    <td colspan="4" class="align-middle border-top-0">
                                        <div>공지사항1</div>
                                    </td>
                                    <td colspan="2" class="align-middle border-top-0">
                                        <div>writer</div>
                                    </td>
                                    <td colspan="2" class="align-middle border-top-0">
                                        <div>2025-01-01</div>
                                    </td>
                                    <td colspan="2" class="align-middle border-top-0">
                                        <div>34</div>
                                    </td>
                                </tr>
                                <tr class="notice-table-row">
                                    <td colspan="1" class="align-middle border-top-0">
                                        <div>2</div>
                                    </td>
                                    <td colspan="4" class="align-middle border-top-0">
                                        <div>공지사항2</div>
                                    </td>
                                    <td colspan="2" class="align-middle border-top-0">
                                        <div>writer</div>
                                    </td>
                                    <td colspan="2" class="align-middle border-top-0">
                                        <div>2025-01-01</div>
                                    </td>
                                    <td colspan="2" class="align-middle border-top-0">
                                        <div>34</div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    {/* <!-- pagination --> */}
                    <div class="mt-3 row">
                        <div class="col ">
                            <div class="justify-content-between align-items-center ">
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
                </div>
            </div>
        </div>
    )
}

export default NoticeTable;
