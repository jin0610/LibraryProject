import './css/chattingForm.css'

const chattingForm = () => {


    return(
        <div className='container chat-container chat'>
            <div className='row chat-row'>
                {/* Start Chat User List */}
                <div className='col-xl-4 chat-user-list-card'>
                    <div className='card'>
                        <div className='card-body p-0 chat-user-list-card-body'>
                            <div className='tab-content'>
                                <div className='tab-pane show active card-body pb-0 chat-user-list' id='newpost'>
                                    {/* users */}
                                    <div className='row'>
                                        <div className='col'>
                                            <div className='card-body py-0 mb-3' data-simplebar>
                                                <a class="text-body px-0">
                                                    <div className='d-flex align-items-start mt-1 p-2'>
                                                        <img src="https://cdn-icons-png.flaticon.com/512/11058/11058552.png" className='me-2 rounded-circle chat-user-list-img'></img>
                                                        <div className='w-100 overflow-hidden'>
                                                            <h5 class="mt-0 mb-0 chat-user-list-name">
                                                                user1
                                                            </h5>
                                                            <p className='mt-1 mb-0 text-muted chat-user-list-content'>
                                                                How are you today?
                                                            </p>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Chat User List */}

                {/* Start Chat */}
                <div className='col-xl-8'>
                    <div className='card chat-form'>
                        {/* Chatting user info */}
                        <div className="card-header border-bottom border-dashed chat-form-header">
                            <div className='d-flex align-items-center gap-2 py-2'>

                                <div class="d-flex align-items-center me-auto">
                                    <img className='me-2 rounded-circle chat-form-header-img' src="https://cdn-icons-png.flaticon.com/512/11058/11058552.png"></img>
                                    <div className=''>
                                        <h5 className='mt-0 mb-0 chat-form-hedaer-name'>user1</h5>
                                        
                                    </div>
                                </div>
                                <div className='d-flex gap-3'>
                                    <div className='d-none d-lg-inline-flex gap-3'>
                                        <a className='p-1 px-2 rounded text-body d-inline-flex chat-form-header-delete-chat' data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Delete Chat" data-bs-original-title="Delete Chat">
                                            <i class="bi bi-trash3-fill"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Chatting */}
                        <div className='card-body chat-form-body '>
                            {/* 내 메시지 */}
                            <div className='d-flex chat-message'>
                                <div className='d-flex mb-2 flex-1'>
                                    <div className='w-100 w-xxl-75 justify-content-end'>
                                        <div className='d-flex flex-end-center w-50'>
                                            <div className='chat-message-content me-2'>
                                                <div class="mb-1 sent-message-content bg-primary rounded-2 py-2 px-3 text-white" data-bs-theme="light">
                                                    <p class="mb-0">보낸 메시지보낸 메시지보낸 메시지보낸 메시지보낸 메시지보낸 메시지보낸 메시지보낸 메시지보낸 메시지</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='text-end w-50'>
                                            <p className='mb-0 text-body-tertiary fw-normal'>Yesterday, 10 AM</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* 상대방 메시지 */}
                            <div className='d-flex chat-message'>
                                <div className='d-flex mb-2 flex-1'>
                                    <div className='w-100 w-xxl-75'>
                                        <div className='d-flex w-50'>
                                            <div class="avatar avatar-m me-3 flex-shrink-0">
                                                <img className='rounded-circle received-message-img' src="https://cdn-icons-png.flaticon.com/512/11058/11058552.png"></img>
                                                
                                            </div>
                                            <div className='chat-message-content received me-2'>
                                                <div class="mb-1 received-message-content border rounded-2 py-2 px-3" data-bs-theme="light">
                                                    <p class="mb-0">받은 메시지받은 메시지받은 메시지받은 메시지받은 메시지받은 메시지받은 메시지받은 메시지받은 메시지</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='text-end w-50'>
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