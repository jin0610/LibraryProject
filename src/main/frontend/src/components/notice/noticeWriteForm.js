import './css/noticeWriteForm.css'
const noticeWriteForm = () =>{
    return(
        <div class="container mt-5">
            <div class="mb-5 row">
                <div class="col-md-12">
                    <div class="d-md-flex justify-content-between align-items-center mt-5">
                        <div>
                            <h2>글쓰기</h2>
                        </div>
                    </div>
                </div>
            </div>
            <form className='w-100'>
                
                <div className="row">
                    <div className="col-xl-3 d-md-none">
                        <label className='d-flex w-100' for="noticeTitle">제목</label>
                    </div>
                    <div className="col-xl-9 col-md-12">
                        <label className='d-flex col-xl-3 w-100' for="noticeTitle">제목</label>
                        <input type="text" name="noticeTitle" 
                        id="noticeTitle" className="form-control col-xl-9 mt-4 mb-2" placeholder='제목을 입력해주세요' required></input>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-3 d-md-none">

                    </div>
                    <div className="col-xl-9 col-md-12">
                        
                    </div>
                </div>
                <div className="w-100 justify-items-end">
                    <button type="submit" class="btn btn-secondary mb-3">제출하기</button>
                </div>
            </form>
        </div>
    )

}

export default noticeWriteForm;