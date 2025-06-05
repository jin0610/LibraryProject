import NoticeWriteForm from "../../components/notice/noticeWriteForm";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import moment from 'moment';
import client from "../../client";

const NoticeWriteContainer = () =>{
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        noticeId : null,
        title:"",
        content : "",
        writer : "user001",
        regDate : "",
        // files : [null,null,null,null,null]
    });
    const regDateFormat = (date) =>{
        return moment(date).format('YYYY-MM-DD hh:mm:ss')
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
        formData.regDate = new Date();
        if (formData.title.length <= 0){
            alert("제목을 입력해주세요.")
            return false
        }

        if (formData.content.length <= 0){
            alert("내용을 입력해주세요.")
            return false
        }
        // console.log("전송할 데이터:", formData);
        client.post('/notice/write', formData)
        .then( res => {
            // console.log(res)
            if (res.data === 'SUCCESS'){
                alert('글이 등록되었습니다.')
                navigate('/notice');
            } else{
                alert('등록 실패하였습니다.')
            }
        }).catch(err => {
            console.log("error", err)
        })
    };

    const handleCancel = (e) => {
        navigate('/notice');
        console.log("취소")
    }
    return(
        <NoticeWriteForm
            formData = {formData}
            handleChange = {handleChange}
            handleSubmit = {handleSubmit}
            handleCancel = {handleCancel}
        />
    )
}

export default NoticeWriteContainer;