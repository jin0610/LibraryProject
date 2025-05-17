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
                <div className="card tab-content flex-1">
                    <div className='tab-pane h-100 fade active show' id="tab-thread-1" role='tabpanel' aria-labelledby='tab-thread-1'>
                        <div class="d-flex flex-column h-100">
                            <div className='card-header p-3 p-md-4 d-flex flex-between-center'>
                                <div class="d-flex align-items-center">
                                    <button class="btn ps-0 pe-2 text-body-tertiary d-sm-none" data-phoenix-toggle="offcanvas" data-phoenix-target="#chat-sidebar"><span class="fa-solid fa-chevron-left"></span>
                                    </button>
                                    <div class="d-flex flex-column flex-md-row align-items-md-center">
                                        <button class="btn fs-7 fw-semibold text-body-emphasis d-flex align-items-center p-0 me-3 text-start" data-phoenix-toggle="offcanvas" data-phoenix-target="#thread-details-0"><span class="line-clamp-1">Sharuka Nijibum</span><span class="fa-solid fa-chevron-down ms-2 fs-10"></span></button>
                                        <p class="fs-9 mb-0 me-2"> 
                                            <span class="fa-solid fa-circle text-success fs-11 me-2"></span>Active now
                                        </p>
                                    </div>
                                </div>
                                <div class="d-flex">
                                    <button class="btn btn-icon btn-primary me-1">
                                        <span class="fa-solid fa-phone"></span>
                                    </button>
                                    <button class="btn btn-icon btn-primary me-1">
                                        <span class="fa-solid fa-video"></span>
                                    </button>
                                    <button class="btn btn-icon btn-phoenix-primary" type="button" data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false" data-bs-reference="parent">
                                        <span class="fa-solid fa-ellipsis-vertical"></span>
                                    </button>
                                    <ul class="dropdown-menu dropdown-menu-end p-0">
                                        <li><a class="dropdown-item" href="#!">Add to favourites</a></li>
                                        <li><a class="dropdown-item" href="#!">View profile</a></li>
                                        <li><a class="dropdown-item" href="#!">Report</a></li>
                                        <li><a class="dropdown-item" href="#!">Manage notifications</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className='card-body p-3 p-sm-4 scrollbar chat-content-body-0'>
                                <div class="d-flex chat-message">
                                    <div class="d-flex mb-2 flex-1">
                                        <div class="w-100 w-xxl-75">
                                            <div class="d-flex hover-actions-trigger">
                                            <div class="avatar avatar-m me-3 flex-shrink-0"><img class="rounded-circle" src="../assets/img/team/20.webp" alt="" /></div>
                                            <div class="chat-message-content received me-2">
                                                <div class="mb-1 received-message-content border rounded-2 p-3">
                                                <p class="mb-0">I have got a date at a quarter to eight; I’ll see you at the gate, so don’t be late.</p>
                                                </div>
                                            </div>
                                            <div class="d-none d-sm-flex">
                                                <div class="hover-actions position-relative align-self-center me-2"><button class="btn p-2 fs-10"><span class="fa-solid fa-reply"></span></button><button class="btn p-2 fs-10"><span class="fa-solid fa-trash"></span></button><button class="btn p-2 fs-10"><span class="fa-solid fa-share"></span></button><button class="btn p-2 fs-10"><span class="fa-solid fa-face-smile"></span></button></div>
                                            </div>
                                            <div class="d-sm-none hover-actions align-self-center me-2 end-0">
                                                <div class="bg-body-emphasis rounded-pill d-flex align-items-center border px-2 actions"><button class="btn p-2" type="button"><span class="fa-solid fa-reply text-primary"></span></button><button class="btn p-2" type="button"><span class="fa-solid fa-trash text-primary"></span></button><button class="btn p-2" type="button"><span class="fa-solid fa-share text-primary"></span></button><button class="btn p-2" type="button"><span class="fa-solid fa-face-smile text-primary"></span></button></div>
                                            </div>
                                            </div>
                                            <p class="mb-0 fs-10 text-body-tertiary text-opacity-85 fw-semibold ms-7">Yesterday, 10 AM</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="d-flex chat-message">
                                    <div class="d-flex mb-2 flex-1">
                                    <div class="w-100 w-xxl-75">
                                        <div class="d-flex hover-actions-trigger">
                                        <div class="avatar avatar-m me-3 flex-shrink-0"><img class="rounded-circle" src="../assets/img/team/29.webp" alt="" /></div>
                                        <div class="chat-message-content received me-2">
                                            <div class="mb-1 received-message-content border rounded-2 p-3">
                                            <p class="mb-0">But if the shot Shott shot shot Shott, then Shott was shot, not Nott.</p>
                                            </div>
                                        </div>
                                        <div class="d-none d-sm-flex">
                                            <div class="hover-actions position-relative align-self-center me-2"><button class="btn p-2 fs-10"><span class="fa-solid fa-reply"></span></button><button class="btn p-2 fs-10"><span class="fa-solid fa-trash"></span></button><button class="btn p-2 fs-10"><span class="fa-solid fa-share"></span></button><button class="btn p-2 fs-10"><span class="fa-solid fa-face-smile"></span></button></div>
                                        </div>
                                        <div class="d-sm-none hover-actions align-self-center me-2 end-0">
                                            <div class="bg-body-emphasis rounded-pill d-flex align-items-center border px-2 actions"><button class="btn p-2" type="button"><span class="fa-solid fa-reply text-primary"></span></button><button class="btn p-2" type="button"><span class="fa-solid fa-trash text-primary"></span></button><button class="btn p-2" type="button"><span class="fa-solid fa-share text-primary"></span></button><button class="btn p-2" type="button"><span class="fa-solid fa-face-smile text-primary"></span></button></div>
                                        </div>
                                        </div>
                                        <p class="mb-0 fs-10 text-body-tertiary text-opacity-85 fw-semibold ms-7">Yesterday, 10 AM</p>
                                    </div>
                                    </div>
                                </div>
                            </div>
                            <div class="card-footer">
                                <div class="chat-textarea outline-none scrollbar mb-1" contenteditable="true"></div>
                                <div class="d-flex justify-content-between align-items-end">
                                    <div><button class="btn btn-link py-0 ps-0 pe-2 text-body fs-9 btn-emoji" data-picmo="data-picmo"><span class="fa-regular fa-face-smile"></span></button><label class="btn btn-link py-0 px-2 text-body fs-9" for="chatPhotos-1"><span class="fa-solid fa-image"></span></label><input class="d-none" type="file" accept="image/*" id="chatPhotos-1" /><label class="btn btn-link py-0 px-2 text-body fs-9" for="chatAttachment-1"> <span class="fa-solid fa-paperclip"></span></label><input class="d-none" type="file" id="chatAttachment-1" /><button class="btn btn-link py-0 px-2 text-body fs-9"><span class="fa-solid fa-microphone"></span></button><button class="btn btn-link py-0 px-2 text-body fs-9"><span class="fa-solid fa-ellipsis"></span></button></div>
                                    <div><button class="btn btn-primary fs-10" type="button">Send<span class="fa-solid fa-paper-plane ms-1"></span></button></div>
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