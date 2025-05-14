package org.project.libraryProject.controller;

import lombok.extern.slf4j.Slf4j;
import org.project.libraryProject.entity.Notice;
import org.project.libraryProject.service.NoticeService;
import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletResponse;
import java.util.HashMap;
import java.util.List;

@Slf4j
@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/notice")
public class NoticeController {

    private final NoticeService noticeService;

    public NoticeController(NoticeService noticeService){
        this.noticeService = noticeService;
    }

    @GetMapping
    public Page<Notice> getNotice(@RequestParam(value = "page", required = false, defaultValue = "1") int page){
//        System.out.println("noticeList : " + noticeService.getNoticeList(page));
        return noticeService.getNoticeList(page);
    }
}