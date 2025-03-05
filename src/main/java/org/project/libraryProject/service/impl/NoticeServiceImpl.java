package org.project.libraryProject.service.impl;

import org.project.libraryProject.entity.Notice;
import org.project.libraryProject.repository.NoticeRepository;
import org.project.libraryProject.service.NoticeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class NoticeServiceImpl implements NoticeService {

    @Autowired
    private final NoticeRepository noticeRepository;

    public NoticeServiceImpl(NoticeRepository noticeRepository){
        this.noticeRepository = noticeRepository;
    }
    // 모든 공지사항 목록 가져오기
    @Override
    public List<Notice> getAllNoticeList(){
        List<Notice> noticeList = noticeRepository.findAll();
        for(Notice notice : noticeList){
            System.out.println("noticeId : " + notice.getNotice_id());
            System.out.println("title : " + notice.getTitle());

        }
        System.out.println("Fetched noticeList : " + noticeList);
        return noticeList;
    };
}
