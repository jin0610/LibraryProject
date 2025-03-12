import React from "react";
import Header from "../components/sample/Header";
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