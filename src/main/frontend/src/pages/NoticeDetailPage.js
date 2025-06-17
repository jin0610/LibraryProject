import React from "react";
import Header from "../components/header";
import PageBlock from "../components/PageBlock";
import NoticeDetailContainer from "../containers/notice/NoticeDetailContainer";


const NoticeDetailPage = () =>{

    return(
        <PageBlock>
            <Header/>
            <NoticeDetailContainer/>
        </PageBlock>

    )
}

export default NoticeDetailPage;