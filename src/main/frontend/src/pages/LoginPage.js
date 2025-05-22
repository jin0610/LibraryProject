import PageBlock from "../components/PageBlock";
import Header from "../components/sample/Header";
import Banner from "../components/sample/Banner";
import "../components/css/register-login.css";
import client from "../client";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


const LoginPage = () => {
    const [userId, setUserId] = useState("");
    const [userPwd, setUserPwd] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await client.post("/auth/login", {
                userId,
                userPwd
            });

            // 로그인 성공 시 토큰 저장
            localStorage.setItem("token", response.data.token);
            alert("로그인 되었습니다.");
            navigate("/");
        } catch (error) {
            alert("로그인에 실패하였습니다." + (error.response?.data?.message || error.message));
        }
    };

    return (
        <PageBlock>
            <Header/>
            <Banner/>
            <form className="form-login" onSubmit={handleLogin}>
                <div className="text-center mb-4">
                    <h1 className="h3 mb-3 font-weight-normal">로그인</h1>

                    <div className="form-label-group">
                        <label htmlFor="inputId">아이디</label>
                        <input type="id" id="inputId" className="form-control" placeholder="아이디" value={userId}
                               onChange={(e) => setUserId(e.target.value)} required autoFocus/>
                    </div>

                    <div className="form-label-group">
                        <label htmlFor="inputPassword">비밀번호</label>
                        <input type="password" id="inputPassword" className="form-control" placeholder="비밀번호" value={userPwd}
                               onChange={(e) => setUserPwd(e.target.value)} required/>
                    </div>

                    <button className="btn btn-lg btn-primary btn-block mt-4" type="submit">로그인</button>
                    <a className="nav-link" href="/register">회원가입</a>
                </div>
            </form>
        </PageBlock>
    );
};

export default LoginPage;