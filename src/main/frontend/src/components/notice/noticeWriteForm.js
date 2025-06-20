import './css/noticeWriteForm.css'

const NoticeWriteForm = (props) =>{
    const {formData, handleChange, handleSubmit, handleCancel} = props
    return(
        <div class="container my-5">
            <div class="mb-5 row g-3">
                <div class="col-md-12">
                    <div class="d-md-flex justify-content-between align-items-center mt-5">
                        <div>
                            <h2 className="fw-bold">공지사항 글쓰기</h2>
                        </div>
                    </div>
                </div>
            </div>
            <form class='mb-5' onSubmit={handleSubmit}>
                    <div class="row mb-3">
                        <label for="noticeTitle" class="col-xl-2 col-lg-3 d-none d-lg-block col-form-label align-content-center">제목</label>
                        <div class="col-xl-10 col-lg-9 col-12">
                            <input type="text" class="form-control" id="noticeTitle" value={formData.title} onChange={(e) => handleChange(e)} placeholder="제목을 입력해주세요." required/>
                        </div>
                    </div>
                    <div class="row mb-3 notice-content">
                        <label for="noticeContent" class="col-xl-2 col-lg-3 d-none d-lg-block col-form-label align-content-center">내용</label>
                        <div class="col-xl-10 col-lg-9 col-12">
                            <input type="text" class="form-control" id="noticeContent" 
                            value={formData.content} onChange={(e) => handleChange(e)} placeholder="내용을 입력해주세요." required/>
                        </div>
                    </div>
                    {/* file 유형 : pdf, 이미지 파일 */}
                    {/* <div class="row mb-3">
                        <label for="noticeFile1" class="col-xl-2 col-lg-3 d-none d-lg-block col-form-label align-content-center">첨부파일1</label>
                        <div class="col-xl-10 col-lg-9 col-12">
                            <input type="file" class="form-control" id="noticeFile1" value={formData.files[0]} onChange={(e) => handleChange(e)}/>
                        </div>
                    </div>
                    <div class="row mb-3">
                        <label for="noticeFile2" class="col-xl-2 col-lg-3 d-none d-lg-block col-form-label align-content-center">첨부파일2</label>
                        <div class="col-xl-10 col-lg-9 col-12">
                            <input type="file" class="form-control" id="noticeFile2" value={formData.files[1]} onChange={(e) => handleChange(e)}/>
                        </div>
                    </div>
                    <div class="row mb-3">
                        <label for="noticeFile3" class="col-xl-2 col-lg-3 d-none d-lg-block col-form-label align-content-center">첨부파일3</label>
                        <div class="col-xl-10 col-lg-9 col-12">
                            <input type="file" class="form-control" id="noticeFile3" value={formData.files[2]} onChange={(e) => handleChange(e)}/>
                        </div>
                    </div>
                    <div class="row mb-3">
                        <label for="noticeFile4" class="col-xl-2 col-lg-3 d-none d-lg-block col-form-label align-content-center">첨부파일4</label>
                        <div class="col-xl-10 col-lg-9 col-12">
                            <input type="file" class="form-control" id="noticeFile4" value={formData.files[3]} onChange={(e) => handleChange(e)}/>
                        </div>
                    </div>
                    <div class="row mb-3">
                        <label for="noticeFile5" class="col-xl-2 col-lg-3 d-none d-lg-block col-form-label align-content-center">첨부파일5</label>
                        <div class="col-xl-10 col-lg-9 col-12">
                            <input type="file" class="form-control" id="noticeFile5" value={formData.files[4]} onChange={(e) => handleChange(e)}/>
                        </div>
                    </div> */}

                    <div className='d-flex justify-content-center gap-md-5 gap-3 pb-5 mt-4'>
                        <button type="submit" class="btn btn-primary justify-content-center notice-form-btn">확인</button>
                        <button type="button" class="btn btn-secondary justify-content-center notice-form-btn"onClick={(e)=> handleCancel()} >취소</button>
                    </div>
                
            </form>
        </div>
    )

}

export default NoticeWriteForm;