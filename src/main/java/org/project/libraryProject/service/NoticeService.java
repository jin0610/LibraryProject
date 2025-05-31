package org.project.libraryProject.service;

import org.project.libraryProject.entity.Notice;
import org.springframework.data.domain.Page;

import java.util.List;

public interface NoticeService {

    // 모든 공지사항 목록 가져오기
    Page<Notice> getNoticeList(int page);

    Notice getNoticebyId(int noticeId);
}
