import './css/chattingForm.css'

const chattingForm = () => {

    const users = ['user1','user2','user3','user4','user5','user6','user7','user8','user9','user10','user11','user12']
    return(
        <div className='container chat-container chat'>
            <div className='row chat-row'>
                {/* Start Chat User List */}
                <div className='d-none d-lg-block col-xl-3 col-lg-4 chat-user-list-card scrollbar'>
                    <div className='card'>
                        <div className='card-body p-0 chat-user-list-card-body scrollbar'>
                            <div className='tab-content'>
                                <div className='tab-pane active card-body pb-0 chat-user-list ' id='newpost'>
                                    <ul className='nav flex-column list overflow-hidden w-100'>
                                        {users.map((user, idx) => (
                                            <li className='nav-item chat-user-list-li px-2 py-1 rounded-3' role="presentation">
                                                <a className='nav-link d-flex px-0 mx-0 overflow-hidden align-items-center' data-bs-toggle="tab" href={"#"+user} role="tab" aria-selected="true">
                                                    <div className="me-2 me-sm-0 me-xl-2">
                                                        <img src="https://cdn-icons-png.flaticon.com/512/11058/11058552.png" className='me-2 rounded-circle chat-user-list-img border border-2'></img>
                                                    </div>
                                                    <div class="chat-user-list-info flex-grow-1 overflow-hidden">
                                                        <div class="d-flex justify-content-between align-items-center">
                                                            <h5 class="text-body fw-normal text-nowrap chat-user-list-name overflow-hidden text-truncate">{user}</h5>
                                                        </div>
                                                        <div class="d-flex">
                                                            <p class="mb-0 text-opacity-85 text-truncate  chat-user-list-message ">This is a message from youThis is a message from you This is a message from youThis is a message from you</p>
                                                        </div>
                                                    </div>
                                                    <div className='chat-user-list-delete-btn'>
                                                        <button className='btn btn-sm px-1'>
                                                            <i class="bi bi-x-lg"></i>
                                                        </button>
                                                    </div>
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Chat User List */}

                {/* Start Chat User List(offcanvas) */}
                <nav className='col-xl-3 col-lg-4 d-xl-flex offcanvas offcanvas-start chat-user-list-offcanvas' tabindex="-1" id="chatUserList">
                    <div className='card'>
                        <div class="card-header">
                            <button type="button" class="d-flex btn-close btn-close-black" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className='card-body p-0 chat-user-list-card-body scrollbar'>
                            <div className='tab-content'>
                                <div className='tab-pane show active card-body pb-0 chat-user-list' id='newpost'>
                                    <ul className='nav flex-column list overflow-hidden w-100'>
                                        {users.map((user, idx) => (
                                            <li className='nav-item chat-user-list-li px-2 py-1 rounded-3' role="presentation">
                                                <a className='nav-link d-flex px-0 mx-0 overflow-hidden align-items-center' data-bs-toggle="tab" href={"#"+user} role="tab" aria-selected="true">
                                                    <div className="me-2 me-sm-0 me-xl-2">
                                                        <img src="https://cdn-icons-png.flaticon.com/512/11058/11058552.png" className='me-2 rounded-circle chat-user-list-img border border-2'></img>
                                                    </div>
                                                    <div class="chat-user-list-info flex-grow-1 overflow-hidden">
                                                        <div class="d-flex justify-content-between align-items-center">
                                                            <h5 class="text-body fw-normal text-nowrap chat-user-list-name overflow-hidden text-truncate">{user}</h5>
                                                        </div>
                                                        <div class="d-flex">
                                                            <p class="mb-0 text-opacity-85 text-truncate  chat-user-list-message ">This is a message from youThis is a message from you This is a message from youThis is a message from you</p>
                                                        </div>
                                                    </div>
                                                    <div className='chat-user-list-delete-btn'>
                                                        <button className='btn btn-sm px-1'>
                                                            <i class="bi bi-x-lg"></i>
                                                        </button>
                                                    </div>
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
                {/* End Chat User List */}

                {/* Start Chat */}
                <div className='col-xl-9 col-lg-8'>
                    <div className='card chat-form'>
                        {/* Chatting user info */}
                        <div className="card-header border-bottom border-dashed chat-form-header">
                            <div className='d-flex align-items-center gap-2 py-2'>
                                {/* user list collapse 버튼 */}
                                <div cassName="d-flex">
                                    <button class="d-lg-none btn btn-secondary navbar-toggler p-1 px-2 chat-user-list-nav-btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#chatUserList" aria-controls="chatUserList" aria-expanded="true" aria-label="Toggle navigation">
                                        <i class="bi bi-list"></i>
                                    </button>
                                </div>
                                <div class="d-flex align-items-center me-auto">
                                    <img className='me-2 rounded-circle chat-form-header-img' src="https://cdn-icons-png.flaticon.com/512/11058/11058552.png"></img>
                                    <div className=''>
                                        <h5 className='mt-0 mb-0 chat-form-hedaer-name'>user1</h5>
                                        
                                    </div>
                                </div>
                                <div className='d-flex gap-3'>
                                    <div className='d-lg-inline-flex gap-3'>
                                        <a className='p-1 px-2 rounded text-body d-inline-flex chat-form-header-delete-chat' data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Delete Chat" data-bs-original-title="Delete Chat">
                                            <i class="bi bi-trash3-fill"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Chatting */}
                        <div className='card-body chat-form-body scrollbar'>
                            {/* 내 메시지 */}
                            <div className='d-flex chat-message'>
                                <div className='d-flex mb-2 flex-1'>
                                    <div className='w-100 w-xxl-75 justify-content-end'>
                                        <div className='d-flex flex-end-center w-50 w-ssm-75'>
                                            <div className='chat-message-content me-2'>
                                                <div class="mb-1 sent-message-content bg-primary rounded-2 py-2 px-3 text-white" data-bs-theme="light">
                                                    <p class="mb-0">보낸 메시지보낸 메시지보낸 메시지보낸 메시지보낸 메시지보낸 메시지보낸 메시지보낸 메시지보낸 메시지</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='text-end w-50 w-ssm-75'>
                                            <p className='mb-0 text-body-tertiary fw-normal'>Yesterday, 10 AM</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* 상대방 메시지 */}
                            <div className='d-flex chat-message'>
                                <div className='d-flex mb-2 flex-1'>
                                    <div className='w-100 w-xxl-75'>
                                        <div className='d-flex w-50 w-ssm-75'>
                                            <div class="avatar avatar-m me-3 flex-shrink-0">
                                                <img className='rounded-circle received-message-img' src="https://cdn-icons-png.flaticon.com/512/11058/11058552.png"></img>
                                                
                                            </div>
                                            <div className='chat-message-content received me-2'>
                                                <div class="mb-1 received-message-content border rounded-2 py-2 px-3" data-bs-theme="light">
                                                    <p class="mb-0">받은 메시지받은 메시지받은 메시지받은 메시지받은 메시지받은 메시지받은 메시지받은 메시지받은 메시지</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='text-end w-50 w-ssm-75'>
                                            <p className='mb-0 text-body-tertiary fw-normal ms-7'>Yesterday, 10 AM</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Chat text form */}
                        <div className='card-footer chat-form-footer'>
                            <div className='w-100'>
                                <input className="card-textarea border-0 mb-2 py-1 px-2" placeholder='Type your message...'></input>
                            </div>
                            <div className='d-flex justify-content-end align-items-end'>
                                <div>
                                    <button class="btn btn-link text-body fs-6 me-2 btn-clip" type="button">
                                        <span class="bi bi-paperclip"></span>
                                    </button>
                                </div>
                                <div>
                                    <button class="btn btn-primary fs-6" type="button">
                                        Send
                                        <span class="bi bi-send ms-2"></span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Chat */}
                
            </div>
        </div>
    )
}

export default chattingForm;