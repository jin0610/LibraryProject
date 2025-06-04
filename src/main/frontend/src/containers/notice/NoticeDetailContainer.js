import client from "../../client";
import NoticeDetailForm from "../../components/notice/noticeDetailForm"
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect } from "react";


const NoticeDetailContainer = () =>{
    const navigate = useNavigate();
    const location = useLocation()
    const data = {...location.state};
    
    let {id} = useParams();
    const noticeId = data ? data.noticeId : id

    const [noticeContent, setNoticeContent] = useState({
        noticeId : "",
        title : "",
        content : "",
        writer : "",
        regDate : ""
    });

    const getNoticeContent = (noticeId) =>{
        client.get(`/notice/detail?id=${noticeId}`)
        .then(res => {
            console.log(res.data)
            setNoticeContent(res.data)
        }).catch(err => {
            console.log("error", err)
        })
    }    

    // 공지사항 글 삭제
    const deleteNotice = (noticeId) => {
        client.get(`/notice/delete?id=${noticeId}`)
        .then(res => {
            console.log(res.data)
        }).catch(err => {
            console.log(err);
        })
    }

    // 공지사항 글 수정
    const editNotice = (noticeId) =>{
        navigate(`/notice/detail/${noticeId}`, {
            state: {
                noticeId : noticeId
            }
        })
    }

    
    useEffect(() => {
        getNoticeContent(noticeId);
    },[noticeId])

    return(
        <NoticeDetailForm
            noticeContent = {noticeContent}
        />        
    )
}

export default NoticeDetailContainer;