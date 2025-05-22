import React from "react";
import Header from "../components/header";
import PageBlock from "../components/PageBlock";
import ChattingContainer from "../containers/chat/ChattingContainer";

const ChatPage = () => {
    return(
        <PageBlock>
            <Header/>
            <ChattingContainer/>
        </PageBlock>
    )
}

export default ChatPage;