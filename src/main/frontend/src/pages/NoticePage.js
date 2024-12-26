import React from "react";
import Header from "../components/header";
import PageBlock from "../components/PageBlock";
import NoticeForm from "../components/noticeForm";


const NoticePage = () =>{

    return(
        <PageBlock>
            <Header/>
            <NoticeForm/>
        </PageBlock>

    )
}

export default NoticePage;