import React from "react";
import Header from "../components/header";
import PageBlock from "../components/PageBlock";
import NoticeWriteContainer from "../containers/notice/NoticeWriteContainer";

const NoticeWritePage = () => {
    return(
        <PageBlock>
            <Header/>
            <NoticeWriteContainer/>
        </PageBlock>
    )
}

export default NoticeWritePage;