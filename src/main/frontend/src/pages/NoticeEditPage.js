import React from "react";
import Header from "../components/header";
import PageBlock from "../components/PageBlock";
import NoticeEditContainer from "../containers/notice/NoticeEditContainer";

const NoticeEditPage = () => {
    return(
        <PageBlock>
            <Header/>
            <NoticeEditContainer/>
        </PageBlock>
    )
}

export default NoticeEditPage;