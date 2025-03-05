import NoticeForm from "../../components/noticeForm";
import client from "../../client";
import { useState, useEffect } from "react";

const NoticeContainer = () =>{

    const [noticeList, setNoticeList] = useState([]);

    useEffect(() => {
        console.log("start")
        client.get('/api/notice/noticeList').then((res) => {
            console.log(res.data.noticeList)
            if(res.data.result==="success"){
                setNoticeList(res.data.noticeList)
            }
            // setHello(res.data)
        }).catch((err) => console.log(err))

    },[])

    return(
        <NoticeForm 
            noticeList={noticeList}
        />
    )
}

export default NoticeContainer;