package org.project.libraryProject.service;

import org.project.libraryProject.entity.Notice;

import java.util.List;

public interface NoticeService {

    // 모든 공지사항 목록 가져오기
    List<Notice> getAllNoticeList();
}
