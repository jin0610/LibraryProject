import { useEffect, useState } from "react";
import NoticeDetailContainer from "./NoticeDetailContainer"
import client from "../../client";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import NoticeWriteForm from "../../components/notice/noticeWriteForm";

const NoticeEditContainer = () =>{
    const navigate = useNavigate();
    const location = useLocation()
    const data = {...location.state};
    let {id} = useParams();
    
    const noticeId = data ? data.noticeId : id

    const [formData, setFormData] = useState({
        noticeId : "",
        title : "",
        content : "",
        writer : "",
        regDate : ""
        // files : [null,null,null,null,null]
    });

    // 글 불러오기
    const getNoticeContent = (noticeId) =>{
        client.get(`/notice/detail?id=${noticeId}`)
        .then(res => {
            console.log(res.data)
            setFormData(res.data)
        }).catch(err => {
            console.log("error", err)
        })
    }    


    const handleChange = (e) => {
        const {id, value}= e.target;
        setFormData((prev) => ({
            ...prev,
            [id === "noticeTitle" ? "title" : "content"]: value,
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // formData.regDate = new Date();
        if (formData.title.length <= 0){
            alert("제목을 입력해주세요.")
            return false
        }

        if (formData.content.length <= 0){
            alert("내용을 입력해주세요.")
            return false
        }
        console.log("전송할 데이터:", formData);
        // client.post('/notice/edit', formData)
        // .then( res => {
        //     // console.log(res)
        //     if (res.data === 'SUCCESS'){
        //         alert('글이 등록되었습니다.')
        //         navigate('/notice');
        //     } else{
        //         alert('등록 실패하였습니다.')
        //     }
        // }).catch(err => {
        //     console.log("error", err)
        // })
    };

    const handleCancel = (e) => {
        navigate(`/notice/detail/${noticeId}`,{
            state:{
                noticeId : noticeId
            }
        });
        console.log("취소")
    }

    useEffect(()=>{
        console.log("useEffect")
        getNoticeContent(noticeId)
    },[noticeId])

    return(
        <NoticeWriteForm
            formData = {formData}
            handleChange = {handleChange}
            handleSubmit = {handleSubmit}
            handleCancel = {handleCancel}
        />
    )
}

export default NoticeEditContainer;