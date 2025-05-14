import './css/chattingForm.css'

const chattingForm = () => {


    return(
        <div className="container mt-5 border-3 align-middle my-auto">
            <div className="row chat-page-form ">
                {/* 채팅방 리스트 */}
                <div className="col-12 col-lg-3">
                    <div className="list-header">
                        <div className="card-header">
                            채팅방
                        </div>
                    </div>
                    <div>
                        <nav className="nav nav-pills position-sticky flex-column mb-8">
                            <div className="nav-link active">
                                <img></img>
                                <p>user1</p>
                            </div>
                            <a className="nav-link">user2</a>
                            <a className="nav-link">user3</a>
                            <a className="nav-link">user4</a>
                        </nav>
                    </div>
                </div>

                {/* 채팅방 */}
                <div className="col-12 col-lg-9 chat-box">
                    <div className='row chat-box-header '>
        
                        <div className='col-md-4 chat-img rounded-circle bg-white ml-l'>
                            <img src="https://cdn-icons-png.flaticon.com/512/11058/11058552.png" alt="" class="img-thumbnail mx-auto rounded-circle"/>
                        </div>
                        <div className='col-md-8 chat-info'>
                                <p>user1</p>
                            <div>
                            </div>
                        </div>

                    </div>
                    <section className="card chatting-box bg-body-tertiary"> 

                    </section>

                </div>
            </div>
        </div>
    )
}

export default chattingForm;