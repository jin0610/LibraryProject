import "./css/noticeForm.css"
import moment from 'moment';

const noticeForm = (props) =>{
    const {noticeList} = props

    const regDateFormat = (date) =>{
        return moment(date).format('YYYY-MM-DD')
    }

    return(
        <div class="container mt-5">
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
                            <a role="button" tabIndex="0" class="notice-write-btn btn btn-primary" href="#">글쓰기</a>    
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
                                    <th colSpan="1">
                                        <div class="">구분</div>
                                    </th>
                                    <th colSpan="4">
                                        <div class="">제목</div>
                                    </th>
                                    <th colSpan="2">
                                        <div class="">작성자</div>
                                    </th>
                                    <th colSpan="2">
                                        <div class="">작성날짜</div>
                                    </th>
                                    <th colSpan="2">
                                        <div class="">조회수</div>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {noticeList.map((notice, index) =>(
                                    <tr class="notice-table-row" key={index}>
                                        <td colSpan="1" class="align-middle border-top-0">
                                            <div>{notice.notice_id}</div>
                                        </td>
                                        <td colSpan="4" class="align-middle border-top-0">
                                            <div>{notice.title}</div>
                                        </td>
                                        <td colSpan="2" class="align-middle border-top-0">
                                            <div>{notice.writer}</div>
                                        </td>
                                        <td colSpan="2" class="align-middle border-top-0">
                                            <div>{regDateFormat(notice.reg_date)}</div>
                                        </td>
                                        <td colSpan="2" class="align-middle border-top-0">
                                            <div>34</div>
                                        </td>
                                    </tr>
                                ))}                               
                            </tbody>
                        </table>
                    </div>
                    {/* <!-- pagination --> */}
                    <div class="mt-3 row">
                        <div class="col ">
                            <div class="justify-content-between align-items-center ">
                                <ul class="pagination mt-2 mt-md-0" role="navigation" aria-label="Pagination">
                                    <li class="previous disabled">
                                        <a class="page-link mx-1 rounded " tabIndex="-1" role="button" aria-disabled="true" aria-label="Previous page" rel="prev">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="14px" height="14px" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <polyline points="15 18 9 12 15 6"></polyline>
                                        </svg>
                                        </a>
                                    </li>
                                    <li class="page-item active">
                                        <a rel="canonical" role="button" class="page-link mx-1 rounded" tabIndex="-1" aria-label="Page 1 is your current page" aria-current="page">1</a>
                                    </li>
                                    <li class="page-item">
                                        <a rel="next" role="button" class="page-link mx-1 rounded" tabIndex="0" aria-label="Page 2">2</a>
                                    </li>
                                    <li class="page-item">
                                        <a role="button" class="page-link mx-1 rounded" tabIndex="0" aria-label="Page 3">3</a>
                                    </li>
                                    <li class="page-item">
                                        <a role="button" class="page-link mx-1 rounded" tabIndex="0" aria-label="Page 4">4</a>
                                    </li>
                                    <li class="page-item">
                                        <a role="button" class="page-link mx-1 rounded" tabIndex="0" aria-label="Page 5">5</a>
                                    </li>
                                    <li class="next">
                                        <a class="page-link mx-1 rounded" tabIndex="0" role="button" aria-disabled="false" aria-label="Next page" rel="next">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="14px" height="14px" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline>
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

export default noticeForm;
