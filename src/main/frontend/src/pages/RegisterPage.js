import React, { useState } from "react";
import PageBlock from "../components/PageBlock";
import Header from "../components/sample/Header";
import Banner from "../components/sample/Banner";
import client from "../client";
import { useNavigate } from 'react-router-dom';

const RegisterPage = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        userId: "",
        userPwd: "",
        userName: "",
        phone: "",
        email: "",
        gender: "",
        notiStatus: "",
        address: "",
        birthdate: "2025-01-01",
        userLevel: "0",
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;

        if (name === "phone") {
            let digits = value.replace(/\D/g, '');
            if (digits.length > 11) digits = digits.slice(0, 11);

            let formatted = digits;
            if (digits.length >= 11) {
                formatted = digits.replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3');
            } else if (digits.length >= 8) {
                formatted = digits.replace(/(\d{3})(\d{4})(\d{1,4})/, '$1-$2-$3');
            } else if (digits.length >= 4) {
                formatted = digits.replace(/(\d{3})(\d{1,3})/, '$1-$2');
            }

            setFormData((prev) => ({
                ...prev,
                phone: formatted,
            }));
            return;
        }

        setFormData((prev) => ({
            ...prev,
            [name]: type === "checkbox"
                ? (checked ? "Y" : "N")
                : value
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault(); // 기본 폼 제출 방지

        const trimmed = {
            userId: formData.userId.trim(),
            userPwd: formData.userPwd.trim(),
            userName: formData.userName.trim(),
            phone: formData.phone.trim(),
            email: formData.email.trim(),
            gender: formData.gender || "",
            notiStatus: formData.notiStatus || "N",
            address: formData.address.trim() || "",
            birthdate: formData.birthdate || "",
            userLevel: formData.userLevel || "0",
        };

        if (trimmed.userId.length < 3) {
            alert("아이디는 3자리 이상으로 입력해주세요.");
            return;
        }

        if (trimmed.userPwd.length < 8) {
            alert("비밀번호는 8자리 이상으로 입력해주세요.");
            return;
        }

        if (trimmed.phone.length !== 13 || !/^\d{3}-\d{4}-\d{4}$/.test(trimmed.phone)) {
            alert("연락처는 010-1234-5678 형식으로 입력해주세요.");
            return;
        }

        if (!trimmed.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed.email)) {
            alert("이메일 형식으로 입력해주세요.");
            return;
        }

        if (!event.target.querySelector("input[name='gender']:checked")) {
            alert("성별을 선택해주세요.");
            return;
        }

        if (!event.target.querySelector("input[name='notiStatus']:checked")) {
            formData.notiStatus = "N";
        }

        try {
            const [idRes, phoneRes, emailRes] = await Promise.all([
                client.get(`/auth/check-id?userId=${trimmed.userId}`),
                client.get(`/auth/check-phone?phone=${trimmed.phone}`),
                client.get(`/auth/check-email?email=${trimmed.email}`),
            ]);

            if (idRes.data.exists) {
                alert("이미 사용 중인 아이디입니다.");
                return;
            }
            if (phoneRes.data.exists) {
                alert("이미 등록된 연락처입니다.");
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

            alert("회원가입 되었습니다.");
            navigate('/auth/login');

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
                    <input type="text" name="userId" id="userId" placeholder="아이디"
                           onChange={handleChange} required />
                </div>

                <div className="mb-3">
                    <label htmlFor="userPwd">비밀번호</label>
                    <input type="password" name="userPwd" id="userPwd" placeholder="비밀번호"
                           value={formData.password} onChange={handleChange} required />
                </div>

                <div className="mb-3">
                    <label htmlFor="userName">이름</label>
                    <input type="text" name="userName" id="userName" placeholder="이름"
                           onChange={handleChange} required />
                </div>

                <div className="mb-3">
                    <label htmlFor="phone">연락처</label>
                    <input type="text" name="phone" id="phone" value={formData.phone}
                           onChange={handleChange} maxLength={13} required />
                </div>

                <div className="mb-3">
                    <label htmlFor="email">이메일</label>
                    <input type="text" name="email" onChange={handleChange} required />
                </div>

                {/*<div className="mb-3 col-md-6">*/}
                {/*    <label htmlFor="birthdate" className="w-25">생년월일</label>*/}
                {/*    <input type="date" name="birthdate" id="birthdate" value={formData.birthdate} onChange={handleChange} />*/}
                {/*</div>*/}

                <div className="mb-3 col-md-6">
                    <label className="w-25">성별</label>
                    <input type="radio" name="gender" value="M" checked={formData.gender === "M"} onChange={handleChange}/> 남
                    <input type="radio" name="gender" value="F" className="ms-3" checked={formData.gender === "F"} onChange={handleChange}/> 여
                </div>

                <div className="mb-3 col-md-6">
                    <label className="w-25">알림 수신</label>
                    <input type="checkbox" name="notiStatus" value="Y" checked={formData.notiStatus === "Y"} onChange={handleChange}/> 동의
                </div>

                <div className="text-center mb-4">
                    <button className="btn btn-lg btn-primary btn-block mt-4" type="submit">회원가입</button>
                </div>
            </form>
        </PageBlock>
    );
};

export default RegisterPage;