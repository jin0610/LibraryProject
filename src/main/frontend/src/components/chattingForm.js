import './css/chattingForm.css'

const chattingForm = () => {


    return(
        <div className="container mt-5 border-3 align-middle my-auto">
            <div className="row chat-page-form ">
                <div class="d-flex pt-1 mb-5">
                    {/* 채팅방 리스트 */}
                    <div class="card p-3 p-xl-1 mt-xl-nl" id="chat-sidebar">
                        <div className='scrollbar'>
                            <div data-chat-thread-tab-content="data-chat-thread-tab-content">
                                <div className='tab-content' id="chatListTabContent">
                                    <ul class="nav chat-thread-tab flex-column list">
                                        <li class="nav-item read" role="presentation">
                                            <a class="nav-link d-flex align-items-center justify-content-center p-2  active" data-bs-toggle="tab" data-chat-thread="data-chat-thread" href="#tab-thread-1" role="tab" aria-selected="true">
                                                <div class="avatar avatar-xl status-online position-relative me-2 me-sm-0 me-xl-2 chat-img">
                                                    <img class="rounded-circle border border-2 border-light-subtle" src="https://cdn-icons-png.flaticon.com/512/11058/11058552.png" alt="" />
                                                </div>
                                                <div class="flex-1 d-sm-none d-xl-block">
                                                    <div class="d-flex justify-content-between align-items-center">
                                                        <h5 class="text-body fw-normal name text-nowrap">Sharuka Nijibum</h5>
                                                        <p class="fs-10 text-body-tertiary text-opacity-85 mb-0 text-nowrap">Just now</p>
                                                    </div>
                                                    <div class="d-flex justify-content-between">
                                                        <p class="fs-9 mb-0 line-clamp-1 text-body-tertiary text-opacity-85 message">This is a message from you</p>
                                                    </div>
                                                </div>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="col-12 col-lg-3">
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
                </div> */}

                {/* 채팅방 */}
                {/* <div className="col-12 col-lg-9 chat-box">
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

                </div> */}
            </div>
        </div>
    )
}

export default chattingForm;