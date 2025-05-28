import "./css/noticeDetailForm.css"

const noticeDetailForm = () =>{
    // const {noticeList, pageChange, currentPage, pageButtons} = props

    return(
        <div class="container my-5">
            <div class="mb-5 row g-3">
                <div class="col-md-12">
                    <div class="d-md-flex justify-content-between align-items-center mt-5">
                        <div>
                            <h2 className="fw-bold">공지사항</h2>
                        </div>
                    </div>
                </div>
            </div>
            <hr className="mb-4"/>
            <div>
                <div className="mb-5">
                    <h4>
                        제목 1
                    </h4>
                </div>
                <div className="d-flex justify-content-start gap-5">
                    <p className="pb-1 mb-1">2025-05-25</p>
                    <p className="pb-1 mb-1">user1</p>
                    <p className="pb-1 mb-1">조회수 : 25</p>
                </div>
            </div>
            <hr className="mb-4"/>
            <div className="notice-content">
                내용입니다~~
            </div>
            <hr className="mb-4"/>
            <div className="d-flex justify-content-end notice-btn">
                <button className="btn btn-secondary notice-go-to-list-btn">목록</button>
            </div>
        </div>
    )
}

export default noticeDetailForm;
