import PageBlock from "../components/PageBlock";
import Header from "../components/sample/Header";
import Banner from '../components/sample/Banner';
import BookListImg from "../components/sample/BookListImg";
import InputBox from "../components/sample/InputBox";

import React, { useEffect, useState } from "react";
import axios from "axios";
import client from "../client";

const BookListPage = () =>{
        const [books, setBooks] = useState([]);
        const [currentPage, setCurrentPage] = useState(1);
        const [totalPages, setTotalPages] = useState(0);

        const pageChange = (page) => {
            client.get(`/api/books?page=${page}`, {
                headers: {
                    "Origin": "http://localhost:3000"
                }            })
                .then(response => {
                    setCurrentPage(page);
                    setBooks(response.data.content);
                    setTotalPages(response.data.totalPages);
                })
                .catch(error => {
                    console.error("error", error);
                });
        }

        // 컴포넌트가 처음 렌더링될 때 데이터 가져오기
        useEffect(() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
            pageChange(currentPage);
        }, [currentPage]);

        // 페이지 버튼 생성
        const pageButtons = () => {
            const buttons = [];
            for (let i = 1; i <= totalPages; i++) {
                buttons.push(
                    <li className={`page-item ${currentPage === i ? "active" : ""}`}>
                        <button rel="canonical" role="button" className="page-link mx-1 rounded" tabIndex="-1"
                                aria-current="page"
                                key={i}
                                onClick={() => pageChange(i)}
                                disabled={i === currentPage}
                        >
                            {i}
                        </button>
                    </li>
                );
            }
            return buttons;
        };

    return (
        <PageBlock>
            <Header/>
            <Banner/>
            <InputBox/>
            <div>
                <ul>
                    <BookListImg
                        books={books}
                        pageChange={pageChange}
                        currentPage={currentPage}
                        pageButtons={pageButtons}
                    />
                </ul>
            </div>
        </PageBlock>
    );
};
export default BookListPage;