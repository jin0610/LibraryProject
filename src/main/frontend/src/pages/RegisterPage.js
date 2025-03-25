import PageBlock from "../components/PageBlock";
import Header from "../components/sample/Header";
import Banner from "../components/sample/Banner";
import InputBox from "../components/sample/InputBox";
import React, {useEffect} from "react";
import client from "../client";

const RegisterPage = () => {
    useEffect(() => {
        const form = document.getElementById("form-register");
        if (form) {
            form.addEventListener("submit", handleSubmit);
        }

        return () => {
            if (form) {
                form.removeEventListener("submit", handleSubmit);
            }
        };
    }, []);

    const handleSubmit = (event) => {
        event.preventDefault(); // 기본 폼 제출 방지

        let formData = new FormData(event.target); // 폼 데이터 가져오기

        // 체크되지 않은 체크박스 수동 추가
        if (!document.querySelector("input[name='notiStatus']:checked")) {
            formData.append("notiStatus", "N"); // default
        }

        if (!document.querySelector("input[name='gender']:checked")) {
            formData.append("gender", "M"); // default
        }

        client.post("/auth/register", formData, {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                "Accept": "application/json"
            }
        })
            .then(response => {
                alert("회원가입 성공: " + response.data);
            })
            .catch(error => {
                console.error("에러 발생:", error);
            });
    };

    return (
        <PageBlock>
            <Header/>
            <Banner/>
            <form id="form-register" className="form-register">
            <h4 className="mb-3">회원가입</h4>
                <div className="mb-3">
                    <label htmlFor="firstName">아이디</label>
                    <div className="input-group">
                        <input type="text" name="userId" id="userId" placeholder="아이디" required/>
                        <div className="invalid-feedback">
                            아이디를 입력해주세요
                        </div>
                    </div>
                </div>

                <div className="mb-3">
                    <label htmlFor="userPwd">비밀번호</label>
                    <div className="input-group">
                        <input type="password" name="userPwd" id="userPwd" placeholder="비밀번호" required/>
                        <div className="invalid-feedback">
                            비밀번호를 입력해주세요
                        </div>
                    </div>
                </div>

                <div className="mb-3">
                    <label htmlFor="userName">이름</label>
                    <input type="text" name="userName" id="userName" placeholder="이름" required/>
                        <div className="invalid-feedback">
                            이름을 입력해주세요
                        </div>
                </div>

                <div className="mb-3">
                    <label htmlFor="phone">연락처</label>
                    <input type="text" name="phone" id="phone" placeholder="000-0000-0000" required/>
                        <div className="invalid-feedback">
                            연락처를 입력해주세요
                        </div>
                </div>

                <div className="mb-3 col-md-6">
                    <label htmlFor="birthdate" className="w-25">생년원일</label>
                    <input type="date" name="birthdate" id="birthdate"/>
                </div>

                <div className="mb-3 col-md-6">
                    <label htmlFor="gender" className="w-25">성별</label>
                    {/*<input type="checkbox" name="gender" className="gender" value="M"/> 남*/}
                    <input type="checkbox" name="gender" className="gender ms-3" value="F"/> 여
                </div>

                <div className="mb-3 col-md-6">
                    <label htmlFor="notiStatus" className="w-25">알림 수신</label>
                    {/*<input type="checkbox" name="notiStatus" className="notiStatus" value="Y"/> 동의*/}
                    <input type="checkbox" name="notiStatus" className="notiStatus ms-3" value="N"/> 거부
                </div>

                <div className="text-center mb-4">
                    <button className="btn btn-lg btn-primary btn-block mt-4" type="submit">회원가입</button>
                </div>
            </form>
        </PageBlock>
    );
};

export default RegisterPage;