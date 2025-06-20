import React from "react";
import Header from "../components/header";
import PageBlock from "../components/PageBlock";
import NoticeContainer from "../containers/notice/NoticeContainer";


const NoticePage = () =>{

    return(
        <PageBlock>
            <Header/>
            <NoticeContainer/>
        </PageBlock>

    )
}

export default NoticePage;