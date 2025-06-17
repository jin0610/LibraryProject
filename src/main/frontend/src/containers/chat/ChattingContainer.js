import { useEffect, useState } from "react";
import client from "../../client";
import ChattingForm from "../../components/chattingForm";

const ChattingContainer = () => {

    const [chatRoomList, setChatRoomList] = useState();

    const getChatRoom = () =>{
        client.get('/notice')
        .then(res => {
            console.log(res)
        })
        .catch(err => {
            console.log(err)
        })
    }
    
    useEffect(()=>{
        getChatRoom();
    }, [chatRoomList])
    return(
        <ChattingForm
            chatRoomList = {chatRoomList}
        />
    )
}

export default ChattingContainer;