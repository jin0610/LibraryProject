import NoticeForm from "../../components/notice/noticeForm";
import client from "../../client";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const NoticeContainer = () =>{

    const navigate = useNavigate();
    
    const [noticeList, setNoticeList] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);

    const pageChange = (page) => {
        client.get(`/notice?page=${page}`)
        .then(res => {
            console.log(res.data)
            setCurrentPage(page);
            setNoticeList(res.data.content);
            setTotalPages(res.data.totalPages);
        }).catch(err => {
            console.log("error", err);
        });
    }

    const onTitleClick = (id, e) =>{
        console.log("onTitleClick id", id);
        navigate(`/notice/detail/${id}`, {
            state: {
                noticeId: id
            }
        });
    }

    useEffect(() => {
        window.scrollTo({top:0, behavior:"smooth"});
        pageChange(currentPage);
    },[currentPage])

    const pageButtons = () => {
        const buttons = [];
        for (let i = 1; i <= totalPages; i++){
            buttons.push(
                <li className={`page-item ${currentPage === i ? "active" : ""}`}>
                    <button rel="canonical" role="button" className="page-link mx-1 rounded" tabIndex="-1"
                        aria-current="page"
                        key={i}
                        onClick={() => pageChange(i)}
                        disabled={i === currentPage}
                    >
                        {i}
                    </button>
                </li>
            );
        }
        return buttons;
    };

    return(
        <NoticeForm 
            noticeList={noticeList}
            pageChange={pageChange}
            currentPage={currentPage}
            pageButtons={pageButtons}
            onTitleClick = {onTitleClick}
        />
    )
}

export default NoticeContainer;