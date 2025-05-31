package org.project.libraryProject.service.impl;

import org.project.libraryProject.entity.Notice;
import org.project.libraryProject.repository.NoticeRepository;
import org.project.libraryProject.service.NoticeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
public class NoticeServiceImpl implements NoticeService {

    @Autowired
    private final NoticeRepository noticeRepository;

    public NoticeServiceImpl(NoticeRepository noticeRepository){
        this.noticeRepository = noticeRepository;
    }
    // 모든 공지사항 목록 가져오기
    @Override
    public Page<Notice> getNoticeList(int page){
        int pageSize = 10;
        page = Math.max(0, page - 1);

        return noticeRepository.findAll(PageRequest.of(page, pageSize));
    };
//    public Page<Notice> getNoticeList(){
//        Page<Notice> noticeList = noticeRepository.findAll();
//        for(Notice notice : noticeList){
//            System.out.println("noticeId : " + notice.getNotice_id());
//            System.out.println("title : " + notice.getTitle());
//
//        }
//        System.out.println("Fetched noticeList : " + noticeList);
//        return noticeList;
//    };

    public Notice getNoticebyId(int noticeId){
        return noticeRepository.findNoticeByNoticeId(noticeId);
    }
}
