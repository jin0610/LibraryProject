import NoticeForm from "../../components/noticeForm";
import client from "../../client";
import { useState, useEffect } from "react";
// import axios from "axios";
const NoticeContainer = () =>{

    const [noticeList, setNoticeList] = useState([]);

    const getData = ()=>{
        client.get(`/api/notice`, {
            headers: {
                "Origin": "http://localhost:3000",
            }
        })
            .then(res => {
                console.log(res.data.noticeList);
                if(res.data.result === 'success'){
                    setNoticeList(res.data.noticeList);
                }
            })
            .catch(err =>{
                console.log('error',err);
            });
    }
    useEffect(() => {
        console.log("start")
        getData();
        // axios.get('/api/notice/noticeList').then((res) => {
        //     console.log(res.data.noticeList)
        //     if(res.data.result==="success"){
        //         setNoticeList(res.data.noticeList)
        //     }
        //     // setHello(res.data)
        // }).catch((err) => console.log(err))

    },[noticeList])

    return(
        <NoticeForm 
            noticeList={noticeList}
        />
    )
}

export default NoticeContainer;