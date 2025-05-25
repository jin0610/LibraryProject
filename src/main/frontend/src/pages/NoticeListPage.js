import React from "react";
import Header from "../components/header";
import PageBlock from "../components/PageBlock";
import NoticeListContainer from "../containers/notice/NoticeListContainer";


const NoticeListPage = () =>{

    return(
        <PageBlock>
            <Header/>
            <NoticeListContainer/>
        </PageBlock>

    )
}

export default NoticeListPage;