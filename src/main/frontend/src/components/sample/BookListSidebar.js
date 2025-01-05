import { useState } from "react";
import "./css/bookList-sidebar.css"

const BookListSidebar = () =>{

    const [sublist01, setSublist01] = useState(true);
    const [sublist02, setSublist02] = useState(true);

    const handleShow01 = () =>{
        setSublist01(!sublist01);
    }

    const handleShow02 = () =>{
        setSublist02(!sublist02);
    }

    return(
        <aside class="col-xl-3 col-md-12">
            <div class="g-4 card sidebar-card">
                <div class="card-header justify-content-center">
                    <a href="#" class="sidebar-sub-title nav-link my-1" role="button" tabindex="0" data-bs-toggle="collapse" data-bs-target="#bookListSidebar01" aria-controls="bookListSidebar01" aria-expanded="false" aria-label="Toggle navigation" onClick={handleShow01}>
                        <span class="">분야별</span>
                        {sublist01 ? (
                            <span><i class="bi bi-caret-down-fill" ></i></span>
                        ) : (<span><i class="bi bi-caret-up-fill" ></i></span>)}
                    </a>
                </div>
                <div class="sidebar-sub-list collapse show" id="bookListSidebar01">
                    <a href="#" data-toggle="check-all" class="sidebar-option check-all">
                        Check All
                    </a>
                    <label class="sidebar-option">
                        <input type="checkbox" name="sidebar01-group" value=""/> 종합
                    </label>
                    <label class="sidebar-option">
                        <input type="checkbox" name="sidebar01-group" value=""/> 건강/취미
                    </label>
                    <label class="sidebar-option">
                        <input type="checkbox" name="sidebar01-group" value=""/> 경제경영
                    </label>
                    <label class="sidebar-option">
                        <input type="checkbox" name="sidebar01-group" value=""/> 고전
                    </label>
                    <label class="sidebar-option">
                        <input type="checkbox" name="sidebar01-group" value=""/> 과학
                    </label>
                    <label class="sidebar-option">
                        <input type="checkbox" name="sidebar01-group" value=""/> 대학교재/전문서적
                    </label>
                    <label class="sidebar-option">
                        <input type="checkbox" name="sidebar01-group" value=""/> 소설/시/희곡
                    </label>
                    <label class="sidebar-option">
                        <input type="checkbox" name="sidebar01-group" value=""/> 사전/기타
                    </label>
                </div>
                <div class="card-header justify-content-center">
                    <a href="#" class="nav-link my-1" role="button" tabindex="0" data-bs-toggle="collapse" data-bs-target="#bookListSidebar02" aria-controls="bookListSidebar02" aria-expanded="false" aria-label="Toggle navigation" onClick={handleShow02}>
                        <span class="">상품별</span>
                        {sublist02 ? (
                            <span><i class="bi bi-caret-down-fill" ></i></span>
                        ) : (<span><i class="bi bi-caret-up-fill" ></i></span>)}
                    </a>
                </div>
                <div class="sidebar-sub-list collapse show" id="bookListSidebar02">
                    <a href="#" data-toggle="check-all" class="sidebar-option check-all">
                        Check All
                    </a>
                    <label class="sidebar-option">
                        <input type="checkbox" name="sidebar02-group" value=""/> 국내도서
                    </label>
                    <label class="sidebar-option">
                        <input type="checkbox" name="sidebar02-group" value=""/> 외국도서
                    </label>
                    <label class="sidebar-option">
                        <input type="checkbox" name="sidebar02-group" value=""/> eBook
                    </label>
                    <label class="sidebar-option">
                        <input type="checkbox" name="sidebar02-group" value=""/> 음반/DVD/블루레이
                    </label>
                </div>
            </div>
        </aside>
    )
}

export default BookListSidebar;