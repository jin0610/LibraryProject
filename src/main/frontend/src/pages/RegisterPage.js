import React, { useState } from "react";
import PageBlock from "../components/PageBlock";
import Header from "../components/sample/Header";
import Banner from "../components/sample/Banner";
import client from "../client";

const RegisterPage = () => {
    const [id, setId] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [idDup, setIdDup] = useState('');
    const [phoneDup, setPhoneDup] = useState('');
    const [emailDup, setEmailDup] = useState('');

    const formatPhone = (e) => {
        let digits = e.target.value.replace(/\D/g, '');
        if (digits.length > 11) digits = digits.slice(0, 11);

        let formatted = digits;
        if (digits.length >= 11) {
            formatted = digits.replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3');
        } else if (digits.length >= 8) {
            formatted = digits.replace(/(\d{3})(\d{4})(\d{1,4})/, '$1-$2-$3');
        } else if (digits.length >= 4) {
            formatted = digits.replace(/(\d{3})(\d{1,3})/, '$1-$2');
        }

        setPhone(formatted);
    };

    const handleSubmit = async (event) => {
        event.preventDefault(); // 기본 폼 제출 방지

        let formData = Object.fromEntries(new FormData(event.target));

        const formPhone = formData.phone?.trim();
        const formEmail = formData.email?.trim();
        const formId = formData.userId?.trim();

        if (formId.length < 5) {
            alert("아이디는 ");
            return;
        }

        if (formPhone.length !== 13 || !/^\d{3}-\d{4}-\d{4}$/.test(formPhone)) {
            alert("연락처는 010-1234-5678 형식의 13자리여야 합니다.");
            return;
        }

        if (formEmail) {
            alert("이메일은 ");
            return;
        }

        if (!event.target.querySelector("input[name='gender']:checked")) {
            alert("성별을 선택해주세요.");
            return;
        }

        if (!event.target.querySelector("input[name='notiStatus']:checked")) {
            formData.notiStatus = "N";
        }

        formData.userLevel = "0";
        formData.address = formData.address || "";

        try {
            const [idRes, phoneRes, emailRes] = await Promise.all([
                client.get(`/auth/check-id?userId=${formId}`),
                client.get(`/auth/check-phone?phone=${formPhone}`),
                client.get(`/auth/check-email?email=${formEmail}`)
            ]);

            if (idRes.data.exists) {
                alert("이미 사용 중인 아이디입니다.");
                return;
            }
            if (phoneRes.data.exists) {
                alert("이미 등록된 전화번호입니다.");
                return;
            }
            if (emailRes.data.exists) {
                alert("이미 등록된 이메일입니다.");
                return;
            }

            const response = await client.post("/auth/register", JSON.stringify(formData), {
                headers: {
                    "Origin": "http://localhost:3000",
                    "Content-Type": "application/json"
                }
            });

            alert("회원가입 성공: " + response.data);

        } catch(error) {
            alert("에러 발생: " + error.message || error);
        }
    };

    return (
        <PageBlock>
            <Header />
            <Banner />
            <form id="form-register" className="form-register" onSubmit={handleSubmit}>
                <h4 className="mb-3">회원가입</h4>

                <div className="mb-3">
                    <label htmlFor="userId">아이디</label>
                    <input type="text" name="userId" id="userId" placeholder="아이디" required />
                </div>

                <div className="mb-3">
                    <label htmlFor="userPwd">비밀번호</label>
                    <input type="password" name="userPwd" id="userPwd" placeholder="비밀번호" required />
                </div>

                <div className="mb-3">
                    <label htmlFor="userName">이름</label>
                    <input type="text" name="userName" id="userName" placeholder="이름" required />
                </div>

                <div className="mb-3">
                    <label htmlFor="phone">연락처</label>
                    <input type="text" name="phone" value={phone} onInput={formatPhone} maxLength={13} required />
                </div>[

                <div className="mb-3 col-md-6">
                    <label htmlFor="birthdate" className="w-25">생년월일</label>
                    <input type="date" name="birthdate" id="birthdate" />
                </div>

                {/* 성별 선택 (라디오 버튼으로 변경) */}
                <div className="mb-3 col-md-6">
                    <label className="w-25">성별</label>
                    <input type="radio" name="gender" value="M" /> 남
                    <input type="radio" name="gender" value="F" className="ms-3" /> 여
                </div>

                {/* 알림 수신 선택 */}
                <div className="mb-3 col-md-6">
                    <label className="w-25">알림 수신</label>
                    <input type="checkbox" name="notiStatus" value="Y" /> 동의
                </div>

                <div className="text-center mb-4">
                    <button className="btn btn-lg btn-primary btn-block mt-4" type="submit">회원가입</button>
                </div>
            </form>
        </PageBlock>
    );
};

export default RegisterPage;