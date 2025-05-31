import "./css/noticeDetailForm.css"

const noticeDetailForm = (props)=>{
    const {noticeContent} = props
    
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
                        {noticeContent.title}
                    </h4>
                </div>
                <div className="d-flex justify-content-start gap-5">
                    <p className="pb-1 mb-1">{noticeContent.regDate}</p>
                    <p className="pb-1 mb-1">{noticeContent.writer}</p>
                    <p className="pb-1 mb-1">조회수 : 25</p>
                </div>
            </div>
            <hr className="mb-4"/>
            <div className="notice-content">
                {noticeContent.content}
            </div>
            <hr className="mb-4"/>
            <div className="d-flex justify-content-end notice-btn">
                <a className="btn btn-secondary notice-go-to-list-btn" href="/notice">목록</a>
            </div>
        </div>
    )
}

export default noticeDetailForm;