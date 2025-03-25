import PageBlock from "../components/PageBlock";
import Header from "../components/sample/Header";
import Banner from "../components/sample/Banner";
import "../components/css/register-login.css";
import React from "react";

const LoginPage = () => {
    return (
        <PageBlock>
            <Header/>
            <Banner/>
            <form className="form-login">
                <div className="text-center mb-4">
                    <h1 className="h3 mb-3 font-weight-normal">로그인</h1>

                    <div className="form-label-group">
                        <label htmlFor="inputId">아이디</label>
                        <input type="id" id="inputId" className="form-control" placeholder="아이디" required autoFocus/>
                    </div>

                    <div className="form-label-group">
                        <label htmlFor="inputPassword">비밀번호</label>
                        <input type="password" id="inputPassword" className="form-control" placeholder="비밀번호" required/>
                    </div>

                    <button className="btn btn-lg btn-primary btn-block mt-4" type="submit">로그인</button>
                    <a className="nav-link" href="/register">회원가입</a>
                </div>
            </form>
        </PageBlock>
    );
};

export default LoginPage;