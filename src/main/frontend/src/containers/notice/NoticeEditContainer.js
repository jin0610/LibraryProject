import { useEffect, useState } from "react";
import NoticeDetailContainer from "./NoticeDetailContainer"
import client from "../../client";
import { useLocation, useNavigate } from "react-router-dom";

const NoticeEditContainer = () =>{
    const navigate = useNavigate();
    const location = useLocation()
    const data = {...location.state};
    let {id} = useParams();

    const noticeId = data ? data.noticeId : id

    const [noticeCotent, setNoticeContent] = useState({
        noticeId : "",
        title : "",
        content : "",
        writer : "",
        regDate : ""
    })

    useEffect(()=>{
        client.get(`/notice/detail/${id}`)
        .then(res => {
            console.log(res)
            setNoticeContent(res.data)
        }).catch(err => {
            console.log(err)
            alert('존재하지 않은 글입니다.')
            
        })
    },[noticeCotent])

    return(
        <NoticeDetailContainer
            noticeCotent = {noticeCotent}
        />
    )
}

export default NoticeEditContainer;