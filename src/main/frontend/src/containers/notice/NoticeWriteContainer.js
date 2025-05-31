import NoticeWriteForm from "../../components/notice/noticeWriteForm";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import moment from 'moment';

const NoticeWriteContainer = () =>{
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        title:"",
        content : "",
        writer : "user001",
        regDate : "",
        files : [null,null,null,null,null]
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
        // 여기에 백엔드 API로 전송하는 로직 추가
        // navigate('/notice');
        formData.regDate = regDateFormat(new Date());
        if (formData.title.length <= 0){
            alert("제목을 입력해주세요.")
            return false
        }

        if (formData.content.length <= 0){
            alert("내용을 입력해주세요.")
            return false
        }

        console.log("전송할 데이터:", formData);
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