import { useState } from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";

function ProtectedRoute() {
    const token = localStorage.getItem("token");
    const [showModal, setShowModal] = useState(!token);
    const navigate = useNavigate();

    const handleLoginClick = () => {
        setShowModal(false);
        navigate("/auth/login");
    };

    if (token) {
        return <Outlet />;
    }

    return (
        <>
            {showModal && (
                <div style={{
                    position: "fixed",
                    top: 0, left: 0, right: 0, bottom: 0,
                    backgroundColor: "rgba(0,0,0,0.5)",
                    display: "flex", justifyContent: "center", alignItems: "center",
                    zIndex: 1000,
                }}>
                    <div style={{
                        backgroundColor: "white",
                        padding: 20,
                        borderRadius: 8,
                        width: 300,
                        textAlign: "center",
                        boxShadow: "0 2px 8px rgba(0,0,0,0.26)",
                    }}>
                        <p style={{ marginBottom: 20, fontSize: 16 }}>
                            로그인이 필요합니다.
                        </p>
                        <button
                            onClick={handleLoginClick}
                            style={{
                                padding: "10px 20px",
                                borderRadius: 5,
                                border: "none",
                                backgroundColor: "#007bff",
                                color: "white",
                                cursor: "pointer",
                                fontSize: 16,
                            }}
                        >
                            로그인
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}

export default ProtectedRoute;