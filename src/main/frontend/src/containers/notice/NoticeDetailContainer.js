import client from "../../client";
import NoticeDetailForm from "../../components/notice/noticeDetailForm"
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect } from "react";


const NoticeDetailContainer = () =>{
    const location = useLocation()
    const data = {...location.state};
    // const noticeId = data.noticeId
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